export function createHud(scene) {
  return scene.add.text(16, 16, 'Move: WASD/Arrows | Interact: E or Space', {
    fontSize: '16px',
    color: '#ffffff',
  });
}
