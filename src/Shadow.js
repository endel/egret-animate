/**
 * @module egretAnimate
 * @namespace pixiflash
 */
(function(undefined) {
  var utils = egretAnimate.utils;

  /**
   * The class to emulate createjs.Shadow
   * @class Shadow
   */
  var Shadow = function(color, x, y, blur)
  {
    this.color = utils.colorToHex(color);
    this.alpha = utils.alphaFromColor(color);
    this.angle = Math.atan(y / x) || 0;
    this.distance = Math.sqrt(x * x + y * y);
    this.blur = blur;
  };

  // Assign to namespace
  egretAnimate.Shadow = Shadow;

}());
