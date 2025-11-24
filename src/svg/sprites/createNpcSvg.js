import { colors } from '../palette.js';

/**
 * Generate the NPC SVG with a cloaked silhouette aligned to the mock.
 * @param {Object} config
 * @param {string} [config.bodyColor=colors.npcRobe]
 * @param {string} [config.bodyAccent=colors.npcRobeDark]
 * @param {string} [config.eyeColor=colors.playerPantsDark]
 * @returns {string} Complete SVG markup string
 */
export function createNpcSvg({
  bodyColor = colors.npcRobe,
  bodyAccent = colors.npcRobeDark,
  eyeColor = colors.playerPantsDark,
} = {}) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <ellipse cx="16" cy="26" rx="5" ry="2.25" fill="${colors.dialogBorder}" opacity="0.25" />
    <rect x="10" y="11" width="12" height="16" rx="6" fill="${bodyColor}" />
    <rect x="11" y="15" width="10" height="4" rx="2" fill="${bodyAccent}" opacity="0.9" />
    <rect x="12.5" y="23.5" width="7" height="2.5" rx="1.25" fill="${bodyAccent}" opacity="0.85" />
    <circle cx="16" cy="9.75" r="3.75" fill="${colors.playerSkin}" />
    <rect x="13.1" y="10.25" width="5.8" height="1.3" rx="0.65" fill="${eyeColor}" opacity="0.22" />
  </svg>
  `.trim();
}
