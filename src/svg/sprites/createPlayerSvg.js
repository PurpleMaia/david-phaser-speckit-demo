import { colors } from '../palette.js';

/**
 * Generate the player SVG (placeholder shape, visuals will evolve in US1).
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
    <rect x="4" y="4" width="24" height="24" rx="4" fill="${bodyColor}" />
    <rect x="9" y="9" width="14" height="14" rx="2" fill="${bodyAccent}" />
    <circle cx="12" cy="14" r="2" fill="${headColor}" />
    <circle cx="20" cy="14" r="2" fill="${headColor}" />
    <rect x="12" y="19" width="8" height="2" fill="${eyeColor}" />
  </svg>
  `.trim();
}
