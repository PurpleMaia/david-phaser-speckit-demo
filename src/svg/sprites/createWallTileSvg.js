import { colors } from '../palette.js';

/**
 * Generate wall tile SVG.
 * @param {Object} config
 * @param {string} [config.type='solid'] - 'solid' | 'doorway' (doorway visuals will be enhanced in US2)
 * @returns {string} Complete SVG markup string
 */
export function createWallTileSvg({ type = 'solid' } = {}) {
  if (type === 'doorway') {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" fill="${colors.wallBase}" />
      <rect x="4" y="4" width="56" height="56" fill="${colors.wallDark}" rx="6" />
      <rect x="10" y="10" width="44" height="44" fill="${colors.wallBase}" rx="5" />
      <rect x="18" y="8" width="28" height="48" rx="10" fill="${colors.doorway}" />
    </svg>
    `.trim();
  }

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="${colors.wallBase}" />
    <rect x="4" y="4" width="56" height="56" rx="6" fill="${colors.wallDark}" />
    <rect x="8" y="8" width="48" height="48" rx="5" fill="${colors.wallBase}" />
    <rect x="12" y="12" width="40" height="40" rx="4" fill="${colors.wallDark}" opacity="0.5" />
    <rect x="28" y="4" width="8" height="56" fill="#FFFFFF" opacity="0.06" />
  </svg>
  `.trim();
}
