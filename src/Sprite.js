/**
 * @module egret-animate
 * @namespace egretAnimate
 */
(function(undefined) {
    var EgretSprite = egret.Sprite,
        DisplayObject = egretAnimate.DisplayObject;

    /**
     * The class to emulate createjs.Sprite
     * @class Sprite
     * @extends egret.Sprite
     */
    var Sprite = function()
    {
      EgretSprite.call(this);
      DisplayObject.call(this);

      /**
       * The spritesheet to use
       * @property {egretAnimate.SpriteSheet} spriteSheet
       */
      this.spriteSheet = null;
    };

    // Extend egret.Sprite
    var p = Sprite.prototype = Object.create(EgretSprite.prototype);

    // Mixin the display object
    DisplayObject.mixin(p);

    //constructor for backwards/Flash exporting compatibility
    p.initialize = Sprite;

    /**
     * Goto and stop on a frame
     * @method gotoAndStop
     * @param {int} frame The frame index
     */
    p.gotoAndStop = function(frame)
    {
      // Due to the way Flash exports Sprites, we need to initialize each
      // instance on the first use here.

      if(!this._initialized)
      {
        var spriteSheet = this.spriteSheet;
        this.initialize();
        this.spriteSheet = spriteSheet;
        this._initialized = true;
      }

      if (!this.spriteSheet)
      {
        throw "Sprite doesn't have a spriteSheet";
      }

      this.texture = this.spriteSheet.getFrame(frame);
    };

    // Assign to namespace
    egretAnimate.Sprite = Sprite;

}());
