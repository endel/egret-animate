/**
 * @module egret-animate
 * @namespace egretAnimate
 */
(function(undefined) {
  var EgretBitmap = egret.Bitmap,
      DisplayObject = egretAnimate.DisplayObject;

  /**
   * The class to emulate createjs.Bitmap
   * @class Bitmap
   * @extends PIXI.Bitmap
   */
  var Bitmap = function(image) {
    EgretBitmap.call(this, image);
    DisplayObject.call(this);
  };

  // Extend egret.Bitmap
  var p = Bitmap.prototype = Object.create(EgretBitmap.prototype);

  // Mixin the display object
  DisplayObject.mixin(p);

  //constructor for backwards/Flash exporting compatibility
  p.initialize = Bitmap;

  // Assign to namespace
  egretAnimate.Bitmap = Bitmap;
}());
