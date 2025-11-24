import { colors } from '../palette.js';

/**
 * Generate the chest SVG (placeholder; glow/shading will be enhanced in US3).
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
    <rect x="2" y="6" width="28" height="14" rx="3" fill="${baseColor}" opacity="${opacity}" />
    <rect x="4" y="8" width="24" height="10" rx="2" fill="${accentColor}" opacity="${opacity}" />
    <rect x="14" y="4" width="4" height="4" fill="${colors.dialogBg}" opacity="${opacity}" />
  </svg>
  `.trim();
}
