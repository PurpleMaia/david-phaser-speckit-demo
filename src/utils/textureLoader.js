import { svgToDataUri } from './svg.js';

/**
 * Convert an SVG string into a Phaser texture and register it.
 * @param {Phaser.Scene} scene - Scene with a texture manager.
 * @param {string} key - Unique texture key.
 * @param {string} svgString - Complete SVG markup.
 * @param {number} width - Texture width in pixels (for documentation; Phaser infers from SVG).
 * @param {number} height - Texture height in pixels (for documentation; Phaser infers from SVG).
 */
export function svgToTexture(scene, key, svgString, width, height) {
  const dataUri = svgToDataUri(svgString);
  // Phaser will parse the SVG dimensions; width/height are provided for clarity with generators.
  scene.textures.addBase64(key, dataUri);
}
