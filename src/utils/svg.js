// Convert an SVG string into a data URI suitable for Phaser's loader.
export function svgToDataUri(svgString) {
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
}
