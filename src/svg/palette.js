// Central color palette capped at 16 distinct values (includes darker pairs and shadow)
export const colors = {
  // Characters (player and NPC share skin tones to stay within 16-color limit)
  playerSkin: '#F4D9B0',
  playerSkinDark: '#D9B178',
  playerShirt: '#3E95D4',
  playerShirtDark: '#2E6FA5',
  playerPants: '#C1A178', // Reused for walls/props to limit palette size
  playerPantsDark: '#8C6A44',

  // NPC robe and shared doorway accent
  npcRobe: '#9A65C6',
  npcRobeDark: '#6E4791',

  // Environment
  floorBase: '#2E2E2E',
  floorAlt: '#353535',
  wallBase: '#9B7A53',
  wallDark: '#6E5236',
  doorway: '#2A2A2A', // Door opening color

  // Interactive object
  chestBase: '#F2C94C',
  chestDark: '#C99A2B',
  chestGlow: '#F2C94C', // Glow uses same hue with opacity in SVG for brightness

  // Decorative props and UI
  plantGreen: '#7CB342',
  plantGreenDark: '#558B2F',
  dialogBg: '#F5F5DC',
  dialogBorder: '#5D4C3A',
  dialogShadow: '#00000080',
};
