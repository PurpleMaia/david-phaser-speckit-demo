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
    <circle cx="48" cy="18" r="8" fill="#FFFFFF" opacity="0.03" />
    <circle cx="20" cy="46" r="7" fill="#000000" opacity="0.04" />
  </svg>
  `.trim();
}
