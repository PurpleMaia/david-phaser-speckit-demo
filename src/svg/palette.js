// Central color palette capped at 16 distinct values (includes darker pairs and shadow)
export const colors = {
  // Characters (player and NPC share skin tones to stay within 16-color limit)
  playerSkin: '#FFDBAC',
  playerSkinDark: '#D4A574',
  playerShirt: '#4A90E2',
  playerShirtDark: '#2E5A8E',
  playerPants: '#8B7355', // Reused for walls/props to limit palette size
  playerPantsDark: '#5D4C3A',

  // NPC robe and shared doorway accent
  npcRobe: '#9B59B6',
  npcRobeDark: '#6C3483',

  // Environment
  floorBase: '#D2B48C',
  floorAlt: '#C9A57B',
  wallBase: '#8B7355',
  wallDark: '#5D4C3A',
  doorway: '#9B59B6', // Shares value with npcRobe to stay within color budget

  // Interactive object
  chestBase: '#D4AF37',
  chestDark: '#9B7F2A',
  chestGlow: '#D4AF37', // Glow uses same hue with opacity in SVG for brightness

  // Decorative props and UI
  plantGreen: '#7CB342',
  plantGreenDark: '#558B2F',
  dialogBg: '#F5F5DC',
  dialogBorder: '#5D4C3A',
  dialogShadow: '#00000080',
};
