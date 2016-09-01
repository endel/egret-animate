/**
 * @module egret-animate
 * @namespace egretAnimate
 */
(function(undefined) {
   var Container = egret.DisplayObjectContainer,
       EgretShape = egret.Shape,
       Graphics = egretAnimate.Graphics,
       DisplayObject = egretAnimate.DisplayObject;

   /**
    * The class to emulate createjs.Shape
    * @class Shape
    * @extends egret.DisplayObjectContainer
    */
   var Shape = function() {
     EgretShape.call(this);
     Container.call(this);
     DisplayObject.call(this);

     // Shapes have a graphic by default
     this.$graphics = new Graphics();
     this.$graphics.$setTarget(this);

     //keep track of the number of things using this as a mask so we can avoid adding/removing
     //it more than needed
     this._maskUses = 0;
   };

   // Extend egret.Shape
   var s = EgretShape.prototype;
   var p = Shape.prototype = Object.create(s);

   // Mixin the display object
   DisplayObject.mixin(p);

   //constructor for backwards/Flash exporting compatibility
   p.initialize = Shape;

   // Assign to namespace
   egretAnimate.Shape = Shape;

   /**
    * Override for the destroy
    * @method  destroy
    * @param  {Boolean} recursive If we should destroy the children of this shape
    */
   p.destroy = function(recursive)
   {
     this.graphics = null;
     s.destroy.call(this, recursive);
   };

 }());
