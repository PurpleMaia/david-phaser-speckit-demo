import { colors } from '../palette.js';

/**
 * Generate the player SVG using a simple humanoid shape that matches the mock.
 * @param {Object} config
 * @param {string} [config.bodyColor=colors.playerShirt]
 * @param {string} [config.bodyAccent=colors.playerShirtDark]
 * @param {string} [config.headColor=colors.playerSkin]
 * @param {string} [config.eyeColor=colors.dialogBorder]
 * @returns {string} Complete SVG markup string
 */
export function createPlayerSvg({
  bodyColor = colors.playerShirt,
  bodyAccent = colors.playerShirtDark,
  headColor = colors.playerSkin,
  eyeColor = colors.dialogBorder,
} = {}) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <ellipse cx="16" cy="26" rx="5" ry="2.25" fill="${colors.dialogBorder}" opacity="0.25" />
    <rect x="12" y="12" width="8" height="14" rx="3" fill="${bodyColor}" />
    <rect x="12" y="15" width="8" height="4" rx="2" fill="${bodyAccent}" opacity="0.9" />
    <rect x="13.25" y="24" width="5.5" height="2" rx="1" fill="${bodyAccent}" opacity="0.8" />
    <circle cx="16" cy="10" r="4" fill="${headColor}" />
    <path d="M12 9.5 C13 7.5 14.5 7 16 7 c1.5 0 3 .5 4 2.5 L16 9 Z" fill="${colors.playerSkinDark}" />
    <rect x="13.25" y="10.75" width="5.5" height="1.5" rx="0.75" fill="${eyeColor}" opacity="0.22" />
  </svg>
  `.trim();
}
