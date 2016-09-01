/**
 * @module egret-animate
 * @namespace egretAnimate
 */
(function(undefined) {
  var EgretText = egret.TextField,
      DisplayObject = egretAnimate.DisplayObject
      utils = egretAnimate.utils;

  /**
   * The class to emulate createjs.Text
   * @class Text
   * @extends egret.Text
   */
  var Text = function(text, font, color)
  {
    EgretText.call(this);
    DisplayObject.call(this);

    this.text = text;
    this.textColor = color && utils.colorToHex(color);
    this.fontFamily = font.match(/'([a-zA-Z\ ]+)'/)[1];
    this.size = parseInt(font);
    this.type = egret.TextFieldType.DYNAMIC;
    // this.border = true;

    this.addEventListener(egret.Event.ADDED, this._onTextAdded, this);
  };

  // Extend egret.Text
  var p = Text.prototype = Object.create(EgretText.prototype);

  p._onTextAdded = function() {
    // cache original X position
    if (!this._originalX) {
      this._originalX = this.x;
    }
    if (this.textAlign === egret.HorizontalAlign.CENTER) {
      this.x = this._originalX + this.parent.nominalBounds.x;
      this.width = this.parent.nominalBounds.width;
    }
  };

  Object.defineProperties(p, {
    /**
     * The text line height
     * @property {Number} lineHeight
     */
    lineHeight: {
      set: function(lineHeight)
      {
        // this.style.lineHeight = lineHeight;
        this.lineSpacing = lineHeight - this.size;
      },
      get: function()
      {
        return this.lineSpacing;
      }
    },

    /**
     * The text line width
     * @property {Number} lineWidth
     */
    lineWidth: {
      set: function(wordWrapWidth)
      {
        if (this.textWidth > wordWrapWidth) {
          this.wordWrap = true;
          this.multiline = true;
          this.width = wordWrapWidth;
          // this.$setWidth(wordWrapWidth);
        }

      },
      get: function()
      {
        return this.$getWidth();
      }
    },

    shadow: {
      set: function(shadow)
      {
        this.style.dropShadow = !!shadow;
        if (shadow)
        {
          this.style.dropShadowColor = shadow.color;
          // CreateJS can't handle these
          // this.style.dropShadowAngle = shadow.angle;
          // this.style.dropShadowDistance = shadow.distance;
        }
      }
    }
  });

  // Mixin the display object
  DisplayObject.mixin(p);

  //constructor for backwards/Flash exporting compatibility
  p.initialize = Text;

  // Assign to namespace
  egretAnimate.Text = Text;

}());
