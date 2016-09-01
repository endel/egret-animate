if (!window.egretAnimate) {
  window.egretAnimate = {
    Rectangle: egret.Rectangle,
    Tween: createjs.Tween,
    Ease: createjs.Ease,

    // MovieClip fps
    fps: 24
  };
}
