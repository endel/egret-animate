/**
 * @module egret-animate
 * @namespace egretAnimate
 */
(function(window) {
  /**
   * Utilities for converting
   * @class utils
   */
  var utils = {};

  /**
   * Convert the loaded texture atlas to images
   * @method addImages
   * @static
   * @param {egret.Texture} atlas The atlas to convert images
   */
  utils.addImages = function(atlas)
  {
    var id;

    // This needs to happen before we create the character
    // so that the textures exist for the movieclip
    for(var frame in atlas.textures)
    {
      // Remove the file extension from the image name
      id = frame.substring(0, frame.indexOf("."));
      window.pixiflash_images[id] = atlas.textures[frame];
    }
  };

  /**
   * Convert a string color "#ffffff" to int 0xffffff
   * @method colorToHex
   * @private
   * @param {String} color
   * @return {int} The hex color
   */
  utils.colorToHex = function(color)
  {
    if (/^rgba\(/.test(color))
    {
      // Remove "rgba(" and ")" and turn into array
      color = color.substring(5, color.length - 1).split(',');
      color = 65536 * parseInt(color[0]) +
        256 * parseInt(color[1]) +
        parseInt(color[2]);
    }
    else
    {
      color = parseInt(color.replace(/^#/, ''), 16);
    }
    return color;
  };

  /**
   * Get the alpha color from color string
   * @method alphaFromColor
   * @private
   * @param {String} color
   */
  utils.alphaFromColor = function(color)
  {
    if (/^rgba\(/.test(color))
    {
      return parseFloat(color.substring(
        color.lastIndexOf(',') + 1,
        color.lastIndexOf(')')
      ));
    }
    return 1;
  };

  // Assign to namespace
  egretAnimate.utils = utils;

}(window));
