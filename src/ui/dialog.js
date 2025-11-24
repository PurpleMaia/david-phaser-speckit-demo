export function createDialog(scene) {
  const text = scene.add
    .text(scene.scale.width / 2, scene.scale.height - 80, '', {
      fontSize: '18px',
      color: '#ffffff',
      backgroundColor: '#000000',
      padding: { x: 8, y: 6 },
      align: 'center',
    })
    .setOrigin(0.5)
    .setDepth(10)
    .setVisible(false);

  return {
    show(message) {
      text.setText(message);
      text.setVisible(true);
    },
    hide() {
      text.setVisible(false);
    },
    isVisible() {
      return text.visible;
    },
  };
}
