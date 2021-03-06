/**
 * @module egret-animate
 * @namespace egretAnimate
 */
(function(undefined) {
   var Point = egret.Point;
   var ColorFilter = egretAnimate.ColorFilter;
   var uniqueId = 0;

   /**
    *  Mixins for the display objects used for bridging CreateJS over to PIXI.
    *  @class DisplayObject
    */
   var DisplayObject = function()
   {
     this.id = ++uniqueId;

     //mark these objects so that we can recognize them internally.
     this._isEgretAnimate = true;
     /**
      * x and y skew of the display object, with values in radians.
      * @property {egret.Point} skew
      */
     this.skew = new Point();

     this._srB = 0;
     this._srC = 0;
     this._crA = 1;
     this._crD = 1;

     this._cachedRotY = 0;
     this._cachedRotX = 0;

     /**
      * If false, the tick will not run on this display object (or its children). This can provide some performance benefits.
      * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
      * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
      * @property tickEnabled
      * @type Boolean
      * @default true
      **/
     this.tickEnabled = true;

     // //remove all listeners on this instance, because the CreateJS published files from flash
     // //makes prototypes in a way that breaks normal PIXI listener usage.
     // this.removeAllListeners();

     // Bound functions need to be bound later
     this.boundMaskChanged = false;

     //initialize tint variables:
     this._lastComputedTint = this._lastSelfTint = this._lastParentTint = this._selfTint = 0xFFFFFF;
     this.__filters = null;
   };

   var p = DisplayObject.prototype;

   var DEG_TO_RAD = Math.PI / 180;
   var RAD_TO_DEG = 180 / Math.PI;

   Object.defineProperties(p, {
     /**
      * Private array of filters - for interpretation of CJS ColorFilters as PIXI tint
      * @property {Array} _filters
      */
     _filters:
     {
       enumerable: true,
       get: function() { return this.__filters; },
       set: function(value)
       {
         if(!value)
         {
           this.__filters = null;
         }
         else if(value.length == 1 && value[0] instanceof ColorFilter && value[0].isTintOnly)
         {
           //ColorFilter added by CJS exporter - convert to PIXI tint
           this.tint = value[0].tint;
           this.__filters = null;
         }
         else
         {
           //make a copy, strip out any possible ColorFilters
           this.__filters = [];
           for(var i = 0; i < value.length; ++i)
           {
             if(value[i] instanceof ColorFilter && value[i].isTintOnly)
             {
               //ColorFilter added by CJS exporter - convert to PIXI tint
               this.tint = value[i].tint;
             }
             else
             {
               //normal PIXI filter or our wrapper for one?
               this.__filters.push(value[i]);
             }
           }
         }
       }
     },
     /**
      * Tint to apply to this display object - Interpreted from CJS ColorFilter (multiplicative only)
      * @property {UInt} tint
      */
     tint:
     {
       enumerable: true,
       get: function() {
         var parent = this.parent;
         if(parent && parent._isEgretAnimate)
         {
           var selfTint = this._selfTint;
           var parentTint = parent.tint;

           if(selfTint == 0xFFFFFF)
             this._lastComputedTint = parentTint;
           else if(parentTint == 0xFFFFFF)
             this._lastComputedTint = selfTint;
           else if(selfTint != this._lastSelfTint || parentTint != this._lastParentTint)
           {
             //calculate tint first time
             var max = 255;
             var parentR = (parentTint >> 16) & 0xff;
             var parentG = (parentTint >> 8) & 0xff;
             var parentB = parentTint & 0xff;
             var selfR = (selfTint >> 16) & 0xff;
             var selfG = (selfTint >> 8) & 0xff;
             var selfB = selfTint & 0xff;

             this._lastComputedTint = (Math.round((parentR * selfR) / max) << 16) | (Math.round((parentG * selfG) / max) << 8) | Math.round((parentB * selfB) / max);
           }

           this._lastSelfTint = selfTint;
           this._lastParentTint = parentTint;

           return this._lastComputedTint;
         }
         else
         {
           return this._selfTint;
         }
       },
       set: function(value)
       {
         this._selfTint = value;
       }
     },
     /**
      * The x skew value of the display object, in degrees.
      * This property provides parity with CreateJS display objects.
      * @property {Number} skewX
      */
     skewX:
     {
       enumerable: true,
       get: function() { return this.skew.x * RAD_TO_DEG; },
       set: function(value)
       {
         this.skew.x = value * DEG_TO_RAD;
       }
     },
     /**
      * The y skew value of the display object, in degrees.
      * This property provides parity with CreateJS display objects.
      * @property {Number} skewY
      */
     skewY:
     {
       enumerable: true,
       get: function() { return this.skew.y * RAD_TO_DEG; },
       set: function(value)
       {
         this.skew.y = value * DEG_TO_RAD;
       }
     },

     /**
      * The x value of the registration, or pivot, point.
      * This property provides parity with CreateJS display objects.
      * @property {Number} regX
      */
     regX:
     {
       enumerable: true,
       get: function() { return this.anchorOffsetX; },
       set: function(value)
       {
         this.anchorOffsetX = value;
       }
     },
     /**
      * The y value of the registration, or pivot, point.
      * This property provides parity with CreateJS display objects.
      * @property {Number} regY
      */
     regY:
     {
       enumerable: true,
       get: function() { return this.anchorOffsetY; },
       set: function(value)
       {
         this.anchorOffsetY = value;
       }
     },

     /**
      * The drawing graphics, these are necessary
      * for the compability with EaselJS Flash exports.
      * @property {egretAnimate.Shape|egretAnimate.Sprite} mask
      */
     mask: {
       enumerable: true,
       get: function()
       {
         return this._mask;
       },
       set: function (mask)
       {
         console.warn("mask not implemented");
         // var _maskShape = this._maskShape;
         // //if the old mask is a shape and is not the new mask, remove it
         // if (_maskShape && mask != _maskShape)
         // {
         //   if(--_maskShape._maskUses < 1)
         //   {
         //     if(_maskShape.parent)
         //       _maskShape.parent.removeChild(_maskShape);
         //   }
         //   _maskShape.off('graphicsChanged', this.onShapeChanged);
         // }
         // if (this._mask)
         // {
         //   //is this safe if a mask is reused multiple places?
         //   this._mask.renderable = true;
         // }
         // // If the mask is a shape apply the graphics as the shape
         // if (mask && mask instanceof egretAnimate.Shape)
         // {
         //   if(!this.boundMaskChanged)
         //   {
         //     this.boundMaskChanged = true;
         //     this.onShapeChanged = this.onShapeChanged.bind(this);
         //     this.onAddedWithMask = this.onAddedWithMask.bind(this);
         //   }
         //   if(_maskShape != mask)
         //   {
         //     _maskShape = this._maskShape = mask;
         //     ++_maskShape._maskUses;
         //     _maskShape.on('graphicsChanged', this.onShapeChanged);
         //   }
         //   if(mask.graphics.graphicsData.length)
         //   {
         //     this._mask = mask.graphics;
         //   }
         //   else
         //     this._mask = null;
         // }
         // else
         // {
         //   this._mask = mask;
         // }
         // if(!mask)
         // {
         //
         //   if(this._hasAddedEvent)
         //   {
         //     this.off("added", this.onAddedWithMask);
         //     this._hasAddedEvent = false;
         //   }
         // }
         // if (this._mask)
         // {
         //   // Wait until we're add and then add the mask
         //   // on the same container as this display object
         //   if (!this.parent)
         //   {
         //     //only add event if it isn't already included
         //     if(!this._hasAddedEvent)
         //     {
         //       this._hasAddedEvent = true;
         //       this.once("added", this.onAddedWithMask);
         //     }
         //   }
         //   else
         //   {
         //     if(mask.parent != this.parent)
         //       this.parent.addChild(mask);
         //   }
         //   this._mask.renderable = false;
         // }
       }
     }
   });

   p.onAddedWithMask = function()
   {
     if(!this._mask) return;
     var mask = this._maskShape || this._mask;
     if(mask.parent != this.parent)
       this.parent.addChild(mask);
   };

   /**
    * Dummy function for CJS export compatibility
    * @method cache
    */
   p.cache = function()
   {
     //don't do anything!
   };

   /**
    * Graphics object was updated on the shape dynamically, update the mask
    * @method onShapeChanged
    * @private
    * @param {egretAnimate.Shape} shape
    */
   p.onShapeChanged = function(shape)
   {
     // reset the shape mask
     this.mask = shape;
   };

   p.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
   {
     this.x = x || 0;
     this.y = y || 0;
     this.scaleX = scaleX == null ? 1 : scaleX;
     this.scaleY = scaleY == null ? 1 : scaleY;
     this.rotation = rotation || 0;
     this.skewX = skewX || 0;
     this.skewY = skewY || 0;
     this.regX = regX || 0;
     this.regY = regY || 0;
     return this;
   };

   DisplayObject.mixin = function(targetPrototype)
   {
     for(var prop in p)
     {
       // For things that we set using Object.defineProperty
       // very important that enumerable:true for the
       // defineProperty options
       var propDesc = Object.getOwnPropertyDescriptor(p, prop);
       if(propDesc)
       {
         Object.defineProperty(targetPrototype, prop, propDesc);
       }
       else
       {
         // Should cover all other prototype methods/properties
         targetPrototype[prop] = p[prop];
       }
     }
   };

   egretAnimate.DisplayObject = DisplayObject;

 }());
