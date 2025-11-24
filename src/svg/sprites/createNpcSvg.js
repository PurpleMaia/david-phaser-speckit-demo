import { colors } from '../palette.js';

/**
 * Generate the NPC SVG (placeholder shape, visuals will evolve in US1).
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
    <rect x="4" y="4" width="24" height="24" rx="6" fill="${bodyColor}" />
    <rect x="8" y="10" width="16" height="10" rx="2" fill="${bodyAccent}" />
    <circle cx="12" cy="14" r="2" fill="${eyeColor}" />
    <circle cx="20" cy="14" r="2" fill="${eyeColor}" />
    <rect x="12" y="19" width="8" height="2" fill="${eyeColor}" />
  </svg>
  `.trim();
}
