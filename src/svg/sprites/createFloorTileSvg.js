import { colors } from '../palette.js';

/**
 * Generate floor tile SVG.
 * @param {Object} config
 * @param {number} [config.variant=0] - 0 | 1 | 2 (additional variants will be fleshed out in US2)
 * @returns {string} Complete SVG markup string
 */
export function createFloorTileSvg({ variant = 0 } = {}) {
  const palette = [colors.floorBase, colors.floorAlt, colors.playerPants];
  const fill = palette[variant] || palette[0];
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="${fill}" />
    <rect x="6" y="6" width="52" height="52" fill="#FFFFFF" opacity="0.04" />
    <rect x="12" y="12" width="40" height="40" fill="#000000" opacity="0.08" />
  </svg>
  `.trim();
}
