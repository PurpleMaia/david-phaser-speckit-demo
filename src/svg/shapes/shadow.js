/**
 * Generate a simple offset shadow rectangle SVG fragment.
 * @param {Object} params
 * @param {number} params.x
 * @param {number} params.y
 * @param {number} params.width
 * @param {number} params.height
 * @param {number} [params.rx=0]
 * @param {number} [params.ry=params.rx]
 * @param {string} [params.color='#00000080']
 * @returns {string} SVG element string (no <svg> wrapper)
 */
export function createShadow({ x, y, width, height, rx = 0, ry = rx, color = '#00000080' }) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" ry="${ry}" fill="${color}" />`;
}
