import Phaser from 'phaser';
import { svgToDataUri } from '../utils/svg.js';
import { floorSvg } from '../svg/floor.js';
import { wallSvg } from '../svg/wall.js';
import { playerSvg } from '../svg/player.js';
import { npcSvg } from '../svg/npc.js';
import { objectSvg } from '../svg/object.js';
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
    this.load.svg('floor-tile', svgToDataUri(floorSvg()), { width: 64, height: 64 });
    this.load.svg('wall-tile', svgToDataUri(wallSvg()), { width: 64, height: 64 });
    this.load.svg('player', svgToDataUri(playerSvg()), { width: 32, height: 32 });
    this.load.svg('npc', svgToDataUri(npcSvg()), { width: 32, height: 32 });
    this.load.svg('object', svgToDataUri(objectSvg(false)), { width: 32, height: 24 });
    this.load.svg('object-collected', svgToDataUri(objectSvg(true)), { width: 32, height: 24 });
  }

  create() {
    this.createRoom();
    this.setupInput();
    this.createPlayer();
    this.createNpc();
    this.createCollectible();
    this.createHud();
  }

  update() {
    this.updateMovement();
  }

  createRoom() {
    const tileSize = 64;
    const cols = Math.ceil(this.scale.width / tileSize);
    const rows = Math.ceil(this.scale.height / tileSize);

    // floor fill
    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        this.add.image(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, 'floor-tile');
      }
    }

    this.walls = this.physics.add.staticGroup();
    const wallThickness = 32;
    // top and bottom
    this.walls.create(this.scale.width / 2, wallThickness / 2, 'wall-tile').setDisplaySize(this.scale.width, wallThickness).refreshBody();
    this.walls.create(this.scale.width / 2, this.scale.height - wallThickness / 2, 'wall-tile').setDisplaySize(this.scale.width, wallThickness).refreshBody();
    // left and right
    this.walls.create(wallThickness / 2, this.scale.height / 2, 'wall-tile').setDisplaySize(wallThickness, this.scale.height).refreshBody();
    this.walls.create(this.scale.width - wallThickness / 2, this.scale.height / 2, 'wall-tile').setDisplaySize(wallThickness, this.scale.height).refreshBody();
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

  createCollectible() {
    const objX = 400;
    const objY = 400;
    this.objectSprite = this.add.sprite(objX, objY, 'object');
    this.objectZone = this.physics.add.staticImage(objX, objY, null).setSize(50, 50).refreshBody().setVisible(false);
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
      } else if (this.physics.overlap(this.playerSprite, this.objectZone)) {
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
    this.objectSprite.setTexture('object-collected');
    this.toggleDialog('You found a thing!');
  }
}
