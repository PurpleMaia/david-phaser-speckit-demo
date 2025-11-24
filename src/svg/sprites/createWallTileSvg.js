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
      <rect x="8" y="8" width="48" height="48" fill="${colors.wallDark}" />
      <rect x="16" y="12" width="32" height="40" rx="8" fill="${colors.doorway}" />
    </svg>
    `.trim();
  }

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
    <rect width="64" height="64" fill="${colors.wallBase}" />
    <rect x="6" y="6" width="52" height="52" fill="${colors.wallDark}" />
    <rect x="12" y="12" width="40" height="40" fill="${colors.playerPants}" opacity="0.6" />
  </svg>
  `.trim();
}
