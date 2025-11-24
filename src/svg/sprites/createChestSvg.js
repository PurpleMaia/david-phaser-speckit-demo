import { colors } from '../palette.js';

/**
 * Generate the chest SVG with a compact top-down look similar to the mock.
 * @param {Object} config
 * @param {string} [config.state='closed'] - 'closed' | 'collected'
 * @param {string} [config.baseColor=colors.chestBase]
 * @param {string} [config.accentColor=colors.chestDark]
 * @returns {string} Complete SVG markup string
 */
export function createChestSvg({
  state = 'closed',
  baseColor = colors.chestBase,
  accentColor = colors.chestDark,
} = {}) {
  const opacity = state === 'collected' ? 0.65 : 1;
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
    <rect x="4" y="8" width="24" height="12" rx="3" fill="${accentColor}" opacity="${opacity}" />
    <rect x="3" y="6" width="26" height="8" rx="3" fill="${baseColor}" opacity="${opacity}" />
    <rect x="6" y="10" width="20" height="2" rx="1" fill="${colors.playerPantsDark}" opacity="${opacity}" />
    <rect x="14.5" y="8.5" width="3" height="5" rx="1" fill="${colors.dialogBg}" opacity="${opacity}" />
  </svg>
  `.trim();
}
