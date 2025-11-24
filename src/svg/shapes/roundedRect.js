/**
 * Generate a rounded rectangle SVG fragment.
 * @param {Object} params
 * @param {number} params.x
 * @param {number} params.y
 * @param {number} params.width
 * @param {number} params.height
 * @param {number} [params.rx=0]
 * @param {number} [params.ry=params.rx]
 * @param {string} params.fill
 * @param {string} [params.stroke='none']
 * @param {number} [params.strokeWidth=0]
 * @returns {string} SVG element string (no <svg> wrapper)
 */
export function createRoundedRect({
  x,
  y,
  width,
  height,
  rx = 0,
  ry = rx,
  fill,
  stroke = 'none',
  strokeWidth = 0,
}) {
  return `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" />`;
}
