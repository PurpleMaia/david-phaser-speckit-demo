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
      <rect x="4" y="4" width="56" height="56" fill="${colors.wallDark}" rx="10" />
      <rect x="10" y="10" width="44" height="44" fill="${colors.wallBase}" rx="8" />
      <rect x="22" y="6" width="20" height="52" rx="9" fill="${colors.doorway}" />
      <rect x="18" y="12" width="4" height="40" rx="2" fill="#000000" opacity="0.18" />
    </svg>
    `.trim();
  }

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="${colors.wallDark}" />
    <rect x="2" y="6" width="60" height="52" rx="10" fill="${colors.wallBase}" />
    <rect x="6" y="12" width="52" height="40" rx="8" fill="${colors.wallDark}" opacity="0.22" />
    <rect x="6" y="8" width="52" height="6" fill="#FFFFFF" opacity="0.08" />
    <rect x="6" y="50" width="52" height="4" fill="#000000" opacity="0.12" />
  </svg>
  `.trim();
}
