/**
 * Generate a circle SVG fragment.
 * @param {Object} params
 * @param {number} params.cx
 * @param {number} params.cy
 * @param {number} params.r
 * @param {string} params.fill
 * @param {string} [params.stroke='none']
 * @param {number} [params.strokeWidth=0]
 * @returns {string} SVG element string (no <svg> wrapper)
 */
export function createCircle({ cx, cy, r, fill, stroke = 'none', strokeWidth = 0 }) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
}
