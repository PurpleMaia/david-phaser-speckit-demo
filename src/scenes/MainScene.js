import Phaser from 'phaser';
import { svgToTexture } from '../utils/textureLoader.js';
import { createFloorTileSvg } from '../svg/sprites/createFloorTileSvg.js';
import { createWallTileSvg } from '../svg/sprites/createWallTileSvg.js';
import { createPlayerSvg } from '../svg/sprites/createPlayerSvg.js';
import { createNpcSvg } from '../svg/sprites/createNpcSvg.js';
import { createChestSvg } from '../svg/sprites/createChestSvg.js';
import { createDialog } from '../ui/dialog.js';
import { createHud } from '../ui/hud.js';

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.player = null;
    this.controls = null;
    this.dialogVisible = false;
    this.collected = false;
  }

  preload() {
    this.registerTextures();
  }

  create() {
    this.createRoom();
    this.setupInput();
    this.createPlayer();
    this.createNpc();
    this.createChest();
    this.createHud();

    // Expose scene for smoke tests
    if (typeof window !== 'undefined') {
      window.__scene = this;
      window.__phaserReady = true;
    }
  }

  update() {
    this.updateMovement();
  }

  registerTextures() {
    svgToTexture(this, 'floor-0', createFloorTileSvg({ variant: 0 }), 64, 64);
    svgToTexture(this, 'wall-solid', createWallTileSvg({ type: 'solid' }), 64, 64);
    svgToTexture(this, 'wall-doorway', createWallTileSvg({ type: 'doorway' }), 64, 64);
    svgToTexture(this, 'player', createPlayerSvg(), 32, 32);
    svgToTexture(this, 'npc', createNpcSvg(), 32, 32);
    svgToTexture(this, 'chest', createChestSvg({ state: 'closed' }), 32, 24);
    svgToTexture(this, 'chest-collected', createChestSvg({ state: 'collected' }), 32, 24);
  }

  createRoom() {
    const tileSize = 64;
    const cols = Math.ceil(this.scale.width / tileSize);
    const rows = Math.ceil(this.scale.height / tileSize);

    // floor fill
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        this.add.image(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, 'floor-0');
      }
    }

    this.walls = this.physics.add.staticGroup();
    const wallThickness = 32;
    // top and bottom
    this.walls.create(this.scale.width / 2, wallThickness / 2, 'wall-solid').setDisplaySize(this.scale.width, wallThickness).refreshBody();
    this.walls.create(this.scale.width / 2, this.scale.height - wallThickness / 2, 'wall-solid').setDisplaySize(this.scale.width, wallThickness).refreshBody();
    // left and right
    this.walls.create(wallThickness / 2, this.scale.height / 2, 'wall-solid').setDisplaySize(wallThickness, this.scale.height).refreshBody();
    this.walls.create(this.scale.width - wallThickness / 2, this.scale.height / 2, 'wall-solid').setDisplaySize(wallThickness, this.scale.height).refreshBody();
  }

  setupInput() {
    this.controls = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      right: Phaser.Input.Keyboard.KeyCodes.D,
      upArrow: Phaser.Input.Keyboard.KeyCodes.UP,
      leftArrow: Phaser.Input.Keyboard.KeyCodes.LEFT,
      downArrow: Phaser.Input.Keyboard.KeyCodes.DOWN,
      rightArrow: Phaser.Input.Keyboard.KeyCodes.RIGHT,
      interact: Phaser.Input.Keyboard.KeyCodes.E,
      interactAlt: Phaser.Input.Keyboard.KeyCodes.SPACE,
    });
  }

  createPlayer() {
    this.playerSprite = this.physics.add.sprite(200, 200, 'player');
    this.playerSprite.setCollideWorldBounds(true);
    this.playerSprite.body.setSize(28, 28);
    this.physics.add.collider(this.playerSprite, this.walls);
  }

  createNpc() {
    const npcX = 600;
    const npcY = 200;
    this.npcSprite = this.physics.add.staticSprite(npcX, npcY, 'npc');
    this.npcSprite.refreshBody();
    this.npcZone = this.physics.add.staticImage(npcX, npcY, null).setSize(60, 60).refreshBody().setVisible(false);
  }

  createChest() {
    const objX = 400;
    const objY = 400;
    this.chestSprite = this.add.sprite(objX, objY, 'chest');
    this.chestZone = this.physics.add.staticImage(objX, objY, null).setSize(50, 50).refreshBody().setVisible(false);
  }

  createHud() {
    this.hintText = createHud(this);
    this.dialog = createDialog(this);
  }

  updateMovement() {
    const speed = 180;
    let vx = 0;
    let vy = 0;
    if (this.controls.left.isDown || this.controls.leftArrow.isDown) vx -= 1;
    if (this.controls.right.isDown || this.controls.rightArrow.isDown) vx += 1;
    if (this.controls.up.isDown || this.controls.upArrow.isDown) vy -= 1;
    if (this.controls.down.isDown || this.controls.downArrow.isDown) vy += 1;

    const interactPressed = Phaser.Input.Keyboard.JustDown(this.controls.interact) || Phaser.Input.Keyboard.JustDown(this.controls.interactAlt);
    if (this.dialogVisible) {
      this.playerSprite.setVelocity(0, 0);
      if (interactPressed) {
        this.toggleDialog();
      }
      return;
    }

    const mag = Math.hypot(vx, vy) || 1;
    this.playerSprite.setVelocity((vx / mag) * speed, (vy / mag) * speed);

    if (interactPressed) {
      if (this.physics.overlap(this.playerSprite, this.npcZone)) {
        this.toggleDialog('Hello there! Nice day for an adventure.');
      } else if (this.physics.overlap(this.playerSprite, this.chestZone)) {
        this.handleCollect();
      }
    }
  }

  toggleDialog(message) {
    if (this.dialog.isVisible()) {
      this.dialog.hide();
      this.dialogVisible = false;
      return;
    }
    this.dialogVisible = true;
    this.dialog.show(message);
  }

  handleCollect() {
    if (this.collected) {
      this.toggleDialog('Already collected.');
      return;
    }
    this.collected = true;
    this.chestSprite.setTexture('chest-collected');
    this.toggleDialog('You found a thing!');
  }
}
