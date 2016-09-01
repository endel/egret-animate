/**
 * @module egret-animate
 * @namespace egretAnimate
 */
(function(undefined) {
  var EgretContainer = egret.DisplayObjectContainer,
      DisplayObject = egretAnimate.DisplayObject,
      ticker = egret.Ticker.getInstance();

  /**
   * The class to emulate createjs.Container
   * @class Container
   * @extends egret.DisplayObjectContainer
   */
  var DisplayObjectContainer = function()
  {
    EgretContainer.call(this);
    DisplayObject.call(this);

    /**
     * If false, the tick will not be propagated to children of this Container. This can provide some performance benefits.
     * In addition to preventing the "tick" event from being dispatched, it will also prevent tick related updates
     * on some display objects (ex. Sprite & MovieClip frame advancing, DOMElement visibility handling).
     * @property tickChildren
     * @type Boolean
     * @default true
     **/
    this.tickChildren = true;

    //add a listener for the first time the object is added, to get around
    //using new instances for prototypes that the CreateJS exporting does.
     this.once(egret.Event.ADDED, function() {
       this._onAdded();
       this.addEventListener(egret.Event.ADDED, this._onAdded, this);
       this.addEventListener(egret.Event.REMOVED, this._onRemoved, this);
     }, this);
  };

  var s = EgretContainer.prototype;
  var p = DisplayObjectContainer.prototype = Object.create(s);

  DisplayObject.mixin(p);

  //constructor for backwards/Flash exporting compatibility
  p.initialize = DisplayObjectContainer;

  p.__Container_addChild = p.addChild;
  p.addChild = function(child)
  {
    for(var i = 0; i < arguments.length; i++)
    {
      this.__Container_addChild(arguments[i]);
    }
  };

  p._onAdded = function()
  {
    if(!this.parent._isEgretAnimate)
    {
      ticker.register(this._tickListener, this);
    }
  };

  p._tickListener = function(tickerDeltaTime)
  {
    var ms = tickerDeltaTime / 60 / egretAnimate.TARGET_FPMS;
    this._tick(ms);
  };

  p._onRemoved = function()
  {
    if (this._tickListener) {
      ticker.unregister(this._tickListener, this);
    }
  };

  /**
   * @method _tick
   * @param {Number} delta Time elapsed since the previous tick, in milliseconds.
   * @protected
   **/
  p._tick = p.Container__tick = function(delta) {
    if (this.tickChildren) {
      for (var i=this.children.length-1; i>=0; i--) {
        var child = this.children[i];
        if (child.tickEnabled && child._tick) { child._tick(delta); }
        else if(child.tickChildren && child.Container__tick)
        {
          child.Container__tick(delta);
        }
      }
    }
  };

  p.__Container_destroy = p.destroy;
  p.destroy = function(destroyChildren)
  {
    if(this._tickListener)
    {
      ticker.unregister(this._tickListener, this);
      this._tickListener = null;
    }

    this.__Container_destroy(destroyChildren);
  };

  egretAnimate.Container = DisplayObjectContainer;

}());
