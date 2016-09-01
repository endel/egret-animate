(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var MovieClip = cjs.MovieClip;
var Bitmap = cjs.Bitmap;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Shape = cjs.Shape;
lib.webFontTxtFilters = {};

// library properties:

lib.ssMetadata = [];
lib.properties = {"width":800,"height":600,"fps":24,"color":"#FFFFFF","opacity":1,"webfonts":{},"manifest":[{"src":"images/Bitmap1.png","id":"Bitmap1"}]};


lib.webfontAvailable = function(family) {
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap1 = function() {
	// this.initialize(img.Bitmap1);
	this.initialize(RES.getRes("Bitmap1"));
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,784,585);


(lib.Mc_objectPreviewHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Mc_IconGoldMini = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3617").s().p("Ag1A1QgYgYgFgdQgFgbAQgQIAegeIABAAQALgKATAAQAOAAASAIQARAIAOAOQAXAXAGAcQAGAagOARIgBABIgdAeQgOAMgTAAQgiAAgegfgAgmhFIgCACIAAABIgbAaQgPAQAFAYQAFAbAXAXQAdAdAfAAQASAAALgLIAegeQANgQgGgXQgFgagWgWQgcgdggAAQgQAAgMAJg");
	this.shape.setTransform(3.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF8B3").s().p("AgFAUIALgvIgFA3g");
	this.shape_1.setTransform(1.8,-1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF8B3").s().p("AgOAhIAOhKIAAAAQAHADAIAHIgOBJQgHgDgIgGg");
	this.shape_2.setTransform(4.5,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF8B3").s().p("AgGAgIAKg/IADAEIgJA7g");
	this.shape_3.setTransform(7,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7D73D").s().p("AALAvQgSgFgRgRQgRgRgFgSQgFgUAJgMQANgJATAFQASAFARARQARARAFASQAFAUgJAMQgIAGgLAAQgGAAgHgCg");
	this.shape_4.setTransform(4.1,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C78E00").s().p("AALAyQgTgEgSgTQgSgSgFgTQgEgVALgLQAMgMAUAFQATAEASATQASASAFATQAFAUgMAMQgIAIgNAAIgLgBg");
	this.shape_5.setTransform(5.2,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF8B3").s().p("AALA0QgUgFgTgTQgTgTgEgTQgFgWAMgMQAMgMAWAFQAUAFASATQATATAFATQAFAWgMAMQgIAJgOAAIgMgCg");
	this.shape_6.setTransform(4.8,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F7D73D").s().p("AAMBAQgZgFgWgXQgXgXgFgYQgFgbAPgPQAPgQAbAGQAYAFAYAXQAWAXAFAYQAFAbgPAPQgLAMgSAAIgNgCg");
	this.shape_7.setTransform(5.1,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9E7000").s().p("AAMBAQgZgFgXgXQgWgXgFgYQgGgbAQgPQAPgQAbAGQAYAFAXAXQAXAXAFAYQAFAbgPAPQgLAMgSAAIgNgCg");
	this.shape_8.setTransform(4.7,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF8B3").s().p("AgUgIIAEgEQAQAOAVAHIgEAEQgVgIgQgNg");
	this.shape_9.setTransform(1.8,5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7D73D").s().p("AAPA4QgXgGgUgTIgBgBQgUgUgGgWQgGgYAIgSIAEgEQgKAOAGAZQAHAXAVAWIABABQAVAUAYAHQAZAGAMgKIgDADQgJAGgNAAQgIAAgKgDg");
	this.shape_10.setTransform(2.4,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DCB416").s().p("AABADIgFgDIAEgCIAFACIgEADg");
	this.shape_11.setTransform(3.7,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF8B3").s().p("AgRAOIAbgdIAIACIgdAeg");
	this.shape_12.setTransform(4,6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C78E00").s().p("AAdAZIgJgDQgLgEgJgGQgIgGgKgHIgQgTIAFgEQAZAlAmAJQgCADgCAAIgBAAg");
	this.shape_13.setTransform(1.8,4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7D73D").s().p("AghADIAegcIAlAWIgfAeQgTgIgRgQg");
	this.shape_14.setTransform(2.4,5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DCB416").s().p("AAGAkIAeggIAMADIgeAggAghAKQgJgJgFgHIAfggQACAFARATIgeAdg");
	this.shape_15.setTransform(2,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9E7000").s().p("AAPA4QgWgHgUgTIgBgBQgTgUgHgWQgHgXAIgSIAEgDQgJANAGAYQAHAXAWAVIABABQAVAVAXAHQAYAHANgJIgDACQgKAFgMAAQgJAAgKgCg");
	this.shape_16.setTransform(2.6,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C78E00").s().p("AADBJQgZgFgXgXQgWgWgFgZQgGgbAQgPIAdgeIAXAQQAXASAOAOQAXAXAYAlIgdAeQgLALgRAAIgOgCg");
	this.shape_17.setTransform(3.2,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8C6300").s().p("AgPA4IAIgHIgNggQgLgZALgTQAGgLAMgJIAJgIIANA3QALA3gJABg");
	this.shape_18.setTransform(-2.7,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D3617").s().p("AAABBQgaAAgXgHQgWgGgLgLQgIgKAAgJIABgrIgBgBIABgBIAAgDQADgQAZgLQAagLAjAAIAAAAQAkABAaALQAaALACARIAAACIABABIgBABIAAArQAAASgaAMQgaAMgmAAgAg6gwQgYAKgCAPIAAAAIgBABIABABIgBArQAAAPAZAMQAZALAjAAIAAAAQAjAAAZgLQAZgKAAgQIAAgrIABgBIgBAAIAAgBQgBgPgZgLQgYgKgjgBIAAAAQghAAgZALg");
	this.shape_19.setTransform(-3,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF8B3").s().p("AgcgOIAUgCIAlAfIgUABg");
	this.shape_20.setTransform(-3.2,-2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF8B3").s().p("AgRgNIAGABIAdAYIgDABg");
	this.shape_21.setTransform(-0.1,-2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF8B3").s().p("AAFAJIgTgSIAdATg");
	this.shape_22.setTransform(-5.4,-1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F7D73D").s().p("AgoAKQgSgGgBgIQASgMAoABQAXAAARAGQATAGACAGIgBADQgSALgnAAQgYAAgSgHg");
	this.shape_23.setTransform(-3.3,-2.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C78E00").s().p("AgsAPQgTgHAAgIQAAgIATgHQATgGAZAAQAbABASAGQATAGAAAIQgBAJgTAHQgSAGgaAAQgaAAgSgHg");
	this.shape_24.setTransform(-2.8,-2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF8B3").s().p("AgvASQgWgJABgJQAAgJAUgIQAUgIAbAAQAbAAAVAHQAXAHgBAJQAAAZhFADIgEAAQgXAAgUgIg");
	this.shape_25.setTransform(-2.6,-2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F7D73D").s().p("Ag8AaQgZgMAAgOQABgPAZgLQAagLAhABQAkAAAZALQAZALAAAOQgBAQgZAKQgaALgiAAQgjAAgZgLg");
	this.shape_26.setTransform(-3,-2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9E7000").s().p("AAAAlQgjAAgZgLQgZgMAAgOQABgPAZgLQAagLAhABQAkAAAZALQAZAMAAANQgBAQgZALQgZAKghAAIgCAAg");
	this.shape_27.setTransform(-3,-1.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFF8B3").s().p("AgXABQAYAAAXgFIAAADQgXAGgYAAg");
	this.shape_28.setTransform(-0.1,3.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F7D73D").s().p("AAAASQgegBgZgJQgXgIgHgNIAAgEQADAMAYAIQAZAKAhABIAAAAQAhAAAagKQAYgIADgLIgBADQgFAMgYAIQgZAKgfAAg");
	this.shape_29.setTransform(-3,2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DCB416").s().p("AgDAAIAGgCIAAACIgBABIgEACg");
	this.shape_30.setTransform(1.9,3.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFF8B3").s().p("AgDgVIAHgDIAAAvIgFACg");
	this.shape_31.setTransform(1.9,2.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C78E00").s().p("AgiAGIgJgBIAAgEQAvAHAngNIABgBIAAACIgCACIgJACQgMAEgNABQgKACgPAAIgRgBg");
	this.shape_32.setTransform(-1.2,3.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F7D73D").s().p("AgXgTIAvgIIAAAvQgWAIgZAAg");
	this.shape_33.setTransform(-0.1,3.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DCB416").s().p("AgSAeIgZgCIAAgwQAFACAeAAIgBAwgAAfgZIANgEIABAvIgMAFg");
	this.shape_34.setTransform(-1.1,2.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9E7000").s().p("AAAARQgfAAgYgJQgXgIgHgMIAAgEQADALAYAIQAZAJAhABIAAAAQAhAAAagKQAYgGADgLIgBACQgGAMgYAJQgYAIgfAAg");
	this.shape_35.setTransform(-3,2.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C78E00").s().p("AAAAuQgjgBgZgLQgZgLAAgQIABgtIAdgEQAigDAVAAQAlAAAxAIIgBAuQAAAPgZALQgZALgiAAIgBAAg");
	this.shape_36.setTransform(-3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.1,-8.4,24.2,17);


(lib.Mc_IconCashSmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D3617").ss(0.5,1,1).p("AAWg9IgrBVIADAm");
	this.shape.setTransform(-4.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D3617").ss(0.5,1,1).p("AAThBIglBaIAGAp");
	this.shape_1.setTransform(1.8,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D3617").s().p("AAQBKIgBAAIgEgBIgCAAIgCACIgDACIgBgBIhBgLQAAAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAAAIhFgIQgDAAgBgEIgCgJIABgEIABgCQgDgCAAgDIAAgJIABgDIAAAAQgEgBAAgDIAAgJIAAgEQAZgkAKglQABgFAEAAIAAAAIBTAJIAEgBIA1ADQAFAAAAAFIALABIABAAQApAAAbgSIADgBIACAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABIABAHIAHgBIABgBIADABQAAABAAAAQABAAAAAAQAAABABAAQAAABAAABIACAHIAAADIgGAfQADABABAEIACAIIAAABQgBATgQAjQgIAQgJAOQgBABAAABQAAAAgBAAQAAABgBAAQgBAAAAAAIgYABQgfAAgkgFgAAQBFIABAAQAlAFAdAAIAXgBIARgeQAQghABgTIgCgIIgFgBQAEgRADgUIgCgIIgNADIABgEIgCgJQgdATgqAAIgBAAIgQgCIAAgEIg0gDIgBAAQgBAAAAAAQAAAAAAAAQgBAAAAABQAAAAAAAAIAAABIhVgJQgKAngZAlIAAAIIAGACIgDAGIAAAJIAGABIgFAIIACAKIBIAHIAAAEIBBALIAEgEg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#10394F").s().p("AgUAZIAlhYIADABIAAABIAAAAIgjBYIAEAjIABAAIgBABIgDABg");
	this.shape_3.setTransform(1.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFFFF3").s().p("AgcAnIgBgDIArhTIgmBQIA1AJIABAGg");
	this.shape_4.setTransform(-3.3,-1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A5D80").s().p("AgBgPIgZgJIABAAIA0ADIAAAFIgCgBIgSAqQAIgbgQgNg");
	this.shape_5.setTransform(1,-3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A5D80").s().p("AgiAGIAAgGQAeAFAQgJIAMgMIACADIAEAZIAFAAIgEAFg");
	this.shape_6.setTransform(-2.7,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6BB3B3").s().p("AgdAtIgCgPIAmhLIAQAWQAPAbgJAfIgDAFQgXAGgQAAQgJAAgHgBg");
	this.shape_7.setTransform(-3.3,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3E8A99").s().p("AguA5IgDgkIAthVIADgBIAyAGIABABIgBAAIglBYIAFAjIABAAIgBABg");
	this.shape_8.setTransform(-1.4,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3A4D00").s().p("AgRABQgNgBAHgBIAJAAIAMABQAMABAQgBQgPACgLAAIgRgBg");
	this.shape_9.setTransform(1.3,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3A4D00").s().p("AgKAAIAXAAIgZABg");
	this.shape_10.setTransform(1.2,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(77,102,0,0.698)","rgba(77,102,0,0.698)"],[0,0.388],-4.9,-1,4.5,0.5).s().p("AgzA2IgDgfIAuhVQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIA7AGIgmBZIADAig");
	this.shape_11.setTransform(-0.2,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#97BA1D").s().p("AgCAUQgVgBgLgHQgJgHAAgHQACgTApACQAuABgDATQgBAMgOAFQgJADgNAAIgIgBg");
	this.shape_12.setTransform(-0.1,-1.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#719700").s().p("AgCAZQgygEACgXQABgLAMgGQANgHAYABQAdACAMAHQALAGgBALQgCAZgoAAIgLgBg");
	this.shape_13.setTransform(-0.2,-1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2FF99").s().p("AgDAJQgBgBAAAAQAAAAAAgBQgBAAABgBQAAAAAAgBIAEgLQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABABAAAAQAAAAAAABQABAAgBABQAAAAAAABIgFAMQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAg");
	this.shape_14.setTransform(-10.8,-3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F2FF99").s().p("AADAGIAAAAIgGgBIgCgCIAAgCIAEgFQAAgBABAAQAAAAAAgBQAAAAAAAAQAAABABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAIgCACIAEABQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBgBg");
	this.shape_15.setTransform(-11.8,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F2FF99").s().p("AAUAdQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAABAAIAPgBQABgBAAAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgQABgAAFAcIgOgCQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAIAOADQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAIgBAAgAAzAaQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABAAQAAAAABAAIAPgEQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIgQADgAgnAUQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAIAPADQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgABPAQQAAAAAAgBQAAgBAAAAQAAAAABgBQAAAAABAAIAAgBIAHgLQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAABgBAAIgHANIgBABIgDABgAg2ARIgQgDQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABABIAQADQAAAAABAAQAAAAABAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAgBAAIAAAAgAhkAIQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAABAAIAPADQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAgABfgIQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBIAEgPQAAAAABgBQAAAAAAAAQABgBAAAAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAABQABAAAAABIgFAPQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_16.setTransform(0.2,-0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2FF99").s().p("AAAADIAAgDIgBABQgBAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAGgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIABADIgBAGQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_17.setTransform(10.5,-5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2FF99").s().p("AA8AIQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIARgDQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAAAQAAABgBAAQAAABgBAAIgSACgAAZAHQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIASACQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAgAgIADQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIAPAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAgAgZABIgRgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIASACQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgBgBgAhNgCQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIARABQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_18.setTransform(0.7,-5.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F2FF99").s().p("AgFAGQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIACgGQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAGABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEAAIgBAEQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_19.setTransform(-9.4,-5.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#719700").s().p("AASA1IiVgbQAZgkAKgoICdAQIAAAAQAqABAdgUIgGAiQgIAigOAUQgJAMgjAEQgUADgVgBgAh3AUICJAaIABAAQAbAAAWgDQAYgFAFgHQAQgWAKgvQgdAMghAAIgBAAIiWgQQgJAegUAgg");
	this.shape_20.setTransform(-0.8,-2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#97BA1D").s().p("AASA1IiVgbQAZgkAKgoICdAQIAAAAQAqABAdgUIgGAiQgIAigOAUQgJAMgjAEQgUADgVgBgAhhAKIB1AWQAXAAATgEQATgDAGgDQAJgQAHgXQgWAGgUAAIgDAAIiLgPQgFARgLATg");
	this.shape_21.setTransform(-0.8,-2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B1D242").s().p("AiDAaQAZgkAKgoICdAQIAYgCQAcgEATgNIgGAiQgIAigOAUQgKAMgnAFIglABg");
	this.shape_22.setTransform(-0.8,-2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3A4D00").s().p("AgQApIAQhLQAGgFAFgGIAEgEIACAJIgGAhQgJAjgMAVIgBABg");
	this.shape_23.setTransform(10.9,-2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3A4D00").s().p("AglgGIBLAIIgBAFg");
	this.shape_24.setTransform(-10.2,2.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#517300").s().p("AiEAeIAAgIIBIg6QBTAjA/gZQAfgLAOgUIACAJIgGAhQgJAkgOAUQgHAIgoAFIgoAEg");
	this.shape_25.setTransform(-0.7,-1.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1E645").s().p("AgzArQA0gFAPgHQAKgMAOgfIAMgeQgBAUgfA4QgYAIgaABg");
	this.shape_26.setTransform(8.3,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#97BA1D").s().p("Ag6AtIhOgMIAKgYICfgiIBogcQgEAlgQAhQgIARgGAKQgbAKgpAAQgnAAg2gJg");
	this.shape_27.setTransform(0.1,-1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A4D00").s().p("AgNA1IgEgIIAehgIADgBIACAIQgFAlgNAhQgGARgGAKg");
	this.shape_28.setTransform(12.3,-1.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A4D00").s().p("AgjgEIBHAEIAAAFg");
	this.shape_29.setTransform(-10,3.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#517300").s().p("Ag2AyIhTgNIAAgIIERhWIADAIQgFAlgOAhQgIARgGAKQgcAKgrAAQglAAg0gIg");
	this.shape_30.setTransform(0.2,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D1E645").s().p("Ag3AmIhRgJQATgdAKgcIAHgZIDtAZQAAAUgRAgQgIARgJAMIgaABQg1AAhPgQgAh9AYIBHAIIAAAAQBNAPA2AAIAWgBQAbgsAEgZIjhgWQgGAegYAng");
	this.shape_31.setTransform(0.1,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#97BA1D").s().p("Ag6AmQgUgDgfgDIgbgCQATgeAKgcIAHgZIDtAZQAAAUgRAgQgIARgJAMIgWABQg3AAhUgQg");
	this.shape_32.setTransform(0.1,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3A4D00").s().p("AgPAuIgBgJIAfhSIABAAIABAJQAAAUgRAgIgOAeg");
	this.shape_33.setTransform(12.3,2.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3A4D00").s().p("AgngCQgNgCAvADIAvABIABADIgQABQgcAAgmgGg");
	this.shape_34.setTransform(6.2,6.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3A4D00").s().p("AgjgCIBGACIABADg");
	this.shape_35.setTransform(-9.8,5.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#517300").s().p("AgtAgIhagKIgCgJQARgaCBgTQBCgJA9gEIACAIQgBAVgQAfIgQAeIgWABQgxAAhPgOg");
	this.shape_36.setTransform(0.2,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-7.9,29.2,16.2);


(lib.Icon_UpgradePremium_mini = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3617").s().p("AgOBIQgFAAgDgDQgEgEAAgEIAAgjIgiAAQgEAAgDgDQgEgDAAgFIAAgdQAAgFAEgDQADgEAEAAIAiAAIAAghQAAgGAEgCQADgEAFAAIAdAAQAFAAADAEQADACAAAGIAAAhIAiAAQAGAAACAEQAEADAAAFIAAAdQAAAFgEADQgCADgGAAIgiAAIAAAjQAAAEgDAEQgDADgFAAgAhBgOIAAAdQABAFAEAAIApAAIAAApQAAAFAFAAIAdAAQAFAAAAgFIAAgpIAoAAQAGAAAAgFIAAgdQAAgFgGAAIgoAAIAAgoQAAgGgFAAIgdAAQgFAAAAAGIAAAoIgpAAQgEAAgBAFg");
	this.shape.setTransform(5.4,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2D749").s().p("AgBABQgFgLACgBQACgBAEAMQAGALgDABIgBAAQgDAAgCgLg");
	this.shape_1.setTransform(10.8,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFB3").s().p("AgBAAQgEgRADAAQACAAACARQAEARgCABQgDAAgCgSg");
	this.shape_2.setTransform(6.4,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFAC2","rgba(242,215,73,0)"],[0,1],0,-4,0,3.9).s().p("AgsAcQgOgJgCgQIAuAAIAAgjQAAgGAOAAQAQAAAAAGIAAAjIAtAAQgCAQgOAJQgQALgdAAQgcAAgQgLg");
	this.shape_3.setTransform(5.3,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF7000").s().p("AgOAbQgFAAAAgFIAAgnIgpAAQgEAAgBgEIAAgFQABAFAEAAIAuAAIAAAmQgBAFAFAAIAVAAQAEAAAAgFIAAgmIAtAAQAFAAABgFIAAAFQAAAEgGAAIgoAAIAAAnQAAAFgFAAg");
	this.shape_4.setTransform(5.4,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6B217").s().p("AgOBCQgFAAAAgFIAAgpIgpAAQgEAAgBgFIAAgdQABgFAEAAIApAAIAAgoQAAgGAFAAIAdAAQAFAAAAAGIAAAoIAoAAQAGAAAAAFIAAAdQAAAFgGAAIgoAAIAAApQAAAFgFAAg");
	this.shape_5.setTransform(5.4,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D3617").s().p("AgYB3QgIAAgHgGQgGgGAAgJIAAhdQghgBgEgEQgGgDAEgHQAGgSAhgsQAiguALAAQAMAAAiAuQAfApAHATQAEAJgEADQgFAEgiACIAABcQAAAJgGAGQgHAGgJAAgAgug7QgmA0AGAEQADADAlAAIAABiQAAAGAEAFQAEAEAGAAIAvAAQAHAAAEgEQAEgFAAgGIAAhiQAmAAADgDQAGgFgmg0Qglg0gKAAQgIAAgmA1g");
	this.shape_6.setTransform(-3.9,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#007996","#007692","#006E88","#006B85"],[0,0.106,0.498,1],-8,0,8,0).s().p("AgYBDQgGAAgEgEQgEgFAAgGIAAhhQglgBgDgDQgCgCAIgPQgFAJAFACQADACAUAAIAUABIAABgQAAAKAHADQAEABASAAQARAAAGgEQAGgDAAgHIAAhhQAxAEAAgIQADAHgCABQgDADgmABIAABhQAAAGgEAFQgEAEgHAAg");
	this.shape_7.setTransform(-3.9,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A1EDFF").s().p("AAHARQgHgEgFgJQgHgGgDgHQgDgIACgCQADgCAGAFQAHAEAFAIQAHAGAEAIQADAHgCACIgCABQgDAAgFgDg");
	this.shape_8.setTransform(-1.7,-10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(92,215,242,0)","#7AE8FF"],[0,1],0,4.8,0,-5).s().p("Ag5AVQAMgVARgWQATgZAJAAQAIAAATAZQAQAVAOAYQAJAQgaAFQgOAEgcAAQhEAAANgbg");
	this.shape_9.setTransform(-3.8,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#00AED8","#00A8D0","#009BC0","#0093B6","#0091B3"],[0,0.09,0.345,0.631,1],0,-11.3,0,11.4).s().p("AgYBxQgGAAgEgEQgEgFAAgGIAAhiQglAAgDgDQgGgEAmg0QAmg1AIAAQAKAAAlA0QAmA0gGAFQgDADgmAAIAABiQAAAGgEAFQgEAEgHAAg");
	this.shape_10.setTransform(-3.9,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-14.2,25.2,28.6);


(lib.Icon_Upgrade_mini = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3617").s().p("AgPBHQgEAAgCgDQgDgEAAgDIAAgkIgkAAQgDAAgDgDQgEgCAAgEIAAgfQAAgDAEgEQACgCAEAAIAkAAIAAgkQAAgEADgDQACgDAEAAIAfAAQADAAADADQADADAAAEIAAAkIAkAAQAEAAADACQACAEAAADIAAAfQAAAEgCACQgDADgEAAIgkAAIAAAkQAAADgDAEQgDADgDAAgAhAgPIAAAfQAAAEAEAAIApAAIAAApQAAAEAEAAIAfAAQAEAAAAgEIAAgpIApAAQAFAAAAgEIAAgfQAAgEgFAAIgpAAIAAgpQAAgFgEABIgfAAQgEgBAAAFIAAApIgpAAQgEAAAAAEg");
	this.shape.setTransform(5.9,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC44D").s().p("AgBABQgFgLACgBQADgBADAMQAFALgCABIgBAAQgCAAgDgLg");
	this.shape_1.setTransform(11.3,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AgBAAQgEgRADAAQACAAACARQAEASgDAAIAAAAQgDAAgBgSg");
	this.shape_2.setTransform(7,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F2BA49","rgba(242,161,121,0)"],[0,1],0,-3.9,0,4).s().p("AgsAcQgNgJgDgQIAtAAIAAgjQAAgGAPAAQAPAAABAGIAAAjIAtAAQgCAQgOAJQgQALgdAAQgcAAgQgLg");
	this.shape_3.setTransform(5.9,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B84D00").s().p("AgPAbQgEAAAAgFIAAgnIgpAAQgEAAAAgEIAAgFQAAAFAEAAIAtAAIAAAmQABAFAEAAIAUAAQAGAAAAgFIAAgmIAtAAQAEAAABgFIAAAFQAAAEgFAAIgpAAIAAAnQAAAFgEAAg");
	this.shape_4.setTransform(5.9,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CC6700","#CD6400","#D15A00","#D74A00","#D84800"],[0,0.396,0.702,0.976,1],0,6.6,0,-6.6).s().p("AgPBBQgEAAAAgEIAAgpIgpAAQgEAAAAgEIAAgfQAAgEAEAAIApAAIAAgpQAAgFAEABIAfAAQAEgBAAAFIAAApIApAAQAFAAAAAEIAAAfQAAAEgFAAIgpAAIAAApQAAAEgEAAg");
	this.shape_5.setTransform(5.9,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D3617").s().p("AgYB2QgIAAgFgGQgGgGAAgIIAAheQgjgCgDgCQgFgDAEgHQAGgRAggrQAigvAKAAQALAAAhAtQAfApAIATQAEAJgEADQgEADgkABIAABeQAAAIgGAGQgFAGgIAAgAgug8QgmA0AGAFQADADAlAAIAABiQAAAGAEAEQAEAFAGAAIAwAAQAGAAAEgFQAEgEAAgGIAAhiQAmAAADgDQAGgFgmg0Qglg0gKAAQgIAAgmA0g");
	this.shape_6.setTransform(-3.4,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67991F").s().p("AgYBDQgGAAgEgFQgEgEAAgGIAAhhQglgBgDgDQgDgCAJgPIgCAFQgBAFADABQAEACAnAAIAABhQAAAKAHACQADABATAAQARAAAGgDQAGgDAAgHIAAhhQAxAEAAgIQADAHgCABQgDADgmABIAABhQAAAGgEAEQgEAFgGAAg");
	this.shape_7.setTransform(-3.4,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2FFD9").s().p("AAHARQgHgEgFgIQgHgGgDgIQgDgHACgCQADgDAGAFQAHAEAFAJQAHAGAEAHQADAIgCACIgCAAQgDAAgFgDg");
	this.shape_8.setTransform(-1.2,-10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E0F2AA","rgba(127,191,53,0)"],[0,1],0,-4.7,0,4.8).s().p("Ag5AUQAMgVARgWQATgXAJAAQAIAAATAYQAQAUAOAZQAJAQgaAFQgOADgcAAQhEAAANgbg");
	this.shape_9.setTransform(-3.3,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#6BB32D","#6EB52E","#78BB32","#88C639","#92CC3D"],[0,0.361,0.639,0.89,1],0,-11.3,0,11.4).s().p("AgYBxQgGAAgEgFQgEgEAAgGIAAhiQglAAgDgDQgGgFAmg0QAmg0AIAAQAKAAAlA0QAmA0gGAFQgDADgmAAIAABiQAAAGgEAEQgEAFgGAAg");
	this.shape_10.setTransform(-3.4,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-14.1,24.9,28.3);


(lib.StdBtnBG_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#593200").s().p("AiBCIQgjAAgagaQgZgZAAgkIAAhiQAAgjAZgaQAagZAjAAIECAAQAkAAAZAZQAaAaAAAjIAABiQAAAkgaAZQgZAagkAAgAi6hqQgYAYAAAhIAABiQAAAiAYAYQAYAYAhAAIECAAQAiAAAYgYQAYgYAAgiIAAhiQAAghgYgYQgYgYgiAAIkCAAQghAAgYAYg");
	this.shape.setTransform(22.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EBC388","rgba(231,187,122,0.882)","rgba(222,165,87,0.573)","rgba(207,130,30,0.078)","rgba(204,124,20,0)"],[0,0.173,0.49,0.922,0.988],0,-6.5,0,6.6).s().p("AiQAnQgogVAAgbQAAg3C4AAQC4AAAAA3QABAbgoAVQgyAahfAAQheAAgygag");
	this.shape_1.setTransform(22.6,-6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE1B8").s().p("AANANQgHgBgIgGQgKgFgGgEQgFgGACgDQABgCAIABQAIACAIAGQAJAFAFAEQAGAGgBACQgBABAAAAQAAABgBAAQgBAAAAAAQgBAAgBAAIgFgBg");
	this.shape_2.setTransform(38.6,-11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C48937").s().p("AiBArQghAAgYgYQgYgWAAgiIAAgFQACAgAYAUQAXAXAgAAIECAAQAhAAAXgXQAXgUACggIABAFQAAAigYAWQgYAYgiAAg");
	this.shape_3.setTransform(22.6,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CC8A3F","#CF8D41","#D89749","#E7A856","#FCC068","#FFC36B"],[0,0.302,0.545,0.769,0.976,1],0,-13.3,0,13.4).s().p("AiBCFQgiAAgZgYQgYgZAAgjIAAhiQAAgiAYgZQAZgYAiAAIECAAQAjAAAZAYQAYAZAAAiIAABiQAAAjgYAZQgZAYgjAAg");
	this.shape_4.setTransform(22.6,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(51,31,0,0.4)","rgba(51,31,0,0.4)"],[0,0.357],-21.6,0,21.6,0).s().p("AiBCIQgjAAgagaQgZgZAAgkIAAhiQAAgjAZgaQAagZAjAAIECAAQAkAAAZAZQAaAaAAAjIAABiQAAAkgaAZQgZAagkAAg");
	this.shape_5.setTransform(21.6,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#D9AD6C","rgba(209,161,94,0.78)","rgba(187,130,59,0.208)","rgba(179,119,46,0)"],[0,0.286,0.824,1],0,-6.5,0,6.6).s().p("AiQAmQgogUAAgaQAAg4C4AAQC4AAAAA4QABAagoAUQgyAbhfAAQheAAgygbg");
	this.shape_6.setTransform(22.6,-6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2C991").s().p("AANANQgHgBgIgGQgKgFgGgEQgFgGACgDQABgCAIABQAIACAIAGQAJAFAFAEQAGAGgBACQgBABAAAAQAAABgBAAQgBAAAAAAQgBAAgBAAIgFgBg");
	this.shape_7.setTransform(38.6,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B37623").s().p("AiBArQghAAgYgYQgYgWAAgiIAAgFQACAgAYAUQAXAXAgAAIECAAQAhAAAXgXQAXgUACggIABAFQAAAigYAWQgYAYgiAAg");
	this.shape_8.setTransform(22.6,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B37024","#B67326","#C07D2C","#D08E37","#E6A545"],[0,0.31,0.561,0.788,1],0,-13.3,0,13.4).s().p("AiBCFQgiAAgZgYQgYgZAAgjIAAhiQAAgiAYgZQAZgYAiAAIECAAQAjAAAZAYQAYAZAAAiIAABiQAAAjgYAZQgZAYgjAAg");
	this.shape_9.setTransform(22.6,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#804900").s().p("AC5gKQgXgVghgBIkCAAQggABgXAVQgYAVgCAfIAAgEQAAgiAYgVQAYgYAhAAIECAAQAiAAAYAYQAYAVAAAiIgBAEQgCgfgXgVg");
	this.shape_10.setTransform(22.6,-9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D99741").s().p("AiBArQghAAgYgYQgYgWAAgiIAAgFQACAgAYAUQAXAXAgAAIECAAQAhAAAXgXQAXgUACggIABAFQAAAigYAWQgYAYgiAAg");
	this.shape_11.setTransform(22.6,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#CC871E","#BE7A18","#9B5908","#8A4900"],[0,0.275,0.784,1],0,-13.3,0,13.4).s().p("AiBCFQgiAAgZgYQgYgZAAgjIAAhiQAAgiAYgZQAZgYAiAAIECAAQAjAAAZAYQAYAZAAAiIAABiQAAAjgYAZQgZAYgjAAg");
	this.shape_12.setTransform(22.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.6,44.3,29.3);


(lib.Btn_InfoDialog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBMQgLgCAMgcIAQghIAEgJQAAgCgJABQgHABAAgEQABgCAIgFQAIgFAJgDQAagKgCAYQgCAPgMAVQgLAXAQgIQAGgDgBAHQAAADgLAHQgHAFgLAEQgKADgIAAIgEAAgAAQggQgTgEADgVQAEgTARABIAEAAQAUAEgFAVQgEASgOAAIgGAAg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9DCFFE").s().p("AgDALQgJgEgFgFQgGgDACgFQABgFAIgBQAIgBAHADQAKAEAFAFQAGADgCAFQgCAFgHABIgEAAQgHAAgFgCg");
	this.shape_1.setTransform(2.3,-9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3665").s().p("AhEBFQgigiAAguQAAgbAMgYQALgXAVgRQgaAgAAApQAAAvAiAiQAiAiAuAAQApAAAggaQgQAUgXALQgYAMgbAAQgvAAgigig");
	this.shape_2.setTransform(-1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#539CE5").s().p("ABWAeQAAgugigiQgigigvAAQgpAAggAaQARgVAXgLQAYgMAbAAQAuAAAiAiQAiAiAAAvQAAAbgMAYQgLAXgUAQQAaggAAgpg");
	this.shape_3.setTransform(1.4,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F391E").s().p("AhbBcQgngmAAg2QAAg1AngmQAmgnA1AAQA2AAAmAnQAnAmAAA1QAAA2gnAmQgmAng2AAQg1AAgmgngAhYhYQglAlAAAzQAAA0AlAlQAlAlAzAAQA0AAAlglQAlglAAg0QAAgzglglQglglg0AAQgzAAglAlg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#1F9CD6","#2198D2","#2D7AB8","#3364A4","#375495","#394B8D","#3A488A"],[0,0.02,0.184,0.353,0.537,0.741,1],0,-12.6,0,12.7).s().p("AhYBZQglglAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAQgzAAglglg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBLQgLgCAMgbIAQghIAEgJQAAgCgJABQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgCAIgFQAIgFAJgDQAbgKgDAYQgCAPgMAVQgGANACADQACACAIgEQAFgCgBAHQAAADgLAHQgSAMgPAAIgHgBgAAQggQgTgEADgVQAEgTARABIABAAIADAAIABABQATAEgFAUQgEATgOAAIgGgBg");
	this.shape_6.setTransform(0,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7AB0E5").s().p("AgCALQgKgEgGgFQgFgEACgEQACgFAHgBQAIgBAIADQAJAEAGAFQAFAEgCAEQgCAFgHABIgEAAQgGAAgFgCg");
	this.shape_7.setTransform(2.3,-9.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D3665").s().p("AhEBFQgigiAAguQAAgbAMgYQALgXAVgRQgaAgAAApQAAAvAiAiQAiAiAuAAQAoAAAhgaQgQAUgXALQgYAMgbAAQgvAAgigig");
	this.shape_8.setTransform(-1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5288BD").s().p("ABWAeQAAgugigiQgigigvAAQgpAAggAaQARgVAXgLQAYgMAbAAQAuAAAiAiQAiAiAAAvQAAAbgMAYQgLAXgUAQQAaggAAgpg");
	this.shape_9.setTransform(1.4,-1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F391E").s().p("AhbBdQgngnAAg2QAAg1AngnQAmgmA1AAQA2AAAmAmQAnAnAAA1QAAA2gnAnQgmAmg2AAQg1AAgmgmgAhYhYQglAlAAAzQAAA0AlAlQAlAlAzAAQA0AAAlglQAlglAAg0QAAgzglglQglglg0AAQgzAAglAlg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#374172","#374375","#374B7E","#37578F","#3869A5","#377CBD"],[0,0.275,0.49,0.682,0.863,1],0,-12.6,0,12.7).s().p("AhYBZQglglAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAQgzAAglglg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#86B6E5").s().p("AgjBLQgLgCAMgbIAQghIAEgJQAAgCgJABQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgCAIgFQAIgFAJgDQAbgKgDAYQgCAPgMAVQgGANACADQACACAIgEQAFgCgBAHQAAADgLAHQgSAMgPAAIgHgBgAAQggQgTgEADgVQAEgTARABIABAAIADAAIABABQATAEgFAUQgEATgOAAIgGgBg");
	this.shape_12.setTransform(0,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4F391E").s().p("AhbBcQgngmAAg2QAAg1AngnQAmgmA1AAQA2AAAmAmQAnAnAAA1QAAA2gnAmQgmAng2AAQg1AAgmgngAhYhYQglAlAAAzQAAA0AlAlQAlAlAzAAQA0AAAlglQAlglAAg0QAAgzglglQglglg0AAQgzAAglAlg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1B2036").s().p("ABfAdQAAgxglgmQglglgyAAQgsAAgkAdQASgVAYgLQAZgMAcAAQAyAAAlAlQAlAlAAAzQAAAZgJAXQgJAVgRASIgJAJQAdgkAAgug");
	this.shape_14.setTransform(1.6,-1.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5288BD").s().p("AhJBJQglglAAgyQAAgZAKgYQALgcAWgSQgcAiAAAtQAAAzAlAkQAlAmAzAAQAuAAAjgeQgnAtg6AAQgyAAglglg");
	this.shape_15.setTransform(-1.4,1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#2F3859","#30395C","#323F65","#364875","#3C558C","#4263A4"],[0,0.275,0.486,0.678,0.859,1],0,-12.6,0,12.7).s().p("AhYBZQglglAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAQgzAAglglg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.1,-13.1,26.3,26.3);


(lib.StdBtnBG_Light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#593200").s().p("AiBCIQgjAAgagaQgZgZAAgkIAAhiQAAgjAZgaQAagZAjAAIECAAQAkAAAZAZQAaAaAAAjIAABiQAAAkgaAZQgZAagkAAgAi6hqQgYAYAAAhIAABiQAAAiAYAYQAYAYAhAAIECAAQAiAAAYgYQAYgYAAgiIAAhiQAAghgYgYQgYgYgiAAIkCAAQghAAgYAYg");
	this.shape.setTransform(22.6,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F3D8B1","rgba(241,209,163,0.886)","rgba(235,190,128,0.592)","rgba(226,159,71,0.118)","rgba(224,151,56,0)"],[0,0.165,0.475,0.89,0.988],0,-6.5,0,6.6).s().p("AiQAnQgngVAAgbQgBg3C4AAQC5AAAAA3QAAAbgpAVQgxAahfAAQheAAgygag");
	this.shape_1.setTransform(22.6,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF1DF").s().p("AANANQgIgBgIgGQgJgFgFgEQgGgGABgDQACgCAIABQAIACAHAGQAKAFAGAEQAFAGgCACQAAABAAAAQAAABgBAAQgBAAAAAAQgBAAgBAAIgFgBg");
	this.shape_2.setTransform(38.6,-11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8A55D").s().p("AiBArQghAAgYgYQgYgWAAgiIAAgFQADAgAXAUQAXAXAgAAIECAAQAhAAAXgXQAXgUACggIABAFQAAAigYAWQgYAYgiAAg");
	this.shape_3.setTransform(22.6,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E0A867","#E2AB6A","#EAB574","#F6C685","#FFD392"],[0,0.341,0.612,0.863,1],0,-13.3,0,13.4).s().p("AiBCFQgiAAgZgYQgYgZAAgjIAAhiQAAgiAYgZQAZgYAiAAIECAAQAjAAAZAYQAYAZAAAiIAABiQAAAjgYAZQgZAYgjAAg");
	this.shape_4.setTransform(22.6,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(51,31,0,0.4)","rgba(51,31,0,0.4)"],[0,0.357],-21.6,0,21.6,0).s().p("AiBCIQgjAAgagaQgZgZAAgkIAAhiQAAgjAZgaQAagZAjAAIECAAQAkAAAZAZQAaAaAAAjIAABiQAAAkgaAZQgZAagkAAg");
	this.shape_5.setTransform(21.6,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EBC388","rgba(231,187,122,0.882)","rgba(222,165,87,0.573)","rgba(207,130,30,0.078)","rgba(204,124,20,0)"],[0,0.173,0.49,0.922,0.988],0,-6.5,0,6.6).s().p("AiQAmQgngUAAgbQgBg3C4AAQC5AAAAA3QAAAbgpAUQgxAbhfAAQheAAgygbg");
	this.shape_6.setTransform(22.6,-6.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE1B8").s().p("AANANQgIgBgIgGQgJgFgFgEQgGgGABgDQACgCAIABQAIACAHAGQAKAFAGAEQAFAGgCACQAAABAAAAQAAABgBAAQgBAAAAAAQgBAAgBAAIgFgBg");
	this.shape_7.setTransform(38.6,-11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C48937").s().p("AiBArQghAAgYgYQgYgWAAgiIAAgFQADAgAXAUQAXAXAgAAIECAAQAhAAAXgXQAXgUACggIABAFQAAAigYAWQgYAYgiAAg");
	this.shape_8.setTransform(22.6,7.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#CC8A3F","#CF8D41","#D89749","#E7A856","#FCC068","#FFC36B"],[0,0.302,0.545,0.769,0.976,1],0,-13.3,0,13.4).s().p("AiBCFQgiAAgZgYQgYgZAAgjIAAhiQAAgiAYgZQAZgYAiAAIECAAQAjAAAZAYQAYAZAAAiIAABiQAAAjgYAZQgZAYgjAAg");
	this.shape_9.setTransform(22.6,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#996217").s().p("AC5gJQgXgXghAAIkCAAQggAAgXAXQgXATgDAhIAAgGQAAghAYgVQAYgZAhAAIECAAQAiAAAYAZQAYAVAAAhIgBAGQgCghgXgTg");
	this.shape_10.setTransform(22.6,-9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E6A045").s().p("AiBArQghAAgYgYQgYgWAAgiIAAgFQADAgAXAUQAXAXAgAAIECAAQAhAAAXgXQAXgUACggIABAFQAAAigYAWQgYAYgiAAg");
	this.shape_11.setTransform(22.6,7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#E6A039","#A66821"],[0,1],0,-13.3,0,13.4).s().p("AiBCFQgiAAgZgYQgYgZAAgjIAAhiQAAgiAYgZQAZgYAiAAIECAAQAjAAAZAYQAYAZAAAiIAABiQAAAjgYAZQgZAYgjAAg");
	this.shape_12.setTransform(22.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.6,44.3,29.3);


(lib.Question_MarkHover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFEFD1").s().p("AgOAPIAAgcIAdAAIAAAcg");
	this.shape.setTransform(5.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEFD1").s().p("AgTBAIAAgxIAxAAIAAgxIg7AAIAAAfIgeAAIAAg9IB2AAIAABsIgxAAIAAAUg");
	this.shape_1.setTransform(6,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,18);


(lib.Question_Mark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E5431").s().p("AgOAPIAAgcIAdAAIAAAcg");
	this.shape.setTransform(5.5,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E5431").s().p("AgTBAIAAgxIAxAAIAAgxIg7AAIAAAfIgeAAIAAg9IB2AAIAABsIgxAAIAAAUg");
	this.shape_1.setTransform(6,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12,18);


(lib.Btn_CloseXDialog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBBAB").s().p("AgCAJQgIgCgEgFQgFgDACgEQABgEAHgBQAGgBAGADQAIADAEAEQAFADgBAEQgCAEgGABIgEAAQgFAAgEgCg");
	this.shape.setTransform(1.8,-8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiAtQgPgLgTgTQgSATgPALQgQALgDgDQgDgDALgPQALgQATgTQgsguAGgGQADgCAQALQAPAKASATQATgTAPgKQAQgLADACQAGAHgsAtQATATAKAQQALAPgCADIgCAAQgFAAgMgIg");
	this.shape_1.setTransform(0,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A52000","#9F1F00","#951D00","#921C00"],[0,0.145,0.518,1],0,8.6,0,-8.6).s().p("Ag4A5QgdgcAAgmQAAguAkgeQgVAbAAAiQAAAmAcAdQAdAcAmAAQAiAAAbgVQgOARgTAJQgUAKgXAAQgmAAgcgdg");
	this.shape_2.setTransform(-1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF8063").s().p("ABIAZQgBgmgcgdQgdgcgmAAQgiAAgbAVQAdgkAvAAQAmAAAcAdQAdAcAAAmQAAAuglAeQAXgaAAgjg");
	this.shape_3.setTransform(1.2,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D3617").s().p("AhNBOQggghAAgtQAAgsAgghQAhggAsAAQAtAAAhAgQAgAhAAAsQAAAtggAhQghAggtAAQgsAAghgggAhJhJQgfAeAAArQAAArAfAfQAfAfAqAAQArAAAfgfQAfgfAAgrQAAgrgfgeQgfgfgrAAQgqAAgfAfg");
	this.shape_4.setTransform(0,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF3909","#F13205","#E72D02","#E42C01"],[0,0.259,0.584,1],0,-10.5,0,10.6).s().p("AhJBKQgfgfAAgrQAAgrAfgeQAfgfAqAAQArAAAfAfQAfAeAAArQAAArgfAfQgfAfgrAAQgqAAgfgfg");
	this.shape_5.setTransform(0,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(51,31,0,0.4)","rgba(51,31,0,0.4)"],[0,0.357],-11.4,0,11.5,0).s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAhAhQAiAiAAAuQAAAvgiAiQghAhgvAAQguAAgighg");
	this.shape_6.setTransform(0,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF8A6E").s().p("AgCAJQgIgCgEgFQgFgDACgEQABgEAHgBQAGgBAGADQAIADAEAEQAFADgBAEQgCAEgGABIgEAAQgFAAgEgCg");
	this.shape_7.setTransform(1.8,-8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiAsQgPgKgTgTQgSATgPAKQgQALgDgDQgDgDALgPQALgOATgUQgsgtAGgHQADgDAQALQAPALASATQATgTAPgLQAQgLADADQAGAHgsAtQATATAKAPQALAPgCADIgCABQgFAAgMgJg");
	this.shape_8.setTransform(0,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B53109").s().p("Ag4A5QgdgcAAgmQAAguAkgeQgVAbAAAiQAAAmAcAdQAdAcAmAAQAiAAAbgVQgOARgTAJQgUAKgXAAQgmAAgcgdg");
	this.shape_9.setTransform(-1,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB4C28").s().p("ABIAZQgBgmgcgdQgdgcgmAAQgiAAgbAVQAdgkAvAAQAmAAAcAdQAdAcAAAmQAAAuglAeQAXgaAAgjg");
	this.shape_10.setTransform(1.2,-1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D3617").s().p("AhNBOQggghAAgtQAAgsAgggQAhghAsAAQAtAAAhAhQAgAgAAAsQAAAtggAhQghAggtAAQgsAAghgggAhJhJQgfAfAAAqQAAArAfAfQAfAfAqAAQArAAAfgfQAfgfAAgrQAAgqgfgfQgfgfgrAAQgqAAgfAfg");
	this.shape_11.setTransform(0,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#C42601","#E02C00"],[0,1],0,-10.5,0,10.6).s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfg");
	this.shape_12.setTransform(0,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBBAB").s().p("AAiAtQgPgLgTgTQgSATgPALQgQAKgDgDQgDgCALgQQALgPATgTQgsguAGgFQADgEAQAMQAPAKASATQATgTAPgKQAQgMADAEQAGAGgsAtQATATAKAPQALAQgCACIgCABQgFAAgMgIg");
	this.shape_13.setTransform(0,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF8A6D").s().p("Ag8A9QgfgeAAgqQAAgwAlggQgbAdAAAoQAAArAfAeQAfAfAqAAQAnAAAegaQgfAkgxAAQgpAAgfgfg");
	this.shape_14.setTransform(-1.3,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#772912").s().p("ABSAXQAAgrgfgeQgfgfgqAAQgnAAgeAaQAfgkAwAAQAqAAAfAfQAfAeAAArQAAAwgkAfQAagdAAgog");
	this.shape_15.setTransform(1.3,-2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D3617").s().p("AhNBNQggggAAgtQAAgsAgggQAhghAsAAQAtAAAhAhQAgAgAAAsQAAAtggAgQghAhgtAAQgsAAghghgAhJhJQgfAeAAArQAAAsAfAeQAfAfAqAAQArAAAfgfQAfgeAAgsQAAgrgfgeQgfgfgrAAQgqAAgfAfg");
	this.shape_16.setTransform(0,-0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B52E08").s().p("AhJBKQgfgeAAgsQAAgrAfgeQAfgfAqAAQArAAAfAfQAfAeAAArQAAAsgfAeQgfAfgrAAQgqAAgfgfg");
	this.shape_17.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_6},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// bg
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhXBZQguguAAg+QAAghANgeQAOgdAXgWQgoAtAAA7QAAA+AuAuQAsAtA/AAQA7AAAtgpQgWAYgdANQgeAOghAAQg/AAgsgtg");
	this.shape_18.setTransform(-2.1,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#96610C").s().p("AB8AeQAAg+guguQgtgtg+AAQg9AAgrApQAWgYAdgNQAegOAhAAQA+AAAuAtQAtAuAAA+QAAAhgOAeQgNAdgYAWQApgtAAg7g");
	this.shape_19.setTransform(2,-2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E4D2B3").s().p("ABVgFQgugig5AAQglAAgjAPQggAPgaAZQASgpAmgaQAngbAxAAQA9AAAuAtQAtArAABAIAAAFQgSg1gtgfg");
	this.shape_20.setTransform(0.5,-7.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFEFD1").s().p("AhsBtQgtguAAg/QAAg/AtgtQAtgtA/AAQA/AAAuAtQAtAtAAA/QAAA/gtAuQguAtg/AAQg/AAgtgtg");
	this.shape_21.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.5,-15.4,31,30.9);


(lib.Btn_Arrow_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpgzIApAUQAqAVAAAKQAAALgqAWQgUALgVAIg");
	this.shape.setTransform(12.6,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEFD1").s().p("AgCAJQgIgCgEgFQgFgDACgEQABgEAHgBQAGgBAGADQAIADAEAFQAFACgBAEQgCAEgGABIgEAAQgFAAgEgCg");
	this.shape_1.setTransform(13.3,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99662C").s().p("Ag4A6QgdgdAAgnQAAguAkgdQgVAbAAAiQAAAnAcAcQAdAcAmAAQAiAAAbgVQgOARgTAJQgUAKgXAAQgmAAgcgcg");
	this.shape_2.setTransform(10.4,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2CA91").s().p("ABIAZQAAgmgdgdQgcgcgmAAQgjAAgbAVQANgRAVgJQAUgKAVAAQAnAAAcAdQAdAcAAAmQAAAXgKAUQgJATgRAOQAVgbABgig");
	this.shape_3.setTransform(12.6,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D3617").s().p("AhNBOQggghAAgtQAAgsAgggQAhghAsAAQAuAAAgAhQAgAgAAAsQAAAuggAgQggAgguAAQgsAAghgggAhJhJQgfAfAAAqQAAArAfAfQAfAfAqAAQArAAAfgfQAfgfAAgrQAAgqgfgfQgfgfgrAAQgqAAgfAfg");
	this.shape_4.setTransform(11.4,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B37937","#B97F3C","#D9A257","#E6B061"],[0,0.09,0.682,1],0,10.6,0,-10.5).s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfg");
	this.shape_5.setTransform(11.4,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(51,31,0,0.4)","rgba(51,31,0,0.4)"],[0,0.357],-11.4,0,11.5,0).s().p("AhPBRQgigiAAgvQAAguAigiQAhghAuAAQAvAAAiAhQAhAiAAAuQAAAvghAiQgiAhgvAAQguAAghghg");
	this.shape_6.setTransform(11.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,23.5);


(lib.Btn_Arrow_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAhQgpgWAAgLQAAgKApgVIAqgUIAABnQgVgIgVgLg");
	this.shape.setTransform(10.2,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEFD1").s().p("AgCAJQgIgCgEgFQgFgDACgEQABgEAGgBQAHgBAGADQAIADAEAFQAFACgBAEQgCAEgGABIgEAAQgFAAgEgCg");
	this.shape_1.setTransform(13.3,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99662C").s().p("Ag4A6QgdgdAAgnQAAguAkgdQgVAbAAAiQAAAnAcAcQAdAcAmAAQAiAAAbgVQgOARgTAJQgUAKgXAAQgmAAgcgcg");
	this.shape_2.setTransform(10.4,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2CA91").s().p("ABHAZQABgmgdgdQgdgcgmAAQgiAAgbAVQAegkAtAAQAnAAAdAdQAcAcAAAmQAAAXgKAUQgJATgRAOQAVgbAAgig");
	this.shape_3.setTransform(12.6,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D3617").s().p("AhNBOQggggAAguQAAgsAgggQAhghAsAAQAtAAAhAhQAgAgAAAsQAAAtggAhQghAggtAAQgsAAghgggAhJhJQgfAfAAAqQAAArAfAfQAfAfAqAAQArAAAfgfQAfgfAAgrQAAgqgfgfQgfgfgrAAQgqAAgfAfg");
	this.shape_4.setTransform(11.4,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E6B061","#D9A257","#B97F3C","#B37937"],[0,0.318,0.91,1],0,-10.5,0,10.6).s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfg");
	this.shape_5.setTransform(11.4,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(51,31,0,0.4)","rgba(51,31,0,0.4)"],[0,0.357],-11.4,0,11.5,0).s().p("AhQBRQghgiAAgvQAAguAhgiQAighAuAAQAvAAAhAhQAiAiAAAuQAAAvgiAiQghAhgvAAQguAAgighg");
	this.shape_6.setTransform(11.5,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.9,23.5);


(lib.UpgradeIcons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Icon_Upgrade_mini();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0);

	this.instance_1 = new lib.Icon_UpgradePremium_mini();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-14.1,24.9,28.3);


(lib.Btn_ShowMeBright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3617").s().p("AhLBPQgMgJgEgMIgPgkIgBgBQgHgVAMgVQALgXAagTQArgdAvAAQAgAAAUAOQALAIAEAMIABABIAOAkQAJAUgMAWQgLAYgbATQgqAdgwAAQggAAgTgOgAhXA4QAEAKALAJQASANAeAAQAuAAApgdQAagRAKgXQALgUgHgSIgPglIAAACQgDgLgLgJQgSgNgfAAQgtAAgqAcQgaASgKAXQgLAUAIASIgBAAg");
	this.shape.setTransform(0,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.749)","rgba(255,255,255,0.749)"],[0,1],-1.3,0,1.3,0).s().p("AgLAGQgDgGANgDQALgGADAFQABACgEACQgDADgFACQgDACgFABQgEAAgBgCg");
	this.shape_1.setTransform(-5.8,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.749)","rgba(255,255,255,0.749)"],[0,1],-2.2,0,2.3,0).s().p("AgVAJQgBgDAFgGQAFgDAJgEQAIgEAHgBQAIAAABADQACAEgFAFQgFAEgKAEQgHAEgIABIgBAAQgGAAgCgEg");
	this.shape_2.setTransform(-3.5,-6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E35E00").s().p("AgLABIgEgMIAfAWIgHABQgNAAgHgLg");
	this.shape_3.setTransform(-0.5,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#072C40").s().p("AhBAqIBOghIAxg3IAEAHIgxA4IhKAeg");
	this.shape_4.setTransform(-0.2,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnAEIBPgfIgvA3g");
	this.shape_5.setTransform(2,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF8A38").s().p("AAHgbIAgAYIhOAfg");
	this.shape_6.setTransform(-2.8,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBABQgCgDADgBQAAgCACAFQACACgCACIgBAAQgBAAgBgDg");
	this.shape_7.setTransform(6.2,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgCABQgGgLAEgBQADgCAEANQAGAKgEACIgBAAQgDAAgDgLg");
	this.shape_8.setTransform(6.1,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#235169").s().p("AhIA3IgDgCIAAgBIgQgkIAEACQAXASAogFQAmgEAigYQAXgOALgTQALgUgDgSQAFARgJATQgLAYgcAQQgaARgcAJQgQAFgKAAIALAeQggAAgSgOg");
	this.shape_9.setTransform(0,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQA5QgXgRAHgeQAIgbAhgXQAigYAmgEQAogFAYASQAXARgHAdQgIAbgiAXQgiAYgmAEIgRABQgcAAgSgNgAAQg8QggAFgfAVQgfAWgHAWQgHAYAUAQQAUANAkgEQAigFAcgSQAfgWAIgXQAIgagUgPQgQgMgYAAIgRACg");
	this.shape_10.setTransform(-0.7,-2.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#072C40").s().p("AhIAmQgSgNADgXIAEADQADADABAEQAJAjA3gIQAxgHAZgbQAUgTADgUQABgJgDgGIAJANQABAPgKARQgKAPgUANQgeAWgiAEIgPAAQgaAAgRgMg");
	this.shape_11.setTransform(-0.8,-1.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#74B2CF").s().p("AgWABIAfggIAOAbQgGAQgaAUg");
	this.shape_12.setTransform(7.3,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#326480").s().p("AgwAOIADgdIAdAAIAIAXQAYABAhgNQgYAMgZAFQgNADgNAAQgMAAgKgCg");
	this.shape_13.setTransform(0.2,6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5591AD").s().p("AgfAMQATgKAMgNQAGgHAGgKIAHgMIANAZQAAAGgEAIQgEAGgdAeIgMAGg");
	this.shape_14.setTransform(6.9,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D8099").s().p("AhKA6QgLgIgDgKIgPglQAFAMAJAHQAYARAogFQAmgEAigYQAagPAKgXQALgVgHgSIAOAjQAIATgLAUQgLAWgaASQghAXgmAFIgRABQgdAAgSgOg");
	this.shape_15.setTransform(0.1,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D8099").s().p("AhQA5QgXgRAHgeQAIgbAhgXQAigYAmgEQAogFAYASQAXARgHAdQgIAbgiAXQghAYgmAEIgRABQgcAAgTgNg");
	this.shape_16.setTransform(0.7,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#072C40").s().p("AhbAfQgHgQAKgSQAKgUAXgRQAfgVAigEQAkgEAVAQQAKAHADAJIAPAjQgEgJgJgGQgVgPgkAEQgjAEgeAVQgXAOgKAUQgJAUAFAQg");
	this.shape_17.setTransform(-0.2,-2.5);

	this.mc_background = new lib.StdBtnBG_Light();
	this.mc_background.setTransform(0,0,1,1,0,0,0,22.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_background},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-14.6,44.3,29.3);


(lib.Mc_priceIcons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.Mc_IconCashSmall();

	this.instance_1 = new lib.Mc_IconGoldMini();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-7.9,29.2,15.9);


(lib.PageSwitcherAsset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.btn_prev = new lib.Btn_Arrow_left();
	this.btn_prev.setTransform(-37.8,0.3,1,1,0,0,0,11.5,11.8);

	this.btn_next = new lib.Btn_Arrow_right();
	this.btn_next.setTransform(38.6,0.3,1,1,0,0,0,11.5,11.8);

	this.txt_pageCount = new cjs.Text("7  / 9", "12px 'Arial'");
	this.txt_pageCount.name = "txt_pageCount";
	this.txt_pageCount.textAlign = "center";
	this.txt_pageCount.lineHeight = 14;
	this.txt_pageCount.lineWidth = 50;
	this.txt_pageCount.setTransform(1.4,-6.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96610C").s().p("AH/AfQAAg7grgrQgrgrg8AAIsYAAQg3AAgpAlQAUgXAcgNQAdgOAgAAIMYAAQA8AAArArQArArAAA7QAAAggNAdQgNAcgYAVQAlgqAAg3g");
	this.shape.setTransform(1.9,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al1CAQg9AAgtgrQgsgsAAg6QAAggANgdQANgdAYgUQglAqAAA3QAAA7ArArQArArA8AAIMXAAQA4AAApglQgUAYgcAMQgdAOggAAg");
	this.shape_1.setTransform(-1.8,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E4D2B3").s().p("AHrAAQgpghg2AAIsXAAQg2AAgpAhQgoAigJA0QgDgOAAgMQAAg8ArgqQArgrA9AAIMXAAQA9AAArArQArAqAAA8QAAAMgDAOQgJg0gogig");
	this.shape_2.setTransform(0,-5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFEFD1").s().p("AmICQQg9AAgsgpQgtgqAAg8QAAg7ArgqQArgrA9gBIMXAAQA9ABArArQArAqAAA7QAAA8grAqQgrApg9AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt_pageCount},{t:this.btn_next},{t:this.btn_prev}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-14.5,108.7,29);


(lib.IconHelp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Question_Mark();
	this.instance.setTransform(0,0,1,1,0,0,0,6,9);

	this.instance_1 = new lib.Question_MarkHover();
	this.instance_1.setTransform(0,0,1,1,0,0,0,6,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-9,12,18);


(lib.Btn_help = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc_icon = new lib.IconHelp();

	this.mc_background = new lib.StdBtnBG_red();
	this.mc_background.setTransform(-0.6,1.4,0.542,1,0,0,0,22.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_background},{t:this.mc_icon}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-13.2,24,29.3);


(lib.UpgradePreviewAsset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.btn_info = new lib.Btn_InfoDialog();
	this.btn_info.setTransform(57.4,34.9);

	this.mc_upgradeIcons = new lib.UpgradeIcons();
	this.mc_upgradeIcons.setTransform(-57.1,-28.9);

	this.mc_priceIcons = new lib.Mc_priceIcons();
	this.mc_priceIcons.setTransform(-54.6,68.9);

	this.btn_showMe = new lib.Btn_ShowMeBright();
	this.btn_showMe.setTransform(54.9,67.4);

	this.txt_objName = new cjs.Text("Simple house\nLevel 5", "12px 'Arial'", "#503516");
	this.txt_objName.name = "txt_objName";
	this.txt_objName.textAlign = "center";
	this.txt_objName.lineHeight = 14;
	this.txt_objName.lineWidth = 148;
	this.txt_objName.setTransform(0,-81.5);
  window.text = this.txt_objName;
  console.log(this.nominalBounds)

	this.txt_price = new cjs.Text("9.999.999,89", "12px 'Arial'", "#2B241B");
	this.txt_price.name = "txt_price";
	this.txt_price.lineHeight = 14;
	this.txt_price.lineWidth = 64;
	this.txt_price.setTransform(-34.7,62.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_price},{t:this.txt_objName},{t:this.btn_showMe},{t:this.mc_priceIcons},{t:this.mc_upgradeIcons},{t:this.btn_info}]}).wait(1));

	// Layer 2
	this.mc_preview = new lib.Mc_objectPreviewHolder();
	this.mc_preview.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.mc_preview).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3F6FE").s().p("Aq/AYQgRAAgLgMQgMgMAAgOIAAgJQAAAQAMAJQALAMARAAIV/AAQARAAAMgMQALgJAAgQIAAAJQAAAOgLAMQgMAMgRAAg");
	this.shape.setTransform(0.5,76.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(56,36,8,0.349)","rgba(56,36,8,0.349)"],[0.012,1],-74.4,0.1,74.5,0.1).s().p("ALdgBQgMgMgRAAI1/AAQgRAAgLAMQgMAJAAAQIAAgJQAAgPAMgLQALgMARAAIV/AAQARAAAMAMQALALAAAPIAAAJQAAgQgLgJg");
	this.shape_1.setTransform(0.5,59.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(81,49,15,0.2)","rgba(81,49,15,0.2)"],[0,0.631],-74.4,0.1,74.5,0.1).s().p("ALdAHQgMgKgRAAI1/AAQgRAAgLAKQgMALAAAQIAAgdQAAgPAMgMQALgLARAAIV/AAQARAAAMALQALAMAAAPIAAAdQAAgQgLgLg");
	this.shape_2.setTransform(0.5,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.498)","rgba(255,255,255,0.498)"],[0,1],-74.4,0,74.5,0).s().p("Aq/BpQgRAAgLgMQgMgMAAgRIAAh/QAAgSAMgLQALgMARAAIV/AAQARAAAMAMQALALAAASIAAB/QAAARgLAMQgMAMgRAAg");
	this.shape_3.setTransform(0.5,68.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#CEDDE2","#D1DFE3","#DCE6E9","#EDF1F2","#F7F7F7"],[0,0.365,0.647,0.902,1],0,63.4,0,-63.4).s().p("Aq7J6QgQAAgMgMQgMgMABgRIAAyiQgBgQAMgMQAMgLAQAAIV3AAQAQAAAMALQALAMAAAQIAASiQAAARgLAMQgMAMgQAAg");
	this.shape_4.setTransform(0,15.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F8291").s().p("ArsNNQgVAAgPgPQgPgPAAgUIAA41QAAgUAPgPQAPgOAVAAIXaAAQAUAAAPAOQAOAPAAAUIAAY1QAAAUgOAPQgPAPgUAAgAsIs2QgNAMAAAQIAAY1QAAAQANAMQALAMARgBIXaAAQAQABAMgMQALgMABgQIAA41QgBgQgLgMQgMgLgQAAI3aAAQgRAAgLALg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#82B1BD","#C8DBDF"],[0,1],0,83.5,0,-83.5).s().p("ArsNCQgRABgLgMQgNgMAAgQIAA41QAAgQANgMQALgLARAAIXaAAQAQAAAMALQALAMABAQIAAY1QgBAQgLAMQgMAMgQgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-84.5,160,175.7);


// stage content:
(lib.architect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ArchitectMainDialogAsset();
	this.instance.setTransform(392,292.5,1,1,0,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,784,585);


/////////////////////////////////////////////////////////////

(lib.Icon_Upgrade_mini = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3617").s().p("AgPBHQgEAAgCgDQgDgEAAgDIAAgkIgkAAQgDAAgDgDQgEgCAAgEIAAgfQAAgDAEgEQACgCAEAAIAkAAIAAgkQAAgEADgDQACgDAEAAIAfAAQADAAADADQADADAAAEIAAAkIAkAAQAEAAADACQACAEAAADIAAAfQAAAEgCACQgDADgEAAIgkAAIAAAkQAAADgDAEQgDADgDAAgAhAgPIAAAfQAAAEAEAAIApAAIAAApQAAAEAEAAIAfAAQAEAAAAgEIAAgpIApAAQAFAAAAgEIAAgfQAAgEgFAAIgpAAIAAgpQAAgFgEABIgfAAQgEgBAAAFIAAApIgpAAQgEAAAAAEg");
	this.shape.setTransform(5.9,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC44D").s().p("AgBABQgFgLACgBQADgBADAMQAFALgCABIgBAAQgCAAgDgLg");
	this.shape_1.setTransform(11.3,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AgBAAQgEgRADAAQACAAACARQAEASgDAAIAAAAQgDAAgBgSg");
	this.shape_2.setTransform(7,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F2BA49","rgba(242,161,121,0)"],[0,1],0,-3.9,0,4).s().p("AgsAcQgNgJgDgQIAtAAIAAgjQAAgGAPAAQAPAAABAGIAAAjIAtAAQgCAQgOAJQgQALgdAAQgcAAgQgLg");
	this.shape_3.setTransform(5.9,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B84D00").s().p("AgPAbQgEAAAAgFIAAgnIgpAAQgEAAAAgEIAAgFQAAAFAEAAIAtAAIAAAmQABAFAEAAIAUAAQAGAAAAgFIAAgmIAtAAQAEAAABgFIAAAFQAAAEgFAAIgpAAIAAAnQAAAFgEAAg");
	this.shape_4.setTransform(5.9,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#CC6700","#CD6400","#D15A00","#D74A00","#D84800"],[0,0.396,0.702,0.976,1],0,6.6,0,-6.6).s().p("AgPBBQgEAAAAgEIAAgpIgpAAQgEAAAAgEIAAgfQAAgEAEAAIApAAIAAgpQAAgFAEABIAfAAQAEgBAAAFIAAApIApAAQAFAAAAAEIAAAfQAAAEgFAAIgpAAIAAApQAAAEgEAAg");
	this.shape_5.setTransform(5.9,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D3617").s().p("AgYB2QgIAAgFgGQgGgGAAgIIAAheQgjgCgDgCQgFgDAEgHQAGgRAggrQAigvAKAAQALAAAhAtQAfApAIATQAEAJgEADQgEADgkABIAABeQAAAIgGAGQgFAGgIAAgAgug8QgmA0AGAFQADADAlAAIAABiQAAAGAEAEQAEAFAGAAIAwAAQAGAAAEgFQAEgEAAgGIAAhiQAmAAADgDQAGgFgmg0Qglg0gKAAQgIAAgmA0g");
	this.shape_6.setTransform(-3.4,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#67991F").s().p("AgYBDQgGAAgEgFQgEgEAAgGIAAhhQglgBgDgDQgDgCAJgPIgCAFQgBAFADABQAEACAnAAIAABhQAAAKAHACQADABATAAQARAAAGgDQAGgDAAgHIAAhhQAxAEAAgIQADAHgCABQgDADgmABIAABhQAAAGgEAEQgEAFgGAAg");
	this.shape_7.setTransform(-3.4,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2FFD9").s().p("AAHARQgHgEgFgIQgHgGgDgIQgDgHACgCQADgDAGAFQAHAEAFAJQAHAGAEAHQADAIgCACIgCAAQgDAAgFgDg");
	this.shape_8.setTransform(-1.2,-10.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E0F2AA","rgba(127,191,53,0)"],[0,1],0,-4.7,0,4.8).s().p("Ag5AUQAMgVARgWQATgXAJAAQAIAAATAYQAQAUAOAZQAJAQgaAFQgOADgcAAQhEAAANgbg");
	this.shape_9.setTransform(-3.3,-6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#6BB32D","#6EB52E","#78BB32","#88C639","#92CC3D"],[0,0.361,0.639,0.89,1],0,-11.3,0,11.4).s().p("AgYBxQgGAAgEgFQgEgEAAgGIAAhiQglAAgDgDQgGgFAmg0QAmg0AIAAQAKAAAlA0QAmA0gGAFQgDADgmAAIAABiQAAAGgEAEQgEAFgGAAg");
	this.shape_10.setTransform(-3.4,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-14.1,24.9,28.3);


(lib.UpgradeIcons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Icon_Upgrade_mini();
	this.instance.setTransform(0,0,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-14.1,24.9,28.3);


// stage content:
(lib.basicgraphics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc_upgradeIcons = new lib.UpgradeIcons();
	this.mc_upgradeIcons.setTransform(252.7,204,10.639,10.639,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_upgradeIcons).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(396.2,248.2,264.4,300.6);

(lib.ArchitectMainDialogAsset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.btn_close = new lib.Btn_CloseXDialog();
	this.btn_close.setTransform(306.8,-222,1,1,0,0,0,-0.1,0);

	this.mc_pageSwitcher = new lib.PageSwitcherAsset();
	this.mc_pageSwitcher.setTransform(133.2,254.2);

	this.btn_help = new lib.Btn_help();
	this.btn_help.setTransform(312,250.4,1.115,1.115,0,0,0,-0.7,1.4);

	this.mc_upgradeInfo4 = new lib.UpgradePreviewAsset();
	this.mc_upgradeInfo4.setTransform(214.1,146.3);

	this.mc_upgradeInfo3 = new lib.UpgradePreviewAsset();
	this.mc_upgradeInfo3.setTransform(42.1,146.3);

	this.mc_upgradeInfo2 = new lib.UpgradePreviewAsset();
	this.mc_upgradeInfo2.setTransform(214.1,-29.7);

	this.txt_title = new cjs.Text("Architect", "14px 'Arial'", "#503516");
	this.txt_title.name = "txt_title";
	this.txt_title.lineHeight = 17;
	this.txt_title.lineWidth = 347;
	this.txt_title.setTransform(-120.4,-281);

	this.txt_speechBubble = new cjs.Text("While I am around the farm, Ican help you upgrade buildings to new levels that would not be possible if I wasn’t here.", "13px 'Arial'", "#2B241B");
	this.txt_speechBubble.name = "txt_speechBubble";
	this.txt_speechBubble.lineHeight = 14;
	this.txt_speechBubble.lineWidth = 347;
	this.txt_speechBubble.setTransform(-120.4,-259.9);

	this.txt_limitedTime = new cjs.Text("Limited time", "14px 'Arial'", "#FFFFFF");
	this.txt_limitedTime.name = "txt_limitedTime";
	this.txt_limitedTime.textAlign = "center";
	this.txt_limitedTime.lineHeight = 14;
	this.txt_limitedTime.lineWidth = 139;
	this.txt_limitedTime.setTransform(254.9,-145.7);
  window.txt_limitedTime = this.txt_limitedTime;

	this.mc_upgradeInfo1 = new lib.UpgradePreviewAsset();
	this.mc_upgradeInfo1.setTransform(42.1,-29.7);

	this.txt_headline = new cjs.Text("Upgradeable buildings", "14px 'Arial'", "#503516");
	this.txt_headline.name = "txt_headline";
	this.txt_headline.lineHeight = 17;
	this.txt_headline.lineWidth = 208;
	this.txt_headline.setTransform(-35.4,-169.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt_headline},{t:this.mc_upgradeInfo1},{t:this.txt_limitedTime},{t:this.txt_speechBubble},{t:this.txt_title},{t:this.mc_upgradeInfo2},{t:this.mc_upgradeInfo3},{t:this.mc_upgradeInfo4},{t:this.btn_help},{t:this.mc_pageSwitcher},{t:this.btn_close}]}).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-391.9,-292.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.9,-292.7,784,585.5);

//////////////////////////////// KEYFRAME

var p; // shortcut to reference prototypes
var Ease = cjs.Ease;
var MovieClip = cjs.MovieClip;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Shape = cjs.Shape;
lib.webFontTxtFilters = {};

// library properties:




lib.ssMetadata = [];


lib.webfontAvailable = function(family) {
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.shadow2 = function(mode,startPosition,loop) {
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("rgba(153,153,153,0.271)").s().p("A1MCLQoyg5AAhSQAAhRIyg6QIyg5MaAAQMbAAIyA5QIyA6AABRQAABSoyA5QoyA6sbAAQsaAAoyg6g");

	this.timeline.addTween(Tween.get(shape).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-191.9,-19.7,383.9,39.6);


(lib.bilbotail = function(mode,startPosition,loop) {
	var shape_34;
	var shape_33;
	var shape_32;
	var shape_31;
	var shape_30;
	var shape_29;
	var shape_28;
	var shape_27;
	var shape_26;
	var shape_25;
	var shape_24;
	var shape_23;
	var shape_22;
	var shape_21;
	var shape_20;
	var shape_19;
	var shape_18;
	var shape_17;
	var shape_16;
	var shape_15;
	var shape_14;
	var shape_13;
	var shape_12;
	var shape_11;
	var shape_10;
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	shape = this.shape = new Shape();
	shape.graphics.f("#4C6F74").s().p("AAjG+QAAgOACgGQAGgNARgZQASgaAGgLIAbg6QAPgjAHgZQAIgdAEgnQAEglAAgiQAAgRgEgYQgEgUgHgTQgFgRgJgUQgKgWgKgPQgIgOgPgRQgOgQgOgMQgMgKgWgOIgigVIgjgRQgYgMgLgGQgPgJgKgIQgQgKgIgJQgIgIgHgLQgHgKgDgKQgDgIAAgNQgBgKACgKQABgLAEgPIAIgZIAOghIAQghIADgFIADgHIACgEIADgFIACAEIAAADIgBADIgDAIIgDAHIgDAJIgDAJIgDAGIgBAHIABgBIAFgGIAFgGIALgKIAMgKIALgIQAFgFAFgCIAJgDIAAABIAAAAIgnAyIgmAxIAXgPQAagPAMgFQAIgCAUABIASABIgDAFIgdAFQgeAGgMAIQgSAOgLAOQgQAUACAPQADAWAXAaQAQAUAYAUQAUAQA/AfQA4AcAVAWQAZAaAXAwQASAlAPAtQAHAVACAhQABAZgDAdQgDAfgGAeQgHAjgJAWQgSApgdA0QgaAvgcArIgBAAQgCAAgBgIg");
	shape.setTransform(-50.7,-73.1);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#4C6F74").s().p("AA5HAQAAgOACgGQAGgNARgZQASgaAFgLIAcg6QAQgkAGgYQAIgdAEgnQAFglABghQAAgRgEgZIgKgoQgFgRgIgUQgKgWgJgOQgJgQgOgQQgPgRgNgLQgMgKgVgNIgkgUIghgQIgjgOIgbgNQgQgJgKgHQgJgFgJgJQgJgKgGgIQgEgHgFgMIgIgVIgIgaQgDgNgCgMQgDgNgDgWIgEgjIgBgGIAAgHIgBgFIAAgFIACABIACABIADAGQgBACACAFIACAIIABAJIADAIIABAHIADAGIAAAAIABgBIABgHIAAgHIAEgOIAFgNIAEgMQACgHACgEIAEgEIADgCIAAAAIgEA8IgGA8IAMgYQANgaAIgJQAFgGARgJQAHgFAJgDIAAAGIgUASQgVAVgFANQgJAUgCATQgEAZAHAPQAJAUAbAYQAPANAfAVQARAMBBAeQA5AaAWAXQAYAaAXAwQAQAkAPAvQAGAVABAhQAAAYgCAfQgDAegHAeQgHAjgKAWQgRApgdA0QgaAvgcAqIAAAAQgDAAgBgHg");
	shape_1.setTransform(-52.9,-73.3);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#4C6F74").s().p("ABkGpQAAgNACgGQAGgNARgZQASgbAGgKIAbg6QAQgjAHgYQAIgeAGgnQAFglACghQAAgRgDgYQgDgVgFgSQgFgTgIgUIgRgmQgJgPgNgRQgOgRgNgMQgNgLgUgNIgjgUQgLgGgXgIIgggNIgbgKIgbgLIgUgLQgLgHgJgHQgGgEgKgLIgRgPIgTgSIgUgRIgagXIgZgXIgEgEIgEgEIgDgEIgEgDIACgBIADAAIADABIACABIAGAFIAGAFIAHAFIAHAFIAGADIAFADIAAgBIgDgFIgEgGIgGgLIgFgNIgDgKIgDgLIABgGIABgCIABAAIAhAvIAiAuIgGgXQgGgbAAgMQABgIAIgPIAIgQIAEAEIgDAZQgDAcADAMQAFATAKAUQALAWANAMQAPAQAgAUIAzAeIBRAoQA2AaAWAYQAZAaAVAyQAOAjAOAxQAGAVAAAhQAAAYgEAeQgDAfgHAdQgIAjgKAWQgSAqgdAzQgaAwgcApIgBAAQgCAAgBgIg");
	shape_2.setTransform(-57.2,-71.1);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#4C6F74").s().p("ABwGKQAAgNACgGQAGgNARgZIAXglIAcg6QARgjAHgYQAJgdAHgoQAGgkACghQACgRgDgYQgCgTgEgVIgLgoQgHgWgIgQQgIgQgNgRQgNgSgMgMQgMgMgTgNQgQgMgSgKQgMgHgVgIIgigNIgZgJIgbgJIgVgIIgWgHIgWgIIgVgHQgKgCgQgBQgLgCgPgBIgigBIggAAIgGAAIgFgBIgFAAIgEgBIABgCIABgBIADgBIADAAIAIgBIAHAAIAIgBIAJgBIAGgCIAHgBIgBgBIgGgBIgGgCIgMgEIgKgFIgJgFIgJgGIgCgHIABgBIA2ANIA2ANIgTgOQgUgPgHgJQgEgGgCgQIgCgQIAFAAIANAUQAPAUAJAHQANAKAXAMIAmASQANAHAsASQAkAQASAKIBSAqQAzAbAVAaQAXAbATA0QAMAjANA0QAFATgBAhQgBAYgEAfQgFAegHAdQgJAigKAXQgSApgeAzQgbAwgbApIgBAAQgCAAgBgIg");
	shape_3.setTransform(-58.4,-68);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#4C6F74").s().p("ABgFkQAAgOACgGQAGgNARgZQATgbAFgKIAdg5QARgjAHgYQAKgcAIgoIAMhFQABgQAAgXQgCgWgDgTIgHgqQgHgXgHgQQgGgRgMgSQgMgSgMgNQgKgNgSgPQgQgOgRgKQgMgIgUgJIgigOQgKgFgRgFIgZgHIgXgFIgXgEIgVAAQgOgBgIADQgLACgOAGIgWANQgKAFgRANIgaATIgEADIgFAEIgEACIgDABIgBgBIACgCIAIgIIAGgFIAGgHIAGgGIAFgFIAEgFIgBAAIgFACIgGADIgKAEIgLADIgKABIgJAAIgDgCIgCgCIAAAAIAygXIAygXIgWABQgYABgKgDQgGgCgJgLIgJgKIAEgFIAVAHIAgAIIAqgCQAcgDAOACQAgAGAeAJQAjAKAYAMQA1AcAcASQAvAeAWAeQAVAcAQA1QAJAiAKA2QADAWgDAfQgBAWgGAhQgFAdgJAdQgJAigKAWQgUAqgdAyQgcAxgbAoIgBAAQgCAAgBgIg");
	shape_4.setTransform(-56.9,-64.2);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#4C6F74").s().p("AA7FgQAAgOACgGQAHgNAQgZQAUgbAEgJIAeg5QASgiAIgYQALgdAKgmQAJglAGggQADgQAAgYQABgUgCgVQgBgUgEgWQgEgXgFgRQgGgRgKgTQgKgTgKgPQgLgOgQgQQgQgPgPgMQgMgJgTgKIghgSIgcgKIgZgIQgLgCgMgBQgOgCgKABQgLABgKACQgLADgIAEQgJAGgJALIgQATQgHAKgJASIgOAdIgFAJIgBAEIgDADIgBgBIAAgDIAEgLIACgGIADgJIAFgOIABgHIAAAAIgEAFIgDAFIgHAIIgIAIIgHAGIgHADIgGgBIAAgBIAigqIAhgqIgSALQgVAMgKACQgFABgLgFIgKgFIACgGIATgFIAegJIAlgSQAYgMAPAAQAegBAjAIQAjAIAZANQArAYAkAcQAsAiAVAhQATAdALA3QAGAfAGA6QADAWgGAfQgDAUgHAiQgHAdgKAcQgKAigLAWQgVArgcAxQgeAxgaAmIAAAAQgDAAgBgIg");
	shape_5.setTransform(-53.2,-63.8);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#4C6F74").s().p("AAWFoQAAgNADgGQAGgNAQgZIAZglIAfg4IAcg5QALgdAMgmQAMgkAIggQAEgQADgWQADgWAAgTQABgWgCgUQgBgYgEgRQgFgSgHgUQgIgVgJgPQgJgPgPgSQgOgQgNgNQgMgLgTgNQgPgKgQgKQgMgHgPgFQgNgHgNgDQgLgDgNgCQgNgCgJABQgLABgKADQgKADgHAFQgIAHgHALQgHAKgFALQgFALgFAUIgHAfIgDANIgCADIgBgBIAAgCIAAgCIABgJIABgHIAAgIIABgJIAAgGIABgHIgBAAIAAAAIgEALIgEAKIgFAJIgFAGIgGAGIgDABIgCgBIAAAAIAYgwIAWgxIgPAPQgRAQgJAFQgFACgKgCIgJgCIAAgGIAQgKIAagQQAQgLAQgNQAWgPAOgBQAegBAkAIQAjAKAYAPQAnAaAkAhQApAnARAjQAQAfAFA3QAEAdABA+QAAAWgIAeIgOA1IgTA4QgMAhgMAWQgWAtgcAuQgfAzgZAjIgBAAQgDAAgBgIg");
	shape_6.setTransform(-49.6,-64.7);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#4C6F74").s().p("AgwGDQABgNACgHQAHgNASgXIAXglIAjg2QAUghALgWQAPgbAPgkIAbhCQAGgQAGgXQAFgTADgUQAEgUACgVQACgYAAgQQAAgTgEgVQgDgVgGgRQgEgRgLgVQgJgUgKgQQgIgOgOgRIgYgcQgJgKgNgLQgMgLgLgGQgKgHgJgFQgLgGgLgCQgJgCgKgBQgMAAgHADQgKAEgLAJQgJAIgHAJQgHAJgKARIgOAcIgIAPIgBgBIAAgDIAEgKIACgGIACgIIACgIIADgGIACgGIgBAAIgGAKIgHAIIgHAHQgCAEgDABIgFAFIgFAAIAAgBIAhgqIAhgpIgSAMQgVALgKAEQgEABgJgEIgJgDIACgFIARgIQAUgIAJgDIAmgPQAZgJAOAEQAcAHAeAUQAgAUATAXQAeAiAZAqQAcAvAKAnQAJAigEA3QgCAbgJA8QgDAVgLAfIgUAyQgLAcgNAaQgPAggNAVQgcAvgbAoQggAzgaAhIAAAAQgDAAgBgIg");
	shape_7.setTransform(-42.1,-67.1);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#4C6F74").s().p("AiLGWQABgNADgGQAIgOASgWIAcgiIAmg0QAXgfANgVQAPgaAUgiQATghAPgcIASglQAJgUAHgSIANglQAHgXADgRIAGgnQABgVgBgSQAAgRgCgYIgHgoIgJgkIgNgjIgLgbIgOgaIgPgTQgIgKgJgGQgIgGgJgEQgKgFgIgBQgIAAgOAEQgLAEgKAFQgLAGgOANIgWAVIgJAJIgCACIgBgBIADgFIADgGIAJgLIAFgGIAEgFIAEgGIgBAAIgFAEIgEADIgJAGQgFAEgDACIgGADIgHADIgBAAIgCgBIAAgBIAtgcIAsgcIgWAEQgYAEgLAAQgEAAgIgEIgHgFIADgFQAFgBAPgCQAWgDAKABIApgBQAYACAMAJQAWARAWAgQATAdAMAdQAPAqAKAxQAKA0AAAoQgBAjgOA0QgHAZgUA5QgHAUgPAdIgbAvIgdAzIgfAxIg8BUQgmAygaAfQgEAAAAgKg");
	shape_8.setTransform(-32.7,-68.7);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#4C6F74").s().p("AjAGkQABgNAEgGQAIgNATgVIAeghIAqgwIApgxIAsg3QAXgfASgYIAYgiIAWgiIAVgkIAUgiIAPgkQAHgTAFgSIAKgnIAJgoIAGglIAEglIACgdIgBgdQgBgMgDgLQgDgOgEgJQgEgJgGgIQgHgJgGgFQgJgFgNgCQgNgDgKABQgLAAgTAGIgdAJIgKAGIgDABIAAgBIAEgEIAFgDIAFgDIAHgFIAHgEIAFgDIAGgDIgBAAIgGABIgGABIgKADIgJADIgIABIgHABIgCgCIAAgBIA0gIIA1gJIgXgGQgYgGgLgEQgEgCgHgGIgHgGIAHgDIAVAEQAXAGAJAEIAmATQAWANAHAOQALAYAEAoQADAfgCAjQgDAqgJAyQgKAzgNAnQgKAggaAtIgrBMQgKASgVAaIgfAqIgiAuIgmAuIhBBPQgpAxgcAaIgBAAQgDAAABgJg");
	shape_9.setTransform(-27,-69.7);

	shape_10 = this.shape_10 = new Shape();
	shape_10.graphics.f("#4C6F74").s().p("AkfGNQACgMAEgGQAJgOAUgTIAgggIAugsIAvgsIAzgwIAygxIAcgdIAcgcIAdgeIAcgeIAYgdIAYggIAYggIAXghIAVgeIAVgfIAQgZQAKgPAEgKQAGgMADgLIAGgWIABgTQAAgNgEgGQgEgKgJgIQgJgKgKgEQgKgFgSgEIgfgEIgDABIgFAAIgEABIgCgBIAAAAIAFgDIAGgBIAGgBIAIgCIAIAAIAFAAIAJACIA0AQIgSgQQgTgTgHgJQgEgCgGgKIgFgJIAIAAIATAOQAVARAGAKQARAYAGALQAMAYgCAPQgDAagSAkQgFAMgbAuQgUAigeArQgaAngbAjQgVAZgjAnIg7BAQgMAPgXAWIgmAlIgpApIgqAoIhHBKQguAvgdAXQgDAAABgKgACmlwIgIgBIgCgCIAAgBIAQAEg");
	shape_10.setTransform(-17.2,-67);

	shape_11 = this.shape_11 = new Shape();
	shape_11.graphics.f("#4C6F74").s().p("Al7FFQADgNAEgEQALgOAVgTIAigdIAygnIAzgoIA6goIA6gpQAMgJAVgNIAjgXIAhgWIAigVQAIgFAZgQIAhgXIAigVIAjgUIAggSIAhgQIAbgOQASgIAJgFIATgOQALgIAHgHQAHgIAFgIQAHgJABgIQACgLgDgLQgCgOgFgIQgGgJgOgMIgYgSIgEgBIgFgDIgDgBIgDgBIABgBIAGAAIAGACIAGACIAIADIAEACIAKAKIAnAoIgGgYIgIgmIgEgTIgBgMIAJAEIAJAYQALAcAAANQABAagCARQgEAagKAMQgPATglAUIg7AhIhNAtIhNAuIhIAuIhFAyIgsAcIgrAeIgvAiIguAjIhMBFQgyAsgdAUQgEgBABgJgAEmk+IgBgBIgBgCIABAAIAHAIIgGgFg");
	shape_11.setTransform(-7.7,-59.3);

	shape_12 = this.shape_12 = new Shape();
	shape_12.graphics.f("#4C6F74").s().p("AnIDUQAEgMAFgGQAMgNAVgRQAMgJAYgQIA2gkQAfgUAYgOIA/ggIBAgfQAPgGAXgIQASgIAUgHIAogNIAlgNIAngMIAmgKIAogHIAogEIAmAAIAkABIAeAEIAeADIAYAAIAYgCIATgFQALgEAFgGQAIgHAFgLQAGgLABgJQAAgLgHgSIgLgbIgDgEIgEgEIgDgCIgCgEIABAAIAEABIACACIAGAFIAEAFIAGAHIABABIADAOIANA4IAJgYIAPgmIAIgVIAFgNIAFAJIgFAdQgHAfgIAMQgMAUgOAOQgRATgRAEQgWAHgrgFQg3gFgMAAIhZAFQg2AFgiAIQggAHgwASIhQAdIgxAUIgvAXIgzAbQgeAQgTANQgVAOg9AwQg2ApgeARQgDgBABgJgAGFjYIgBgFIABAAIACAKIgCgFg");
	shape_12.setTransform(0.4,-47.6);

	shape_13 = this.shape_13 = new Shape();
	shape_13.graphics.f("#4C6F74").s().p("AnkBcQAEgMAFgFQANgNAWgPIAmgYQAbgQAegNQAhgRAagKQAbgMAogMIBEgVIApgJIApgGIAqgFIAogCIAoAAQAZABAQACIAnAJQAWAFARAHQAOAGATALIAgAUQAIAFAPANIAYATIAUAMQAMAHAJAEQAMAGAHACQALAEAIgBQAKgBALgFQALgGAFgHQAGgJADgRIAFgdIgBgGIgBgFIgDgIIABAAIADACIABACIABADIACAGIACAIIABAJIABABIgEALIgUA3IAWgQIAjgVIAUgOIANgKIAAAKIgXAVQgZAXgOAHQgUAIgVAEQgZAEgQgFQgUgHgkgeQgmgegQgIQgqgUgmgOQgygTgkgEQgggEgyAFIhWANQgWADgeAHQgZAHgZAIQgcAJgaALQggAMgVALQgXALg/AqQg6AmgdAOQgEgBADgJgAGyhGIACgHIABABIgEALIABgFg");
	shape_13.setTransform(3.6,-35.1);

	shape_14 = this.shape_14 = new Shape();
	shape_14.graphics.f("#4C6F74").s().p("AFsChQgUgEgUgJQgXgLgLgPQgMgQgNguQgOgugMgOQgagjgfgeQgmgkghgPQgdgPg2gGIhUgHQgWgCgfADQgZACgaAFQgdAFgcAHQghAJgWAJQgbAMg/AkQg9AigdAMQgEgBADgKQAEgLAGgFQAOgMAWgNQAUgMAVgKQAdgOAfgMQAjgOAagIQAdgHApgIQAjgGAlgEQARgCAYAAQAVAAAVACQAUABAVAEQAYADARAFIApALQAXAIAPAIQAQAJARANQATAOAMANQALALAMASQAKAQAJARQAGAIAFASIALAdIAKAWQAFAOAGAIIALARQAHAKAHAEQAJAFALABQAMADAHgEQAKgEANgPIATgXIACgFIACgGIACgJIABABIABADIAAACIAAAEIgCAIIgDAHIgDAJIgBABIgGAGIgwAnIAbgBIAqAAIAbgCIASgBIgHAJIggAHQgZAFgPAAIgMgBgAGuBGIAGgEIABAAIAAABIgKAHIADgEg");
	shape_14.setTransform(0.8,-23);

	shape_15 = this.shape_15 = new Shape();
	shape_15.graphics.f("#4C6F74").s().p("AFDDlQgjgNgMgMQgPgNgMgUQgMgVgCgRQgCgTALgxQAMgugEgTQgJgqgSgoQgVgugbgZQgZgWgzgSQgPgFhFgTQgTgGgfgCQgZgBgcABQgeACgcADQgiAFgWAIQgdAJhAAgQhAAfgeAKQgDgCAEgJQAFgMAGgEQAPgMAXgMQAUgLAUgIQAggMAfgKQAlgLAbgFQAegEApgCQAlgCAkACQASAAAWAEQAWAEAUAGQATAFAWAIQAXAJAQAIQATAKASAMQAUAOAMANQANANAMATQAMATAHARQAGAPAEAVIAEAmIgDAdIgFAeIgDAZQgCAPABAJIAAAVQAAANAEAGQAFAJAHAHQAJAIAIABQAMACARgHIAcgMQADgBADgDIAEgEIAHgHIABACIgCAFIgDADIgGAGIgGAFIgHAHIgEACIgFABIg9AKIAWAOIAlAWIAaAOIAQAJIgLAEgAF9CeIAFgBIADAAIAAABIgPADIAHgDg");
	shape_15.setTransform(-5.5,-11.2);

	shape_16 = this.shape_16 = new Shape();
	shape_16.graphics.f("#4C6F74").s().p("ADyEaIgXgaQgYgcgGgQQgGgTgBgXQgBgYAGgRQAHgRAignQAegkAEgVQAIgngFgtQgGgzgTgeQgRgcgwgbQgSgLg+gdQgUgJgegGQgZgFgagBQgegDgcACQgiABgXAGQgeAHhCAdQhCAcgdAHQgEgCAEgIQAGgMAGgEQAQgLAXgMQAWgKAUgGQAhgLAggHQAlgIAcgCQAegDArADQAiADAkAGQASACAXAJQAWAHATAJQASAIAUAMQAVAOAPAMQAQANAPARQAQASAJAQQAIAQAHAWQAGAXABARQABARgFAVQgDATgHAQQgEAKgLARIgSAaIgNAVIgNAVIgJASQgFAMgBAIQAAAJACAKQAFALAGAEQAKAGATACIAfACIAGgBIAHgCIAFgCIAFgBIgBACIgCADIgGACIgIADIgJADIgKACIgGABIgCgBIg8gUIANAYIAWAjIAQAbIAKAQgAEpDZIAJABIAJADIgBABIgRgFg");
	shape_16.setTransform(-12.8,-4.6);

	shape_17 = this.shape_17 = new Shape();
	shape_17.graphics.f("#4C6F74").s().p("ABvEeQgKgfAAgDQgKgkABgRQABgTAJgUQAJgWAMgOQAMgMAvgZQApgXALgSQAUgkAHgsQAIgygNghQgMghgrgiQgSgOg3glQgSgMgfgJQgYgHgcgFQgbgEgdgCQgiAAgYAEQgeAGhDAZQhDAagdAGQgEgCAEgJQAGgLAGgEQARgMAYgJQAWgKAUgGQAigIAggGQAngGAbgBQAfABAoAHQAlAGAiAJQASAFAXALQAUAJASAMQARALASAPQAUARAMAOQANARAMATQANAWAFASQAFARAAAXQABAYgEASQgEAQgKARQgJASgMANQgHAKgRAMIgZARIgUAOIgUAQIgQANQgKAJgDAHQgEAIgBAKQgBAMAFAFQAHAKARAJIAcAPIAHABIAGABIAGAAIAFAAIgBACIgGADIgEgBIgJgBIgJgBIgKgCIgKgCIgvgqIADAbIAGAqIADAeIADATgADLEDIgQgOIAMAHIAFAGIAAABg");
	shape_17.setTransform(-15.8,-2.3);

	shape_18 = this.shape_18 = new Shape();
	shape_18.graphics.f("#4C6F74").s().p("ACAD3IAEAFIAHAMIAIAMIACAIIgCABIgTgmgAAwEQIAFghQAGglAGgPQAIgSAPgTQAPgSAPgNQALgJAygVQArgRALgUQAUghAHguQAIgxgMghQgMghgqgjQgUgPg2gkQgRgMgfgKQgYgGgcgFQgcgFgdgBQgigBgXAFQgfAFhCAaQhEAZgdAHQgDgCADgJQAHgMAGgDQARgLAXgKQAWgKAUgGQAigIAggGQAngHAbAAQAgABAnAGQAlAGAjAKQASAFAWALQAVAJARAMQASALARAQQAUAQAMAQQANAQAMATQANAWAFASQAEASABAXQAAAXgEATQgEANgKAUQgKARgLANQgIAJgQALIgaAPIgVAOQgOAHgHAFIgRALQgMAIgEAGQgGAJgDAKQgFAMAEAHQADALANAQIAWAZIAFAEIAGAEIAFACQADACABABIgCACIgDgBIgHgCIgIgFIgHgFIgKgFIgIgHIgGgFIgEgDIgXgwIgGAbIgLAoQgCALgIATIgHASg");
	shape_18.setTransform(-15.8,-3);

	shape_19 = this.shape_19 = new Shape();
	shape_19.graphics.f("#4C6F74").s().p("AA1EXIgBAAIAMhBIAMhBIgUATQgWAVgLAIQgHAGgSAKIgRAJIgBgKIAWgXQAbgYANgJQAPgLAXgNIAmgWIA/gUQApgOAMgUQAUgfAHgvQAHgxgNgjQgMgfgqgkQgUgQg1gjQgSgMgfgJQgYgHgcgFQgcgFgcAAQgigBgYAEQgeAGhDAaQhDAZgdAHQgEgCAEgJQAGgLAGgEQARgLAYgKQAWgKAUgGQAhgJAhgFQAmgHAcAAQAfAAAnAHQAmAFAiAJQASAEAXAMQAVAKARAMQASALARAQQATAQANAPQANARALAUQANAVAFASQAFASABAYQABAXgEATQgEAOgLASQgJASgMANQgHAJgQAJIgZAQIgVAKIgWALIgUAJQgLAFgHAGQgJAIgGAIQgJALgCAJQgCAMACAWIACAhIACAHIACAGIACAGQABADAAABIgDAAIgCgBIgEgHIgDgIIgDgJIgDgKIgDgKIgCgHIgDgHIAAABIgBAGIgBAHIgCAPIgEAPIgCAMQgCAJgCAEIgFAIg");
	shape_19.setTransform(-15.8,-3.6);

	shape_20 = this.shape_20 = new Shape();
	shape_20.graphics.f("#4C6F74").s().p("AAND8IAAgDIAAgDIACgDIAEgHIAEgIIAFgJIAEgIIADgHIADgGIAAgBIgBABIgFAEIgGAEIgMAIIgNAHIgJAGIgNAEIgKAAIAAgBIAygmIAzgmIgaAEQgdADgNgBQgIgCgUgHIgSgIIAGgFIAeACQAfADAOgBQAWgBAXgDQAZgEASgFIA+gQQAngLALgUQAVggAGgyQAFgvgNgjQgMgggsgjQgUgRg2giQgSgMgegIQgYgIgdgEQgbgEgdgBQgiAAgYAEQgeAHhCAaQhDAageAHQgDgCADgJQAGgLAHgEQAQgLAYgLQAWgJAUgGQAhgKAhgFQAmgIAcAAQAfAAAoAGQAlAFAiAJQATAFAWALQAVAJASALQARAMASAQQAUAQAMAPQAOAQALAUQAOAWAFASQAFASABAYQABAWgDASQgEAQgKATQgJASgMAOQgHAJgPAJIgZAQIgVAKIgWAJIgWAIQgOAEgHAEQgNAGgJAGQgNAHgHAHQgJAJgOARIgUAbIgEAGIgEAFIgDAEQgCADgCABg");
	shape_20.setTransform(-15.7,-6.5);

	shape_21 = this.shape_21 = new Shape();
	shape_21.graphics.f("#4C6F74").s().p("AgeDVIAAgCIADgCIAFgCIAIgCIAHgBIAIgCIAIgEIAHgCIAGgDIAAgBIgIAAQgFAAgCgBIgMgCIgOgFIgMgGIgLgHIgHgIIABAAIAAgBIA6AHIA8AGIgXgLQgZgMgJgJQgGgGgHgUIgEgSIAEABIARAWQATAXALAFQASAJAXAEQAYAFASgDQAqgHAVgGQAlgNAMgUQAUgiAEgyQAEgxgOgjQgNgggsgiQgVgQg2ghQgTgLgfgJQgYgGgcgEQgbgDgeAAQgiAAgYAFQgeAHhBAbQhDAbgdAHQgEgCAEgJQAGgLAGgEQARgMAXgLQAWgKAUgGQAhgKAggGQAngIAbAAQAfgBAoAGQAmAEAiAIQASAEAXAKQAVAJASAMQASAKASAPQAUARANAOQAOARAMATQAOAWAFARQAGATACAWQACAZgDASQgDARgKAUQgKASgLAPQgHAJgPAKIgZARIgWALQgMAFgMADQgJADgOADIgYAFIgaAEIgbAFIghAHIgfAGIgGAAIgHABIgGAAIgCABIgDgBg");
	shape_21.setTransform(-15.5,-10.9);

	shape_22 = this.shape_22 = new Shape();
	shape_22.graphics.f("#4C6F74").s().p("ABUDEQgPgCgMgCQgMgDgTgIIgdgMIgGgEIgFgEIgFgDIgDgEIABgBIAFABIAKAFIAGAEIAHADIAIADIAHABIAFABIABAAIgBgBIgGgEIgFgEIgJgLQgGgGgBgFIgFgNQgEgHgBgGIgBgKIABAAIAqAkIArAkIgPgSQgPgUgDgLQgCgIAGgSIAGgSIADAFQgBAFAAAUQACAaAHAJQAMANAWAJQAVAJASgCQAkgEAcgJQAmgNAMgXQASgiACgzQACgygQgjQgOgggugfQgUgQg4ggQgTgKgfgHQgYgGgdgCQgcgDgcABQgjABgXAGQgeAHhCAdQhBAcgeAIQgDgCADgJQAGgMAGgDQAQgMAXgLQAXgLATgGQAhgLAggHQAmgIAcgCQAfgCAoAEQAlADAjAHQASAEAXAJQAVAJATAKQASAKATAOQAUAQANAOQAPAQAOATQAOAVAHARQAGATADAWQADAZgDATQgCARgJAVQgJATgLAPQgHAKgPAMIgZARQgKAGgOAGQgNAFgMADQgKADgPABIgaABIgbgBg");
	shape_22.setTransform(-15.2,-13.4);

	shape_23 = this.shape_23 = new Shape();
	shape_23.graphics.f("#4C6F74").s().p("AB6C/QgNgBgNgDQgPgDgKgFQgLgFgRgMIgZgVIgFgEIgEgGIgDgFQgDgDAAgCIABAAIAFACIAHAIIAGAGIAHAGIAHAFIAEADIAGADIAAgBIgFgGIgDgFIgHgNIgEgOQgCgGAAgHIgBgPIACgGIACgEIAAABIAeAtIAcAqIgIgQQgKgWAAgKQAAgIALgPIALgOIAAAEIgHAYQgHAYAGAJQAJAPAUAKQAVAKAQgCQAjgEAdgMQAmgQAKgXQARgkgCg0QgCgygSgjQgQgegvgdQgVgOg6gdQgUgJgfgGQgYgEgdgBQgbgBgeACQgiACgXAHQgdAJhBAeQhBAfgdAIQgEgBAEgJQAGgMAFgEQAQgMAXgMQAVgMAUgHQAggLAggIQAmgLAbgCQAfgDAqACQAkABAiAFQATACAYAJQAWAHASAJQATAJATAOQAWAOAOANQAQAPANASQAQAUAHARQAJASAEAWQAEAZAAAUQgCAQgHAWQgIAUgKARQgHALgOANQgLAKgNAKQgLAGgNAGQgOAGgLADQgLACgQABIgKABIgQgBg");
	shape_23.setTransform(-14.8,-15);

	shape_24 = this.shape_24 = new Shape();
	shape_24.graphics.f("#4C6F74").s().p("ACRC3QgMgCgTgIIgegOIgGgFIgFgEIgEgDIgEgEIABgBIACAAIAMAHIAIAEIAHAEIAIADIAGACIAGACIABgBIgBAAIgFgFIgGgEIgKgLIgHgNIgGgNQgDgHgCgHIAAgGIABgFIAAAAIApAnIAoAlIgOgRQgOgUgCgKQgCgIAGgTIAHgRIACAEIgCAaQgBAcAJAJQALAMAVAFQAXAGAOgGQAegOAZgWQAdgbADgZQAFgngSgvQgQgxgbgeQgXgZgzgUQgTgIhEgTQgUgGgfgBQgYAAgbACQgdACgdAFQgiAGgXAIQgbAKhBAjQg+AhgdAKQgEgBADgKQAFgLAGgEQAOgNAXgNQAUgMAUgIQAfgOAfgKQAlgMAbgGQAegGAqgDQAkgCAiAAQATgBAYAFQAXAEATAGQAUAGAWAIQAXAKAQAKQATALARAOQAUAQAMAOQAMAPALAWQALAWAFATQAEAPgBAXQAAAWgEASQgCANgKAQQgHAOgKANQgHAKgMAKQgKAKgLAGQgJAGgOAFQgNAEgLACQgNACgNABQgPAAgLgDg");
	shape_24.setTransform(-12.9,-18.1);

	shape_25 = this.shape_25 = new Shape();
	shape_25.graphics.f("#4C6F74").s().p("ADOCpIghgCIgHgBIgGgBIgFgCIgFgBIAAgCIACgBIADgBIADABIAHABIAIABIAKAAIAIAAIAGgBIAGgBIgBgBIgGgCIgIgCIgMgGIgOgJIgLgJIgKgKIgFgIIABgBIA2AUIA3ATIgVgNQgWgPgHgJQgGgHgDgUIgDgTIAFADIAKAaQAOAcALAGQAPAHAWgBQAXgBALgLQAUgWANggQAPgkgHgYQgMgjgjgoQghgmgmgUQgdgRg2gGIhYgGQgWgBgdAFQgYADgcAHQgcAGgcAJQghAKgVAKQgaAMg/AmQg8AlgdANQgEgBADgJQAEgMAGgGQAOgMAWgOQASgMAVgLQAdgPAegNQAjgPAagJQAdgKAogJQAlgIAigFQAQgDAZgBQAWgBAUABQAVABAWAEQAZAEASAFQAVAFAUAIQAYAJAPAJQARALASAPQASARAMAPQAKAOAJAWQAIAUAEAQQADANgBATQgBAPgDAQQgDALgFAOQgHANgHAKQgGAJgKAJQgKAJgKAGIgWALQgNAEgLACQgKABgPAAIgIAAg");
	shape_25.setTransform(-10.1,-24.1);

	shape_26 = this.shape_26 = new Shape();
	shape_26.graphics.f("#4C6F74").s().p("AD1CTIABgCIAEgDIAHgDIAHgDIAHgEIAHgEIAFgEIAEgDIAAgBIgBAAIgHACIgHABIgOACIgPAAIgNgCIgOgCIgHgEIgBgBIA5gLIA6gKIgbgDQgdgCgMgFQgHgDgQgNIgNgNIAGgBQAGAEATAMQAcAQAOgBQASAAATgJQAWgKAEgOQAJgcgFggQgFglgSgSQgbgcgygUQgsgRgtgGQghgFg1AJIhVAUQgUAEgdAKQgXAIgbALIg1AXQgfAPgUAMQgXAOg+AqQg3AogeAQQgEgBADgJQAEgNAEgFQANgNAVgQIAmgYQAZgPAegRQAggSAagNQAbgNAmgPIBCgaQASgHAXgFIAngLIAqgHIAqgFQAXgBAUAAQAYABASACQAVAEAVAHQAYAHAQAIQAQAIARAOQASAOAMANQAIALAJAQQAHAOAFAPQADALACAMQABAPgCALQgBALgFAMQgFAMgGAJQgGAIgKAKQgJAIgJAHQgLAHgSAJIgdAOIgGACIgGACIgFABIgEACg");
	shape_26.setTransform(-7.4,-33.6);

	shape_27 = this.shape_27 = new Shape();
	shape_27.graphics.f("#4C6F74").s().p("AmDCqQADgNAFgFQALgNAVgSIAkgbQAWgSAdgUIA1gmIA7gkIA8gmIAkgVIAkgVIAkgTIAmgRIAmgQQAXgKAQgEQAWgGAUgDQAZgFASAAQASgBAWADQAWACAQAFQANAFAQAJQAOAJALAJQAJAHAIAMQAJALAEAKQAEAJACANQABANgBAKQAAALgGANIgKAWQgFAJgLARIgSAZIgDAFIgEAEIgCADIgDADIgBAAIgBgCIABgCIABgCIADgFIADgGIAEgHIADgGIADgFIABgGIAAABIgBAAIgFAFIgEAFIgLAIIgLAIIgKAFIgKAGIgFABIgDAAIAAgBIAognIAoglIgYAOQgbAMgNADQgIACgRABIgRgBIAEgFQAHAAAVgEQAfgDAKgIQATgNALgQQARgUgEgOQgGgbgXgaQgYgbgXgHQgkgKg4AHQgoAFgyAOQggAIgwAaIhLArQgSAKgbAQIgsAcIgwAeQgcATgTAPQgPALhBA2QgzAqgdATQgEAAABgJg");
	shape_27.setTransform(-6.6,-43.5);

	shape_28 = this.shape_28 = new Shape();
	shape_28.graphics.f("#4C6F74").s().p("AlrEBQACgNAEgFQAKgOAUgTIAigdIAvgsIAvgrIAzgvIA0gvIAdgcIAegdIAdgdIAcgeIAegcQARgSAMgKQAUgSANgJQAUgQAOgJQARgKATgIQAUgKAQgEQAOgEARgBQASgBANACQALABANAFQANAFAJAGQAIAGAIAKQAIAKAEAJQAFAKACAPQADAMABAOQAAALgCAUQAAARgCAOIgBAEIgBAGIAAADIgBADIgBAAIgBAAIgBgCIABgNQABgDgBgEIAAgHIgBgFIAAgFIgBAAIAAABIgCAGIgBAGIgFAMIgFALIgFAJIgFAIIgEAEIgBAAIANg0IALg0IgMAZQgNAagIALQgEAFgLAKIgMAHIAAgFIASgTQASgVAEgLQAIgaACgQQADgbgLgLQgSgSgigJQgigJgZAGQgiAKguAiIhIA8QgYATgnAoIg5BAIgmAiIgmAlIgqAoIgqAoIhKBIQgvAtgdAWQgEAAACgJg");
	shape_28.setTransform(-9.2,-52.6);

	shape_29 = this.shape_29 = new Shape();
	shape_29.graphics.f("#4C6F74").s().p("Ak9FYQACgNADgGQAJgNAUgUIAfghIArgvQAbgeAOgTQATgXAYggQAWgdATgcIAWgiIAVghIATglIATglIAOglIARgkIARgnQALgYAHgOIAVghQANgUAMgMQAJgKAOgKQANgLANgGQAKgEANgEQANgCALAAQAKABAMAEQAMAEAIAGQAKAGAKAMQAKAKAIAKIAQAdIANAdIACAFIABAEIABAIIAAAAIgBAAIgEgJIgCgFIgEgHIgDgGIgDgFIgDgEIAAAAIACAHIACAHIABAMIAAAMIAAAJIgBAKIgDAFIAAAAIgQgzIgPgxIADAaQAEAdgBAMQAAAFgGALIgFALIgDgEIAFgWQAEgZgDgLQgHgagIgOQgMgYgQgDQgYgFghALQggALgSASQgXAZgZA2IgmBWIgkBOQgZA0gPAYQgKATgRAaIgfArIgiAvIglAuIhEBNQgqAvgdAbQgEAAABgJg");
	shape_29.setTransform(-14.2,-61.7);

	shape_30 = this.shape_30 = new Shape();
	shape_30.graphics.f("#4C6F74").s().p("AjtGTQABgNADgGQAJgNASgVIAdgjIAmgzQAXgfANgVQAPgaASgjQARghAOgeIAOgnIALgnIAKgnIAEgoIADgoIACgnIgBgrIAAgqIADgoQACgYADgPQADgOAHgPQAGgRAHgLQAGgJAKgJQAKgKAJgFQAJgEAMgDQAMgCAKAAQAMABAPADQAPAEALAFQALAFATAMIAcATIAEAEIAFAEIADADIACAEIAAABIgEgBIgHgGIgFgEIgHgFIgGgEIgGgDIgFgDIAAABIAAAAIAFAGIAFAEIAHALIAHAMQACADACAGIAEAKIAAAHIgBgBIAAABIgngnIgogmIAQAUQARAXAFAMQACAFgCANIgCAMIgEgDIgEgVQgHgYgHgHQgRgSgPgJQgXgOgOAFQgXAJgWAaQgVAZgHAaQgJAfADA9QAEBMgBATQgFAogHAvQgHAugJAmQgEAUgNAeIgWAxQgNAagOAaQgRAegOAVQgfArgfAoQglAvgdAfIAAAAQgDAAAAgJg");
	shape_30.setTransform(-22.5,-68);

	shape_31 = this.shape_31 = new Shape();
	shape_31.graphics.f("#4C6F74").s().p("AiPGvQABgNACgGQAHgNASgXIAbgjIAig2QAVghAJgXQANgcALglQAMgjAJggQAEgRACgYQADgTAAgWQAAgRgCgWQgBgWgCgSQgDgRgGgWQgFgUgFgSQgFgOgJgZIgRgnIgOglQgJgXgEgPQgDgOgBgQQgCgSABgNQABgLAEgNQAEgMAGgJQAFgIAKgHQAJgHAJgFQAKgFAOgEQAOgDAMgBQANgCAXACIAkACIAGACIAGACIAFABIAEABIAAACIgCABIgCAAIgEgBIgGAAIgIgBIgJgBIgIAAIgHAAIgHAAIABABIAHACIAHACIAMAHIAOAIQAFACAFAFIAJAIIACADIABADIgBABIg4gRIg4gQIAXALQAZAOAIAJQAGAFAEAPIADAOIgEgBIgOgVQgPgVgKgFQgUgIgVgCQgXgCgKALQgPARgHAiQgHAfAFAaQAEAfAcA5QAdA/AHAZQAIAkAGAzQAEArgCAqQAAAWgHAgQgGAXgIAdQgKAdgLAbQgLAggMAVQgYAqggAuQghAwgdAjIgBAAQgCAAAAgJg");
	shape_31.setTransform(-32.2,-71.2);

	shape_32 = this.shape_32 = new Shape();
	shape_32.graphics.f("#4C6F74").s().p("AgvG+QABgNACgGQAHgNARgYQAUgbADgJIAfg4QASgjAIgYQAKgcAIgnQAHgkAFghQACgRgCgYQgBgUgDgVQgCgSgGgUQgGgWgGgRQgHgQgKgUIgVgjQgIgMgSgUIgZggIgbgeQgRgTgIgMIgQgaQgIgRgEgMQgDgKgBgNQABgNACgKQABgJAGgKQAGgKAHgHQAHgJAMgIIAVgPQANgGAVgIIAhgNIAHgCIAGgBIAFgBIAFgBIABABIgCADIgFACIgHADIgIADIgJADIgIAEIgGADIgEADIAAABIABAAIAGgBIAHgBIAPABIAQACIANABIANADIAHAFIAAABIg+AHIg7AJIAaADQAbAFAMAFQAHADANAOIAKANIgFAAIgXgOQgXgQgNgBQgVgCgTAEQgYAHgFAOQgIAVAGAhQAGAdANAZQAOAZAvAwQAtAwAOAYQASAhAOAyQANAoAHAsQAEAWgDAhQgDAYgFAdQgGAegIAdQgKAigLAWQgTAoggAyQgbAvgdAnIgBAAQgCAAgBgIg");
	shape_32.setTransform(-42.1,-72.9);

	shape_33 = this.shape_33 = new Shape();
	shape_33.graphics.f("#4C6F74").s().p("AAIG8QgBgNADgGQAGgOARgYIAYglIAcg6QAQgiAHgYQAIgeAGgnQAFglABghQABgRgEgYIgJgoQgFgRgJgUQgIgWgJgQQgIgOgOgSQgNgRgNgNQgLgMgVgQIgfgZIghgXQgVgPgKgKQgMgKgKgMQgMgNgHgMQgFgJgEgMQgEgMAAgKQAAgJADgMIAIgSIAOgVIARgTIAdgXIAdgWIAFgEIAGgDIAFgEQADgCACAAIAAAEIgCADIgCABIgGAGIgHAFIgHAGIgHAHIgFAEIgFAFIACAAIAHgDIAHgDIAPgEIAQgDIANgCIALgCIAGABIADABIAAABIg4AaIg6AaIAcgDQAegCANABQAIACASAKIANAJIgGADIgagJQgegJgOACQgVADgRAJQgWALgCAPQgDAVAPAfQAMAZAUAWQARAUA6AmQA1AkATAYQAXAcAVAxQARAlANAsQAGAWAAAhQABAZgDAdQgEAfgHAdQgIAjgJAWQgTApgeA0QgaAugdAqIAAAAQgCAAgBgIg");
	shape_33.setTransform(-47.8,-72.9);

	shape_34 = this.shape_34 = new Shape();
	shape_34.graphics.f("#4C6F74").s().p("AAbG4QgBgNADgGQAFgNASgYQASgbAFgLQATgmAIgUQAQgjAGgYQAIgeAEgnQAEglABgiQAAgRgGgYQgDgUgHgTQgGgQgJgVQgJgVgKgPQgJgPgPgRQgOgQgNgMQgMgLgXgOIgggXIgigVQgXgNgLgIQgNgKgLgKQgOgNgHgKQgGgJgFgMQgFgMgBgKQgBgIADgLQABgKAFgKQAEgJAIgNQAHgKAIgJIAagaIAbgZIAFgFIAJgIQADgDACAAIABABIAAADIgDAFIgGAGIgGAGIgHAIIgGAHIgFAFIgEAFIACAAIAHgEIAGgDIAPgGIAPgFIANgEQAJgDAFAAIAGAAIADAAIgBABIABAAIg3AhIg4AfIAcgFQAdgFAOABQAJAAATAJQAJADAIAFIgGACIgdgGQgggGgOAEQgVAFgQAJQgWANgBAPQgBAWASAdQAOAXAWAVQAUASA8AiQA4AgAUAXQAYAaAYAwQATAnAPAqQAHAVABAhQAAAZgCAeQgCAegGAdQgHAjgKAYQgRAogeA0QgaAvgcAqIAAAAQgDAAAAgIg");
	shape_34.setTransform(-49.8,-72.6);

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape}]}).to({state:[{t:shape_1}]},1).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_10}]},1).to({state:[{t:shape_11}]},1).to({state:[{t:shape_12}]},1).to({state:[{t:shape_13}]},1).to({state:[{t:shape_14}]},1).to({state:[{t:shape_15}]},1).to({state:[{t:shape_16}]},1).to({state:[{t:shape_17}]},1).to({state:[{t:shape_18}]},1).to({state:[{t:shape_19}]},1).to({state:[{t:shape_20}]},1).to({state:[{t:shape_21}]},1).to({state:[{t:shape_22}]},1).to({state:[{t:shape_23}]},1).to({state:[{t:shape_24}]},1).to({state:[{t:shape_25}]},1).to({state:[{t:shape_26}]},1).to({state:[{t:shape_27}]},1).to({state:[{t:shape_28}]},1).to({state:[{t:shape_29}]},1).to({state:[{t:shape_30}]},1).to({state:[{t:shape_31}]},1).to({state:[{t:shape_32}]},1).to({state:[{t:shape_33}]},1).to({state:[{t:shape_34}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-67.4,-118.5,33.6,90.9);


(lib.bilbopupil = function(mode,startPosition,loop) {
	var shape_1;
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AgVAVQgKgIAAgNQAAgLAKgKQAJgJAMAAQANAAAKAJQAJAKAAALQAAANgJAIQgKAKgNAAQgMAAgJgKg");
	shape.setTransform(4.9,8.6,1.436,1.436);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#6666CC").s().p("AgtA/QgSgbgBgkQABgkASgZQATgaAaAAQAbAAASAaQAUAZgBAkQABAkgUAbQgSAZgbAAQgaAAgTgZg");
	shape_1.setTransform(-0.2,-0.4,1.436,1.436);

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape_1},{t:shape}]}).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-9.5,-13.1,19.1,26.3);


(lib.bilbomouthint = function(mode,startPosition,loop) {
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#1D6B74").s().p("AlwrTIEujnQKSL2lRR4IpoAHQHioHnpyHg");

	this.timeline.addTween(Tween.get(shape).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-36.9,-95.5,73.9,191);


(lib.bilbohat = function(mode,startPosition,loop) {
	var shape_1;
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	shape = this.shape = new Shape();
	shape.graphics.f("#CF5293").s().p("Aj6A+IhSiNQFcCxE8i0Ig4CKQh4AbiNAAQh7AAiOgVg");
	shape.setTransform(1.6,5.6,0.739,0.739,-15);

	this.timeline.addTween(Tween.get(shape).wait(1));

	// Layer 1
	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#E08DBF").s().p("AjYBtQAChoA9hIQBBhNBYAAQBZAABABNQA+BIACBoQhnAkhtAAQhqAAhzgkg");
	shape_1.setTransform(-1.2,-4.9,0.882,0.739,-15,0,0,-0.1,-1.7);

	this.timeline.addTween(Tween.get(shape_1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-23.7,-14.8,47.5,29.6);


(lib.bilbofoot = function(mode,startPosition,loop) {
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.rf(["#39C0CE","#2EABB8"],[0,1],-20.6,6.9,0,-20.6,6.9,30.1).s().p("AhMDXIgBAAQgiiPhrCFIDDmjIDyAOIhJGaQgwAEgwABQg1hshJBsg");
	shape.setTransform(0.5,-5.6);

	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#99DEE6").s().p("AAGAkQBJhqA4BqIhBABIhAgBgAiGAaQBriDAhCNQhGgChGgIg");
	shape_1.setTransform(-8,12.3);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.rf(["#39C0CE","#2EABB8"],[0,1],-26.6,14.3,0,-26.6,14.3,34.6).s().p("AhED+IgDgCQAsjBilCUIgBAAQgFg1C2mQIDSgKIgpH8QgwADgwABQg3hrhGBpg");
	shape_2.setTransform(-0.2,-9.7);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#99DEE6").s().p("AAAA1QBGhmA3BpIgdAAQguAAgygDgAh8AHQCjiSgqC/g");
	shape_3.setTransform(-7,10.3);

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape_1},{t:shape}]}).to({state:[{t:shape_3},{t:shape_2}]},1).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-21.5,-27.2,44,43.2);


(lib.bilboeyeball = function(mode,startPosition,loop) {
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FFFFFF").s().p("AhWBwQg3gWgNgxQgNgvAkgvQAlgvBAgRQA+gRA3AWQA3AXANAxQANAvgkAuQglAwhAARQgcAHgYAAQgiAAgfgNg");
	shape.setTransform(0,0,1.152,1.086,107.3);

	this.timeline.addTween(Tween.get(shape).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-13.4,-18.4,26.9,36.8);


(lib.bilboear = function(mode,startPosition,loop) {
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.rf(["#2EABB8","#55C8D5"],[0.165,1],-48.7,13,0,-48.7,13,142.4).s().p("AgNKEQhYgChSghQhSghhCg6QhIg/gshTIgSggQgTgegGglQgRhbAChdQADheAjhXQAlhcA3hMQA4hMA7g3QA6g3BGgwQBFgwBKglQB5g5BygJQBKADAPBHQAHAjgGAiQgOBRgpBFQg2BchDBPQhdBuhuBZQAhgTA3gdQA6gdBvgbQBwgcBNAZQBNAYAWBDQAVBEhhBbQhhBbiNA0QiEAwiLAFIgHAAQAnAGAoANQBgAgAiBdQAPAogSAkQgYArgsARQgWAJgWAAIgRgCg");
	shape.setTransform(0,0,1.436,1.436);

	this.timeline.addTween(Tween.get(shape).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-72.7,-92.8,145.5,185.6);


(lib.bilbobrow = function(mode,startPosition,loop) {
	var shape;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#1D6B74").s().p("AAjALQgLgUgeAAQgLAAgVAIIgbAKQgBAEAAgHQAAgMAVgMQAUgMAZgBQBDgEAAA4QAAAEgDADQgDAFgFAAQgJAAgMgWg");
	shape.setTransform(0,0,1.436,1.436);

	this.timeline.addTween(Tween.get(shape).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-9.7,-4.7,19.5,9.5);


(lib.shadow = function(mode,startPosition,loop) {
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	instance = this.instance = new lib.shadow2("synched",0);

	this.timeline.addTween(Tween.get(instance).to({scaleX:1.06,scaleY:1.03},4,Ease.get(1)).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},5).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},4).to({scaleX:1,scaleY:1},4).to({scaleX:1.06,scaleY:1.03},5).to({scaleX:1,scaleY:1},4).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-191.9,-19.7,383.9,39.6);


(lib.bilbofootwalkcycle = function(mode,startPosition,loop) {
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// bilbo-foot
	instance = this.instance = new lib.bilbofoot("single",0);
	instance.setTransform(-25.2,-6.3,1.436,1.436,0,0,0,3.5,-8.5);

	this.timeline.addTween(Tween.get(instance).wait(1).to({scaleY:1.46,skewX:-9.6,x:-22.1,y:-5.3},0).wait(1).to({scaleX:1.42,scaleY:1.49,skewX:-15,skewY:-1.6,x:-15.2,y:-5.8},0).wait(1).to({x:-4.9},0).wait(1).to({x:3.8},0).wait(1).to({regX:3.4,regY:-8.4,scaleX:1.4,scaleY:1.59,skewX:-25,skewY:-3.3,x:14.1,y:-5.7},0).wait(1).to({x:20.7},0).wait(1).to({regY:-8.5,scaleX:1.44,scaleY:1.45,skewX:-27.6,skewY:-20.5,x:28.4,y:-6.6,startPosition:1},0).wait(1).to({regX:3.3,scaleX:1.44,scaleY:1.45,skewX:-33.1,skewY:-26,x:33.9,y:-8.6},0).wait(1).to({regX:3.4,scaleX:1.44,scaleY:1.45,skewX:-57.6,skewY:-50.5,x:27.1,y:-12.1},0).wait(1).to({x:15.8,y:-13.3},0).wait(1).to({regX:3.2,scaleX:1.42,scaleY:1.46,rotation:-68.6,skewX:0,skewY:0,x:-0.1,y:-16.4},0).wait(1).to({regY:-8.4,scaleX:1.41,scaleY:1.45,rotation:-53.1,x:-16.1,y:-23.1},0).wait(1).to({scaleX:1.41,scaleY:1.45,rotation:-31,x:-18.7,y:-21.9},0).wait(1).to({regY:-8.6,scaleX:1.41,scaleY:1.58,rotation:-16.2,x:-27.1,y:-26.6,startPosition:0},0).wait(1).to({rotation:-1.2,x:-29.8},0).wait(1).to({scaleX:1.41,scaleY:1.58,rotation:15.8,x:-27.5},0).wait(1).to({regX:3.5,regY:-8.5,scaleX:1.44,scaleY:1.44,rotation:5.8,x:-25.2,y:-24.2},0).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-61.1,-33.2,63.1,62.1);


(lib.bilboeyebuild = function(mode,startPosition,loop) {
	var shape;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	instance = this.instance = new lib.bilbopupil("synched",0);
	instance.setTransform(-2.8,-2.8);

	instance_1 = this.instance_1 = new lib.bilboeyeball("synched",0);

	this.timeline.addTween(Tween.get({}).to({state:[{t:instance_1},{t:instance}]}).wait(1));

	// Layer 2
	shape = this.shape = new Shape();
	shape.graphics.f("#258B96").s().p("AhWBwQg3gWgNgxQgNgvAkgvQAlgvBAgRQA+gRA3AWQA3AXANAxQANAvgkAuQglAwhAARQgcAHgYAAQgiAAgfgNg");
	shape.setTransform(1.1,1.4,1.396,1.316,107.3,0,0,-0.1,0.1);

	this.timeline.addTween(Tween.get(shape).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-15,-20.7,32.5,44.6);


(lib.bilbobody = function(mode,startPosition,loop) {
	var instance_2;
	var shape_36;
	var shape_35;
	var shape_34;
	var shape_33;
	var shape_32;
	var shape_31;
	var shape_30;
	var shape_29;
	var shape_28;
	var shape_27;
	var shape_26;
	var shape_25;
	var shape_24;
	var shape_23;
	var shape_22;
	var shape_21;
	var shape_20;
	var shape_19;
	var shape_18;
	var shape_17;
	var shape_16;
	var shape_15;
	var shape_14;
	var shape_13;
	var shape_12;
	var shape_11;
	var shape_10;
	var shape_9;
	var shape_8;
	var shape_7;
	var shape_6;
	var shape_5;
	var shape_4;
	var shape_3;
	var shape_2;
	var shape_1;
	var shape;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	instance = this.instance = new lib.bilboeyebuild("synched",0);
	instance.setTransform(-54.4,-60);

	this.timeline.addTween(Tween.get(instance).wait(1).to({regX:1.2,regY:1.6,x:-53.2,y:-58.5},0).wait(1).to({y:-58.7},0).wait(1).to({y:-59},0).wait(1).to({y:-59.5},0).wait(1).to({y:-60},0).wait(1).to({y:-60.6},0).wait(1).to({y:-61.2},0).wait(1).to({y:-61.8},0).wait(1).to({y:-62.3},0).wait(1).to({y:-62.7},0).wait(1).to({y:-63.1},0).wait(1).to({y:-63.4},0).wait(1).to({y:-63.6},0).wait(1).to({y:-63.8},0).wait(1).to({y:-63.9},0).wait(1).to({regX:0,regY:0,x:-54.4,y:-65.5},0).wait(1).to({regX:1.2,regY:1.6,x:-53.2,y:-63.8},0).wait(1).to({y:-63.7},0).wait(1).to({y:-63.6},0).wait(1).to({y:-63.4},0).wait(1).to({y:-63.1},0).wait(1).to({y:-62.8},0).wait(1).to({y:-62.4},0).wait(1).to({y:-61.9},0).wait(1).to({y:-61.3},0).wait(1).to({y:-60.8},0).wait(1).to({y:-60.2},0).wait(1).to({y:-59.7},0).wait(1).to({y:-59.3},0).wait(1).to({y:-59},0).wait(1).to({y:-58.8},0).wait(1).to({y:-58.6},0).wait(1).to({y:-58.5},0).wait(1).to({regX:0,regY:0,x:-54.4,y:-60},0).wait(1));

	// Layer 3
	instance_1 = this.instance_1 = new lib.bilbobrow("synched",0);
	instance_1.setTransform(-51.7,-91.5);

	this.timeline.addTween(Tween.get(instance_1).wait(1).to({y:-91.6},0).wait(1).to({y:-91.8},0).wait(1).to({x:-51.6,y:-92.1},0).wait(1).to({y:-92.5},0).wait(1).to({x:-51.5,y:-93},0).wait(1).to({x:-51.3,y:-93.6},0).wait(1).to({x:-51.2,y:-94.1},0).wait(1).to({x:-51.1,y:-94.6},0).wait(1).to({x:-51,y:-95.1},0).wait(1).to({y:-95.5},0).wait(1).to({x:-50.9,y:-95.8},0).wait(1).to({x:-50.8,y:-96.1},0).wait(1).to({y:-96.3},0).wait(1).to({y:-96.4},0).wait(1).to({y:-96.5},0).wait(1).to({x:-50.7},0).wait(1).to({x:-50.8},0).wait(1).to({y:-96.4},0).wait(1).to({y:-96.3},0).wait(1).to({y:-96.1},0).wait(1).to({x:-50.9,y:-95.8},0).wait(1).to({x:-51,y:-95.5},0).wait(1).to({y:-95.2},0).wait(1).to({x:-51.1,y:-94.7},0).wait(1).to({x:-51.2,y:-94.2},0).wait(1).to({x:-51.3,y:-93.7},0).wait(1).to({x:-51.4,y:-93.2},0).wait(1).to({x:-51.5,y:-92.8},0).wait(1).to({x:-51.6,y:-92.4},0).wait(1).to({y:-92.1},0).wait(1).to({x:-51.7,y:-91.9},0).wait(1).to({y:-91.7},0).wait(1).to({y:-91.6},0).wait(1).to({y:-91.5},0).wait(1));

	// Layer 2
	shape = this.shape = new Shape();
	shape.graphics.lf(["#369AA8","#2EABB8"],[0,1],-45.7,-4.8,47.8,3.4).s().p("AgNJjQhYgZhSg2QhSg2hChLQhIhSgsheIgSgkQgTgjgGgnQgRhfAChaQADhgAjhOQAlhSA3g+QA4g+A7gnQA6gpBGgeQBFgeBKgRQB5gbByAVQBKAWAPBLQAHAkgGAhQgOBOgpA6Qg2BOhDA+QhdBWhuA+QAhgMA3gOQA6gOBvAAQBwACBNAsQBNAqAWBLQAVBJhhBDQhhBBiNAQQiEAOiLgfIgHgCQAnAQAoAYQBgA5AiBmQAPAsgSAeQgYAlgsAGIgPABQgYAAgWgKg");
	shape.setTransform(36.2,-61.2,1.436,1.436,0,0,0,-50.7,-4.3);

	this.timeline.addTween(Tween.get(shape).wait(35));

	// Layer 10
	shape_1 = this.shape_1 = new Shape();
	shape_1.graphics.f("#2EABB8").s().p("AE/YTQhDgBhRgEQhSgEhDgGQgxgFg+gIQg+gJgygKQg5gLhHgRQhFgRg5gQQg1gPhDgXQhAgVg2gVQgygTg7gaQg8gZgwgXQgjgRgrgYQgpgXgigVQglgXgrgdQgrgegigaQgggZgngiQgmgggfgdQgbgageggQgfgggXgbQgYgcgbgkQgbgjgUgeIgog+QgXglgLgbQgMgbgFgUQgIgdADgUQACgNAPgOQARgPAKAGQAeASArA2QAzA/ATAPQCOB7AkAdQBvBbBOAvQCCBOBaArQCJBCBiAQQBSANBpgVQBpgUBFgtQBDgqA/hYQA7hUAZhRQAchZAEiKQAChogLh/QgJhhgdh6QgchygkhhQgYg+gkg7QgqhDgrgkQgbgXgugIQgwgIgeAQQgkATgpA7Ig/BfQgQAVhMB3Qg7BagoAqQgqArg6AoQg9Arg1AUQgwAThEAIQhAAHg3gFQg0gFhTgcIiFgtIhIglIgtgaIgsgbIgqgeIgpgeQghgdgdgbQgkgigXgaQgWgYgdgoIgxhDIgxhIIgvhKIg2hYQggg1gTgkQgVgngYgyQgYgygSgpQgPglgNglQgQgrgIggQgIgfgFghQgGglgBgcQAAgcAFghQAFgiAIgaQAIgZAPgdQAPgdAPgWQARgYAYgZQAYgZAWgSQAUgPA1geQA1geAUgPQAKgIAJgPQAJgNAEgNIgDgGIgHgFIgCgFIgCgGIABgEIAEgJIADgEIAFgEIAMgHIAUgGIANgCIAJAAIAKACIADAEIADAEIABALIgDAMIgHAQIgCAGIABAUIAGATIAKAOIAWAXIARAMIAZAPIAKAIIAIAKIADAJIgBAKIgHAFIgSAEIgIABIgIgBIgfgIIgVgJIgGgEIgFgFIgDgIIgBgGIgBgSIgHgIIgNgHQgOABgUAGIgfANQgMAFgRALIgbATIggAXQgSAPgMALIgXAZQgMAPgIAMIgVAjQgMAWgEAQQgGAXgDAYQgDAdADAUQAEAZAKAcQALAdANAUQAXAiAcAfQAgAjAcAUQApAcAzAZQA2AaAsALQBOAVBPALQBcANBDgEQBRgFB2gbQBWgTBuggQBhgcC3hDQDahQA7gTIDvhOQCQgtBhgaQA/gRBrgVICsgjIBmgUQA+gNAngHQAcgEAtgFIBJgIIBRgIIBRgHIBQgGIBRgFIBJgCIBJgBIBGAAIBGACIBMAEIBLAGIBKAGIBJAIIBDAJIBCAJIA+AKIA+ALIAkAHIAkAIIA0APQAfAJAUAIQASAIAUAMQAVAMAOALQASAOAUAUQAUAUAOASQARAUAUAeQARAbAPAaQAQAcARAkQASAkAMAeQAOAjAQAtQAPArAMAmQAMAnANAzIAXBaIAUBiQALA2AHAsIAOBhQAHA5ADAqQADAoABA0QABAvgCArQgBA7gFBEQgEBIgGA3QgFA4gIAzQgJA+gJArQgQBGgQA5QgVBKgUAxQgTAvgcAxQgeA1gcAlQgfAmgvAsQgrApgsAhQgvAjhHArQg8AkhBAjQgvAZhDAeQg7Aag7AXQg+AZhHAZQhMAag7ARQg6AQhIARQhIAQg7AKQhFAMhZAKQhVAKhJAGQhBAFhVACQhAACg6AAIgcAAg");
	shape_1.setTransform(23.8,-15);

	shape_2 = this.shape_2 = new Shape();
	shape_2.graphics.f("#2EABB8").s().p("AEtY8QhEAAhSgEQhSgEhDgGQgxgFg/gJQg+gJgzgJQg5gMhHgRQhGgRg5gQQg2gQhDgWQhAgWg3gVQgxgTg9gaQg7gagxgYQgjgRgrgXQgpgYgigVQglgXgrgeQgsgfghgaQghgZgngiQglghgfgeQgbgZgeghQgfgggXgcQgYgcgagkQgbgkgUgfQgYgkgPgaQgXgmgLgbQgMgbgFgVQgHgdADgUQADgOAPgOQARgOAKAGQAeASAsA3QAyA/ASAQQCOB8AkAfQBvBcBOAvQCCBPBbAsQCJBDBjAQQBUANBpgUQBqgVBHgsQBDgrBAhYQA8hUAahSQAdhZAFiKQADhqgLh/QgIhhgdh6QgbhzgkhhQgYg+gkg7QgqhDgrgkQgbgXgugIQgwgIgdAPQglATgpA8IhABfQgPAVhOB3Qg7BZgpAqQgqArg7AoQg9Aqg2AVQgwAShEAIQhBAHg3gGQg0gGhVgcIiFgvIhIgmIgtgbIgrgcIgrgfQgZgSgQgPQghgbgcgdQgkgigWgbQgWgZgdgoIgvhEQgUgfgbgrIgthLIg0hYQgeg2gSglQgUgngWgyQgWgxgRgqQgPgmgMgkQgPgrgHggQgIgfgFgiQgFglAAgcQgBgcAFgjQAFgiAIgbQAIgaAPggQAOgeAPgYQAQgZAXgcQAYgcAWgVQASgRAzglQAygjATgUQAJgJAHgQQAGgOACgPIgFgGIgIgFIgDgFIgDgFIAAgFIAAgFIACgFIADgFIAJgJIAMgHIAZgKIAKgBIAKACIAEACIADAFIAEALIgBAMIgDATIgBAHIACAKIADAKIAKATIAMAOIAGAFIAUAQIATAKIAcAMIALAHIAKAJIAFAJIABAKIgHAHIgRAIIgIACIgPAAIgRgCIgQgEIgWgIIgGgFIgEgIIgCgGIgEgTIgJgHIgPgGQgNADgTAJQgNAGgRALQgMAHgPANIgaAWIgeAcQgRARgLANQgLAMgLAQQgLARgIAOIgUAmQgLAXgEARQgGAZgCAaQgDAeADAVQAEAZAKAdQALAeANAVQAWAiAbAfQAeAkAcAVQAnAdAxAZQA0AbAsANQBNAWBMANQBcAQBBgDQBRgEB1gYQBXgTBrgeQBigcC1hCQDehQA3gSQCVgxBagcQCQguBggaQA/gQBrgWICsghIBlgVQA/gNAngGQAcgEAsgFIBJgIIBRgIIBRgHIBRgGIBQgEIBJgDIBJgBIBGABIBGACIBMAEIBLAGIBKAGIBJAIIBDAJIBCAJIA+AKIA+ALIAkAHIAjAIIA0APQAgAJATAJQASAHAUAMQAVAMAPALQARAOAVAUQATAUAPASQAQAUAUAeQARAbAPAaQAQAcARAkIAeBCQAOAiAQAuQAPAqAMAmQAMAnANAzIAWBbIAVBhIARBiIAOBiQAHA5ADApQADAoABA1QABAvgBArQgCA7gEBEQgFBHgGA4QgFA4gIAyQgJA/gKArQgPBGgQA5QgVBKgUAxQgUAvgcAyQgeA1gdAlQgeAmgwAtQgrApgsAgQgvAkhIArQg8AkhBAjQgwAZhDAfQg7Aag7AXQg/AZhHAYQhNAbg7ARQg6ARhIAQQhIAQg8AKQhGAMhZALQhWAKhJAGQhBAFhWACQg5ACg0AAIgpgBg");
	shape_2.setTransform(24.6,-18.7);

	shape_3 = this.shape_3 = new Shape();
	shape_3.graphics.f("#2EABB8").s().p("AEhZyQhEgBhSgEQhTgDhBgGQgzgEg/gJQg/gJgzgJQg5gLhIgSQhGgQg5gRQg2gPhDgXQhBgVg3gVQgygTg8gbQg9gagwgXQgjgRgrgYQgqgXgigWQglgXgrgfQgrgegigbQgggZgngjQgmghgfgeQgbgageghQgeghgYgcQgXgdgaglIgvhDQgXglgPgbQgWgmgLgcQgMgcgFgVQgHgeAEgUQADgPAQgOQARgPAKAGQAeATAsA3QAyBBASAQQCNB+AkAfQBvBdBOAwQCCBPBcAtQCJBDBjAQQBUANBrgVQBrgWBHgtQBEgsBAhZQA9hVAbhSQAdhaAFiMQAEhqgKiAQgIhhgch7Qgch1gkhfQgWg+glg7QgphEgrgkQgbgXgugIQgwgIgdAQQglATgqA7IhABfQgPAUhOB4Qg8BZgqAqQgqArg7ApQg+Aqg2AUQgxAShEAIQhBAGg3gGQg1gFhUgeIiGgvIhHgnIgtgbIgsgdIgrgfQgYgTgQgPIg9g4QgjgkgWgaQgVgagcgpIguhFQgUgegZgrIgshMIgxhYQgcg1gSgkQgSgmgWgyQgUgvgQgqQgPgmgMgjQgPgqgIgfQgIgggGghQgGgmgCgbQgBgdADgkQADgkAGgcQAFgcAMgjQALgiANgbQAMgcAUgiQATghASgbQANgSAtg0QAngtAPgbQAGgLABgTQAAgPgDgQIgHgFIgKgDIgKgJIgCgFIgCgFIABgLIACgFIAIgMIAFgFIAKgJIALgHIAJgDIAKgCIAGACIAFAEIAEAFIAEAFIAEANIAGAbIAFAKIAHAKIARARIARALIAiAOIAWAGIAfAEIANAEIAMAGIAIAIIAFAKIgEAJIgHAIIgHAFIgHAFIgHADIgYAFIgiAAIgIgCIgHgDIgLgOIgLgTIgLgFIgRgCQgMAGgQAOIgZAYQgJAKgMASIgUAcIgXAkQgOAWgIAPIgRAjQgIATgGARQgJAbgFARQgIAbgCATQgDAbAAAbQABAgAEAXQAGAaALAeQAMAeAOAWQAWAiAaAeQAeAkAbAVQAmAcAvAaQAzAbApANQBNAXBJAOQBZARA/gCQBRgCBzgYQBYgSBpgdQBigbC0hBQDghRA1gRIDuhNQCRguBfgZQA/gRBrgVICsghIBlgUIBmgTQAbgEAtgFIBJgHIBRgIIBQgHIBRgGIBRgEIBJgCIBIgBIBHABIBGACIBLAEIBMAGIBJAHIBJAIIBDAJIBCAJIA+AKIA+ALIAkAHIAjAJIA0AOQAfAKAUAIQASAIAUALQAVAMAOALQASAOAUAUQATAUAPASQAQAVAUAdQARAbAPAaQAQAcARAkQARAkANAeQAOAiAQAuIAaBRIAZBZIAWBbQAKAtAKA0QALA3AHArQAIAxAGAxQAHA5ADApQACApABAyQABAxgBArQgCA7gFBEQgEBIgGA3QgGA4gHAzQgKA+gJAsQgQBFgQA6QgVBKgVAxQgTAvgcAyQgeA2gdAkQgfAngvAtQgsApgsAhQgwAkhIArQg8AlhBAjQgwAZhDAfQg8Abg7AXQg/AZhHAZQhNAbg7ARQg7ARhIAQQhIARg8AKQhGAMhZALQhXALhKAGQhBAFhWADQhDACg8AAIgYAAg");
	shape_3.setTransform(24.9,-23.1);

	shape_4 = this.shape_4 = new Shape();
	shape_4.graphics.f("#2EABB8").s().p("ACGaTQhSgDhCgFQgzgEg/gIQg/gJgygJQg6gKhHgRQhHgQg5gRQg2gPhEgWQhAgVg3gWQgygSg9gaQg8gagwgXQgkgRgrgYQgqgYgigVQglgYgrgeQgrgfgigbQgggZgngkQgmghgfgfQgagagfghQgegigXgcQgXgegbglQgaglgUggIgnhBQgWgogLgcQgLgcgFgXQgHgfAEgVQADgPAQgPQARgRALAIQAeASArA4QAyBCASAQQCNCAAkAfQBvBfBOAwQCBBPBdAuQCJBDBkAPQBTANBrgXQBrgXBHguQBEgtBAhbQA9hWAbhVQAdhaAFiNQAEhrgKiBQgIhigch6Qgbh2gkhfQgWg/glg7QgphDgrglQgagXgugIQgwgHgeAOQglATgpA8QgiAygfAtQgPAUhPB4Qg8BZgqAqQgqArg7ApQg+Aqg2AUQgxAThEAHQhBAHg4gGQg0gGhUgdIiGgwIhHgoIgtgbQgbgRgQgMQgXgPgUgRQgYgSgQgPIg8g8QgighgWgbQgVgZgbgpIgthGQgSgegZgrIgphLIguhXIgrhXQgQgjgVgyQgSgrgRgtIgahGQgPgpgIgeQgKgggHgfQgJgmgDgbQgDgdgBglQgBgkACgfQABgdAGgnQAFgjAHghQAGgdAMgpIAVhFIAghWQAWg4AFgfQACgNgJgTQgGgMgMgQIgKgCIgLABIgOgGIgIgIIgDgEIgCgGIAAgMIAEgOIAFgMIAHgKIAIgHIAJgEIAHAAIAGABIAHADIAGAFIALAKIATAXIAVAPIAZAKIAWAGIAdACIAhgDIAfgHIAPgBIAOABIALAEIAJAJIABAKIgGATIgFAHIgFAGIgNAKIggAOIgIACIgIABIgJgBIgKgFIgGgEIgTgQIgNgBIgSADQgKAKgJATIgOAgQgFANgFAVIgIAiIgLArIgJAsQgEASgCAWIgFAoIgDAzQgBAeABATQADAeAEAdQAGAiAHAXQAJAbAOAdQAOAfAPAWQAYAjAYAdQAeAkAaAUQAkAcAtAaQAwAbAoAMQBMAZBEAOQBXATA9gCQBPgBBygXQBXgRBngdQBigaC0hBQDhhRAzgQIDuhNQCRgtBfgZQA+gRBrgUICsghIBmgUQA+gLAngHQAcgEAtgFIBIgHIBRgHIBQgHIBRgGIBRgDIBJgCIBIgCIBHACIBGADIBLAEIBMAFIBJAIIBJAIIBDAJIBCAKIA+AKIA9ALIAkAHIAkAJIAzAOQAgAJATAJQASAIAUALQAVAMAOALQASAPAUATQATAUAOASQARAVATAeQARAaAPAaQAQAcARAlQARAjAMAeQAOAjAQAtQAPArALAmQAMAmANA0QAMAvAKArIAUBiQAKA2AHAsIAOBiQAGA5ADApQADAmABA1QAAAwgBArQgCA8gFBEQgEBHgGA3QgGA4gIAzQgJA/gKAsQgQBFgQA5QgVBMgVAxQgTAugcAzQgeA1gdAmQgfAmgvAtQgsAqgsAgQgvAlhIArQg8AmhBAjQgwAahEAeQg7Abg7AYQg/AZhHAaQhNAbg7ASQg7ARhIARQhIARg8ALQhGAMhZALQhXALhJAHQhCAFhVADQhQADhHAAQhEAAhTgDg");
	shape_4.setTransform(25.3,-25.6);

	shape_5 = this.shape_5 = new Shape();
	shape_5.graphics.f("#2EABB8").s().p("ADaaiQhTgDhCgEQg0gEg8gIQg+gHgygJQg6gLhHgQQhGgQg5gQQg2gOhDgWQhAgVg3gVQgygSg8gaQg8gZgxgXQgjgRgrgYQgqgYghgVQglgXgrgfQgsgfghgbQghgagngjQgmgigfgeQgagbgfgiQgegigYgdQgXgegbgmQgagmgUggQgYgngPgcQgXgogLgdQgLgdgGgYQgHggADgVQADgQAPgQQAQgSALAHQAfATArA5QAyBDASAQQCNCBAlAfQBvBgBOAwQCABQBdAtQCJBDBjAPQBTAMBqgZQBqgYBFgwQBEguA/hdQA7hXAahVQAdhbACiOQADhrgIiCQgIhigch7Qgbh3gjhfQgXg+gkg8QgphDgqglQgbgXgugIQgwgIgdAPQglATgqA7IhABgQgQAUhPB3Qg9BagpAqQgrArg6AoQg+Arg1AUQgxAThEAHQhBAHg3gGQg0gGhUgdIiFgxIhHgnIgsgcIgrgdQgWgPgUgQQgYgUgQgPQgggegbgbQgigkgVgbQgUgZgbgpIgrhFQgRgegXgsIgnhKIgqhVIgohWQgOgggUg0IgghUIgZhEIgXhFIgUg+QgKglgGgaQgGgcgGgmIgKhDIgGhGIgEhFIgDhJIgChKIgChaQgCg5gKgfQgDgNgTgNQgKgHgVgLIgLACIgLAFIgIABIgIAAIgGgBIgGgCIgGgDIgEgEIgEgFIgCgGIgEgNIABgYIAFgIIAGgIIAGgDIAHgBIARABIAQAEIAeANIAdAEIAdgBIAXgEIAmgNIAVgMIAYgUIAbgLIANAAIANAEIAGAJIADALIACAJIgBAIIgBAIIgHAPIgFAHIgSASIgGAFIgIAEIgIADIgNgBIgIgBIgZgHIgNADIgQALQgFAMAAAVIACAiQABANAFAWIANBPIAHAtIAIApIAKApIALAzQAIAgAGATQAKAfAKAbQANAjALAXQANAaARAdQASAfAQAWQAeApATAXQAeAlAZAUQAjAdApAZQAuAcAlANQBKAaBAAQQBUAUA6AAQBOgBBxgVQBVgQBmgcQBigaC0hAQDhhRAygQIDuhMQCRgtBegZQA/gQBrgUICsggIBlgUQA+gLAogGQAbgFAtgEIBJgHIBQgHIBRgHIBQgFIBRgDIBJgCIBIgBIBHACIBGADIBLAEIBMAGIBJAIIBJAIIBCAJIBDAKIA9ALIA+ALIAkAHIAjAJIA0AOQAfAKATAIQASAIAUAMQAVAMAOALQASAOATAUQAUAUAOASQAQAVATAdQASAbAOAaQAPAcASAkIAdBDQANAiAQAtQAPArALAmQAMAnANAzIAVBbQAKAtAKA0QAKA3AHArIANBiQAHA5ACApQADAnABA0QAAAxgBArQgDA7gEBEQgFBIgGA3QgGA4gIAzQgJA/gKArQgQBGgQA5QgWBLgUAyQgTAvgcAyQgeA2gdAlQgeAmgwAuQgrApgsAhQgvAkhIAtQg7AlhBAjQgwAahDAfQg7Abg7AYQg+AahHAaQhMAbg7ASQg6ARhIASQhIARg7ALQhGANhYAMQhWALhKAHQhAAGhVADQhQAEhHAAIgXAAQg6AAhEgCg");
	shape_5.setTransform(18,-26.2);

	shape_6 = this.shape_6 = new Shape();
	shape_6.graphics.f("#2EABB8").s().p("AFFahQhSgChCgFQgzgDg9gIQg+gHgvgJQg5gKhGgQQhFgPg5gQQg1gOhDgWQhAgVg2gUQgygSg7gaQg8gZgvgXQgkgRgqgXQgqgYghgVQglgXgrgfQgsgfghgbQghgagngjQgmgigfgfQgbgbgegiQgfgigYgdQgXgegcgnQgagmgVghQgYgngQgdQgXgpgMgdQgMgegGgYQgJghADgWQACgPAOgSQAPgSALAGQAfAUArA5QAzBDASARQCOCBAkAfQBvBgBPAxQCABQBbAtQCJBDBiAOQBSAMBogZQBogZBEgwQBCgvA9heQA3hXAZhWQAbhbADiOQAChrgLiDQgIhigch7Qgbh3ghhfQgWg/gkg7QgohEgrglQgbgWgugJQgvgIgeAPQglATgqA7IhABgQgQAUhPB3Qg8BZgqAqQgqArg6AoQg+Arg1AUQgwAShEAIQhAAHg2gGQg0gGhTgeIiEgxIhGgnIgsgcQgbgRgQgMQgWgQgTgQQgYgTgPgPQgggfgagbQgigkgVgbQgTgagagoQgTgfgWgnIgmhJIgkhKIgmhVQgWgxgOgkQgMgegTg2IgdhTIgYhEIgYhEIgWg8IgVg9IgUhAIgUhAIgVhBIgWhBIgYhDQgQgpgLgZIglhPQgYgwgXgXQgKgLgXgCIgnAAIgJAGIgIAJIgPAIIgHACIgHABIgGAAIgGgBIgGgDIgFgDIgJgJIgGgKIgFgKIAAgJIADgJIAEgFIAOgIIARgFIAsgFIAPgEIAqgTIAUgNIAdgcIAOgSIAMgbIAJgMIAKgJIAMgGIAOgCIAKAFIAKAJIAFAGIAFAIIACAHIABAQIAAAJIgFAPIgGAPIgFAHIgHAFIgUAGIgcAFIgLAIIgKAPQACAMAKATIARAcIAUAcIAVAcIAYAmIAuBKIAXAjIAbAuIAbAtIAjA2IAjA2IAmA1IAoA0IAzBAQAgAoAYAUQAjAfAlAaQAtAeAjAOQBIAeA8ARQBRAXA4ABQBNABBvgUQBVgPBkgbQBigaCzg/QDihQAygQIDthLQCRgsBcgZQA/gQBtgUICsgfIBlgTIBmgRIBIgJIBJgGIBQgHIBRgGIBQgFIBRgDIBJgCIBJAAIBGACIBGADIBLAFIBMAGIBJAIIBJAIIBCAKIBCAKIA+ALIA+ALIAjAHIAkAJIAzAPQAfAKAUAIQASAIATALQAVANAOALQASAOATAUQAUAUAOASQAQAVATAeQARAaAOAaQAPAdARAkQARAkAMAeQAOAjAPAtQAPArALAmIAYBaQAMAwAJArQAKAtAKA0QAKA3AHAsIANBhQAGA5ADAqQACAmABA0QAAAxgCAsIgHB/QgFBHgGA3QgGA4gIAzQgKA/gKArQgQBGgQA5QgVBLgUAxQgTAvgcAzQgeA1gdAlQgeAngvAtQgrAqgrAgQgvAlhHAsQg7AlhAAjQgvAahDAfQg7Abg6AYQg+AahGAZQhMAcg6ASQg5ARhHARQhIASg6ALQhFANhYAMQhVALhIAHQhAAGhVAEQhOADhGABIgXAAQg6AAhDgCg");
	shape_6.setTransform(9,-26.1);

	shape_7 = this.shape_7 = new Shape();
	shape_7.graphics.f("#2EABB8").s().p("AGOZuQhRgChBgFQgygDg9gIQg9gIgxgIQg2gLhFgPQhEgQg4gQQg1gOhCgWQg/gVg1gUQgygSg6gZQg8gagvgWQgjgRgqgYQgpgXghgVQglgYgrgeQgrgfgigbQgggagngjQgmgigfgfQgbgbgfgiQgggjgXgdQgYgegcgnQgcgmgVghQgZgmgQgeQgYgpgNgdQgMgegHgYQgJghABgXQABgPANgRQAOgTALAGQAfATAsA6QAzBDASARQCNCAAlAgQBwBgBPAxQCABRBZAsQCIBDBiAPQBPAMBngZQBlgaBCgvQBBgvA5hdQA2hXAYhVQAahbACiOQAChpgMiEQgIhigch7Qgbh1gihgQgXg/ghg8QgphEgqgkQgbgXgugJQgvgIgeAPQglATgqA7IhBBfQgQAVhOB2Qg9BZgpAqQgqArg6AnQg9Aqg1AUQgwAThCAHQhBAGg1gGQgzgGhTgeIiCgxIhGgoIgrgcIgrgdQgVgQgTgQQgYgUgPgNIg5g8QghgkgUgbQgUgagYgpQgTgggVgmQgQgegUgrIgihLIgjhVIghhXQgKgbgSg5IgbhVIgYhEIgZhDIgZg8Igag6Igcg7QgRgkgNgWIghg5QgTgggRgWIgog2QgagggTgSQgpglgVgRQgogfgegLQgNgFgXAIIgkARIgGAJIgFALIgFAHIgLALIgGAEIgGADIgGACIgGABIgMgCIgPgGIgIgGIgEgHIgCgJIACgGIAKgNIANgMIAogZIAMgKIAgghIANgUIAPgjIAEgVIAAgbIACgNIAFgNIAJgKIAMgHIAMAAIANADIAJADIAIAFIAFAFIAJANIAFAOIABAPIAAAIIgCAHIgDAHIgKAJIgfAUIgHALIgDAQQAGALARALIAcAQQAJAGAVAKIAeARIAkAYIAjAaIAhAZIAgAaQARAOAWAUIAmAkIAuAuIAtAuIAuAxIAuAxIA4BCQAlAqAWAUQAoAkAgAYQAsAiAiAQQBIAhA5ATQBPAbA3ACQBMADBugSQBUgOBjgZQBigaCzg/QDihPAxgQIDuhKQCQgsBdgYQA/gPBtgUICsgeIBlgTIBmgRIBIgIIBJgGIBQgHIBRgFIBQgFIBRgDIBJgBIBJAAIBGACIBGADIBLAGIBMAGIBJAIIBJAJIBCAJIBCALIA+ALIA+ALIAjAIIAjAIIA0AQQAfAJATAJQASAIAUALQAUANAOALQASAOATAVQAUATAOATQAQAUASAeQARAbAOAaQAQAdARAkQAQAkAMAeQAOAjAPAtQAOArALAmQAMAnAMAzQAMAxAJAqIAUBiQAKA3AGArIAMBiQAHA5ACApQADApAAAyQAAAxgCArQgCA7gFBEQgFBHgHA4QgGA4gIAzQgJA+gKAsQgQBFgQA5QgWBLgUAxQgTAvgbAyQgeA1gdAlQgeAnguAsQgrAqgrAgQgvAkhGAsQg7AkhAAjQguAahDAfQg5Aag6AYQg+AZhFAaQhLAbg6ARQg5ARhGARQhGASg7AKQhEANhWALQhUAMhIAGQg/AGhUAEQhNADhGAAIgWAAQg5AAhCgCg");
	shape_7.setTransform(3.5,-22);

	shape_8 = this.shape_8 = new Shape();
	shape_8.graphics.f("#2EABB8").s().p("AGqYjQhQgDhAgFQgygEg8gHQg8gJgxgJQg3gKhDgRQhDgQg4gPQg0gPhBgVQg+gVg1gVQgxgTg6gZQg7gZgugXQgjgRgqgYQgpgXghgWQgkgWgrggQgrgeghgbQghgagngjQgmgigfgeQgbgbgfgjQggghgYgeQgYgegcgnQgcglgWghQgZgngRgdQgZgpgNgdQgNgegHgXQgKghAAgXQABgOAMgRQANgUAKAHQAfAUAsA5QA0BCASARQCNCAAmAgQBvBgBPAxQCABRBYAsQCGBDBiAPQBOANBlgYQBkgYBAgvQA+guA5hdQA1hVAXhTQAZhcABiMQAChpgMiCQgJhkgbh6Qgbh2gjhfQgWg/ghg7QgohFgrglQgagWgugJQgvgJgeAPQglATgqA7IhBBfQgQAVhPB2Qg8BbgpAoQgqApg6AoQg9Apg0AUQgwAShCAGQhAAHg1gHQgzgHhSgeIiCgyIhFgoIgrgcQgagPgPgMQgWgRgTgQQgXgTgPgQQgfgfgZgdQgggkgUgcQgUgagXgpQgTghgUglQgPgegUgsIgghMQgPgkgSgyQgRgugOgqQgIgYgTg9QgSg9gJgaQgMgigNgjIgchDIgcg6Igfg4Igig1QgUgfgQgUQgTgXgWgXQgYgZgVgRQgagWgYgQQgegVgYgKQgogRghgKQgtgNgfACQgOAAgTARIgbAdIgDAKIAAALIgGAQIgHAMIgKAKIgFADIgGACIgLACIgKAAIgJgBIgGgEIgEgHIAAgGIABgGIAGgRIAhgtIAHgOIASgpIAHgfIABgbIgDgTIgLgWIgDgNIAAgMIAFgMIAIgLIAMgFIANgCIATAAIAIADIANAHIAFAFIAFAGIAHALIACAHIABAHIgBAHIgGALIgXAdIgCALIADAPQAJAHAUADIAfADIAhAEIAhADQARAEAYAHIAoANIAlAMQAWAIAPAIQAVAJAYANIAsAZQAYAPAdAUQAdATAWASIA2ArQAeAZAWAVQARAQAuAxQApAsAWAUQA1AuAVARQAuAlAiARQBKAmA0AUQBPAeA3AEQBLAFBugRQBUgNBjgZQBhgYC0g/QDihPAxgPIDthJQCOgrBggYQA/gPBsgUICtgeIBlgSQA/gLAngFQAbgEAtgEIBJgFIBQgHIBRgFIBQgEIBRgDIBJgBIBJABIBGACIBGADIBLAGIBMAGIBJAIIBJAJIBCAKIBCALIA+AKIA9AMIAkAIIAjAIIAzAQQAgAKATAJQASAHATAMQAVAMAOAMQARAOAUAVQATATAOATQAQAVASAdQARAbAOAbQAPAcARAlQARAkAMAeQANAjAPAuQAOAqALAnQAMAnAMAzIAVBaQAJAtAKA2QAKA3AGArQAHAwAFAyQAHA5ACApQACAoAAA0QABAwgCAqQgDA7gFBEQgGBHgGA4QgGA4gIAzQgKA+gKAsQgQBFgQA5QgVBLgUAxQgTAugcAxQgeA2gcAkQgeAnguAsQgrApgrAgQguAkhHAqQg6Alg/AiQgvAZhCAeQg5Abg6AXQg9AZhFAYQhKAbg6ARQg4ARhGARQhGAQg5AKQhEAMhWALQhTALhHAGQg/AFhTADQhMADhFAAQhCAAhOgDg");
	shape_8.setTransform(1.9,-16.1);

	shape_9 = this.shape_9 = new Shape();
	shape_9.graphics.f("#2EABB8").s().p("AI+XlQhBgBhOgDQhQgEg/gFQgxgEg7gJQg9gIgvgJQg4gLhCgRQhDgQg3gQQgzgPhBgWQg/gWgzgUQgxgTg6gaQg6gZgvgXQghgRgqgYQgpgXghgWQgkgXgrgfQgrgfghgaQgggagngjQgngigegfQgcgagfgiQgfgigZgdQgYgegdgnQgbglgWghQgagmgRgdQgZgogNgeQgOgegIgWQgKghAAgWQAAgOAMgRQAMgTAKAGQAfAUAsA5QAzBCATARQCMB/AmAgQBwBgBOAxQCBBRBWAsQCHBEBgAQQBNANBkgXQBjgXBAguQA9gtA4hbQA0hUAXhTQAZhbABiMQABhngMiDQgJhjgbh3Qgbh4gihgQgWg/ghg7QgphFgqglQgagXgugIQgwgJgdAPQgmASgpA7IhBBfQgRAVhOB1Qg9BbgoApQgqArg6AlQg9Apg0ATQgwAShCAGQg/AGg1gHQgzgHhSgfIiAgyIhFgnIgrgcQgagRgPgNQgVgQgTgQQgXgUgPgPQgegggZgdQgggkgUgcQgTgagYgpIglhHQgPgegTgtIgfhMQgOgjgTg0IgehZIgbhXQgSg6gKgdQgNghgPgkQgRgngOgdQgMgZgTgeQgSgegRgXQgSgZgTgXQgWgbgTgSQgTgSgZgSQgagUgXgMQgbgPgagKQgggNgYgDQgngFgjAAQgtABgcAKQgOAFgNAVIgSAjIAAAKIACAKIAAAIIgBAIIgFANIgGAMIgEAFIgJAHIgOAGIgJACIgGgCIgGgEIgCgGIAAgGIABgRIATg1IAJgrIABgZIgBgTIgFgYIgJgQIgQgRIgGgKIgDgLIABgNIAFgLIALgJIAUgJIAKgCIAIgBIAHABIAOAFIAGADIAJAJIAEAFIADAGIABAGIgDAMIgPAgIABALIAGANQALADATgDIAegGIAhgGQAVgFAKAAQASgBAXAAIApACIAmAEQAVADAQADQAXAFAYAIQAaAIAUAIQAbALAeAOQAfAQAYANQAcARAeAVQAhAWAYATQAXATAtAsQAxAvAVARIBMBAQAwAnAiASQBPAqAwAUQBPAhA3AFQBLAGBugPQBVgMBhgYQBigYC0g+QDjhPAvgPQCVguBagaQCNgrBhgXQA+gQBtgSICtgeIBlgSQA+gLAngFQAcgEAtgDIBIgGIBRgGIBQgFIBRgEIBRgCIBIgBIBJAAIBGADIBHADIBLAGIBMAHIBJAIIBIAJIBCAKIBDALIA+ALIA9AMIAjAHIAjAJIA0AQQAfAKATAIQASAIAUAMQAUAMAOAMQASAOATAVQATAUAOASQAQAVASAeQASAbAOAaQAOAdARAkQAQAkAMAfQAOAiAPAuQAOArALAmQALAnANAzIAUBbQAJAtAKA1QAKA3AGArQAHAxAFAxQAGA5ACAqQADAoAAA0QAAAxgCApIgIB/QgGBHgGA4QgHA4gIAyQgJA/gLArQgQBGgQA4QgVBKgUAxQgTAvgcAxQgeA1gcAkQgeAmguAsQgrApgrAgQguAjhGArQg6AjhAAiQguAZhBAeQg6Aag5AXQg+AYhEAYQhKAag5ARQg5AQhFAQQhGAQg5AKQhDALhWALQhTAKhGAFQg/AFhSADQhAACg6AAIgXAAg");
	shape_9.setTransform(2,-11);

	shape_10 = this.shape_10 = new Shape();
	shape_10.graphics.f("#2EABB8").s().p("AJLW+QhBAAhOgEQhQgEg/gGQgxgEg7gJQg7gIgxgKQg3gLhCgRQhCgQg3gRQgzgPhBgWQg+gWg0gUQgwgTg6gaQg5gagvgXQgigRgpgYQgpgXghgWQgkgXgqgfQgrgfgigaQgfgagogjQgmgigfgfQgbgagggiQgfgigYgdQgYgegdgmQgcgmgWggIgrhDQgZgogOgdQgOgegHgWQgLghABgWQgBgOALgRQANgSAKAGQAeAUAsA5QA0BBASARQCMB+AmAiQBwBfBOAxQCBBSBVAsQCGBEBhAQQBNANBigWQBkgWA/gtQA9gtA3haQA0hUAWhSQAYhbACiLQABhngMiCQgJhkgbh3Qgbh4ghhfQgXg/gjg8QgmhEgqglQgagXgugJQgvgJgeAPQglASgqA7IhBBfQgRAVhPB1Qg8BagpApQgqArg5AmQg9Ang1ATQgvAShCAGQg/AFg1gHQgzgHhRgfIiAgxIhFgoIgqgdQgagRgPgNIgoggQgXgUgPgQQgegfgZgdQggglgTgbQgTgbgXgpQgSghgTgmQgPgegTgtIgehMQgOgigSg2IgehZIgdhYQgSg5gMgeQgMgggRgkQgRgngQgcQgOgYgSgdQgUgdgSgWQgSgXgVgVQgYgZgUgQQgTgQgbgPQgbgQgWgJQgbgLgbgHQghgIgXAAQgmAAgkAHQgqAHgbAOQgMAHgLAWIgNAlIABAKIADAJIABAIIAAAPIgDANIgDAGIgDAFIgEAFIgIAIIgIAFIgJADIgGgBIgGgDIgDgFIgBgGIAAgaIAKgtIACg6IgDgUIgIgXIgIgPIgFgGIgSgNIgHgJIgFgKIgBgNIAEgMIAJgJIATgNIAJgEIAIgBIAHgBIAHABIAHABIAHADIAKAGIAFAEIADAGIACAGIgBAMIgKAhIABAKIAIAMQALABASgHIAdgKIAfgLQAUgHALgDIAogGIAogEIAlgBQAWAAAPACQAXADAZAEQAaAFAVAGQAbAIAeAMQAiAMAYAMQAdAOAgATQAiAVAYARQAZATAwAqIBIA+IBPBAQAyAoAiASQBUAtArASQBQAjA3AFQBMAIBtgPQBVgLBigXQBigYCzg+QDkhPAwgOQCSgtBbgbQCPgqBggXQA+gPBtgTICtgdIBlgSIBlgQQAcgDAtgEIBJgFIBQgGIBQgFIBRgDIBRgDIBIgBIBKABIBFACIBGAEIBMAGIBMAGIBJAJIBIAJIBCAKIBDALIA9ALIA9AMIAkAHIAjAJIA0AQQAeAKAUAIQASAIATAMQAVAMAOAMQARAOAUAVQASAUAOASQARAVASAeQARAbAOAaQAPAdAQAlQARAkAMAeQANAjAPAtQAOArALAnQAMAnAMAzQALAwAJArIATBiQAKA3AGArQAHAxAFAxQAGA5ACApQACAoAAA1QAAAxgCArQgCA5gGBEQgFBHgGA3QgHA4gIAzQgKA+gKArQgQBGgQA4QgVBKgVAxQgTAvgbAxQgeA1gdAkQgdAmgvAsQgrAogrAgQgtAjhHAqQg6Akg/AiQgvAYhCAeQg5AZg5AXQg9AYhFAYQhKAZg5ARQg4AQhFAQQhGAPg5AKQhDALhWAKQhTAKhGAFQg+AFhSACIhiACIgugBg");
	shape_10.setTransform(0.9,-8);

	shape_11 = this.shape_11 = new Shape();
	shape_11.graphics.f("#2EABB8").s().p("AJgWtQhAgBhOgEQhPgEhAgGQgxgFg7gJQg7gIgwgKQg3gLhCgSQhCgQg3gRQgzgPhAgXQg+gWg0gVQgwgTg6gaQg6gagugXQgigRgpgZQgpgXghgWQgkgXgqgfIhMg6QgggbgngjQgmgigfgfQgbgagfgjQgggigYgdQgYgegdgnQgcglgVghIgshDQgYgpgOgdQgOgegHgXQgLggAAgXQAAgOALgRQAKgOALABQAeAUAsA6QAzBCATARQCLB/AmAiQBvBgBOAyQCABSBWAtQCFBFBhARQBMAOBigWQBjgWA/gsQA8gsA4haQAzhTAWhSQAYhaABiMQABhlgMiDQgJhkgah3Qgah4ghhfQgWg/gjg8QglhFgqglQgagXgugKQgvgJgeAPQglARgrA6IhCBeQgRAVhPBzQg+BZgpApQgqAqg6AmQg8Amg0ASQgwARhBAFQg/AFg0gHQgzgIhQgeIh+gzIhEgpIgqgcQgZgSgPgMQgVgQgSgRQgXgTgOgQQgegfgZgdQgfgkgTgbQgTgbgWgoQgSgggTgmQgPgdgTgtIgfhLIgihWIghhWIgfhVQgUg3gOgdQgOgfgTgjQgTgjgSgbQgPgXgVgbQgVgagUgVQgTgUgXgVQgagWgVgOQgVgOgcgOQgcgOgYgIQgdgKgbgFQgigHgYABQgnACgkAHQgsAIgbAPQgMAHgKAXIgNAlIACAKIADAKIACAQIgCAOIgFAMIgHAKIgJAIIgQAIIgHgBIgGgDIgDgFIgCgPIABgSIAKg8IAAgsIgDgUIgIgYIgJgPIgGgHIgSgNIgIgJIgEgKIgBgNIADgNIAJgJIATgNIAJgEIAIgCIAOABIAIABIAGADIALAGIAFAEIADAGIACAGIgDAUIgIAaIADALIAIAMQALABASgHIAdgLIAggMQAUgIALgCQARgEAXgEIApgFIAmgDIAmAAIAxAEQAcAEAUAEQAdAHAgAJQAiAKAZAKQAfAMAhAQQAkASAaAPQAbARAyAmQA7AtARALIBUA7QA0AlAjAQQBfAuAkAPQBSAiA4AFQBMAIBugNQBZgKBfgVQBjgWCzg7QDrhMApgMIDuhEQCPgpBfgWQA+gOBtgTICsgcIBlgRQA+gLAmgFIBIgIIBJgFIBQgGIBQgFIBQgEIBRgDIBIAAIBJAAIBGACIBGAEIBLAFIBMAHIBJAIIBJAJIBCAKIBBALIA+ALIA+ALIAjAIIAjAJIAzAPQAgAKATAIQARAIAUAMQAUANAPALQARAOATAVQATAUAOASQAQAVATAeQARAbAOAaQAPAcARAlQAQAkAMAfQANAiAPAuQAPAqALAnQALAnAMAzQAMAwAJArQAKAtAJA1IAQBiQAHAxAFAxQAHA5ACApQACAoAAA0QAAAygBArIgIB9QgGBHgGA3QgHA4gHAzQgKA+gKArQgQBGgRA5QgVBKgUAxQgTAugcAyQgdA1gdAkQgdAmgvAsQgrAogqAgQgvAjhGArQg6AjhAAiQguAZhCAeQg5AZg5AXQg9AYhFAYQhKAag6AQQg4AQhFAQQhGAQg5AJQhDAMhWAKQhTAJhGAFQg/AFhRACIhiABIgvAAg");
	shape_11.setTransform(-1.3,-6.1);

	shape_12 = this.shape_12 = new Shape();
	shape_12.graphics.f("#2EABB8").s().p("AJ9WnQhBgBhOgEQhPgEhAgGQgwgFg8gJQg6gJgxgKQg2gLhDgRQhBgRg3gRQgzgQhAgXQg+gWgzgVQgxgTg5gaQg5gbgugXQgjgSgpgYQgogYghgWQgkgYgqgfQgqgggigbQgggagngkQgmgigegfQgbgbgggjQgfgjgYgdQgYgegdgoQgcgmgVghQgZgmgSgeQgZgpgNgeQgOgegIgXQgLghAAgXQAAgPAKgRQALgOAKABQAeAUAsA6QAyBCASARQCLCCAmAiQBuBhBOAzQB/BUBWAtQCFBHBhASQBLAOBigWQBigVA+gsQA8gsA4haQAyhSAVhSQAZhaAAiLQABhjgMiFQgJhkgZh2Qgah5ghhfQgVhAgig7QgnhFgngmQgagYgugKQgvgKgeAOQgmARgrA5IhDBcQgRAVhRBxQg+BYgpAnQgrApg5AlQg9Ang0ASQgvAOhBAFQg+AEg0gJQgxgHhPgeIh9g1IhBgoIgqgdIgngdQgUgQgTgQQgVgUgPgPIg0g7QgfgkgTgaQgSgagWgoIgmhFQgNgagUgtIghhJIgkhSIglhTIgkhPQgXgygPgcQgQgcgVggQgXgggTgYQgRgVgYgYQgWgXgWgSQgWgSgZgTQgcgUgVgMQgYgNgegNQgegNgZgIQgggJgdgFQgkgHgZAAQgrAAgkAFQguAGgdANQgNAGgMAXIgQAlIABAKIADALIABARIgBAHIgCAGIgGANIgMANIgGADIgSAGIgHgCIgGgEIgDgGIgBgHIAAgJIACgSIACgJIALgkIAFg8IgDgWIgHgaIgDgIIgKgQIgSgRIgHgKIgEgMIAAgNIAEgNIAKgJIALgHIASgHIAIgBIAPADIAHACIAGADIALAJIAEAEIAEAHIACAHIgFAUIgJAbIACAMIAHANQAMACAUgFIAegJIAhgKQAWgHALgCIAqgHIArgEIAogCQAYgCAQABQAZABAaACIAzAHQAeAFAhAHQAjAIAbAIQAiAKAgAMQAmAOAbAMQAdAOA0AgIBQAvIBZAyQA4AfAjAPICJA2QBVAfA4AFQBOAHBugKQBdgJBegTQBkgUCzg1IEWhSIDtg/QCQgnBcgUQA+gOBtgSICrgbIBkgSIBkgPQAbgEAsgEIBIgGIBPgGIBPgFIBQgFIBRgDIBIgBIBJAAIBGACIBGAEIBLAFIBLAHIBJAHIBJAJIBCAKIBCAKIA9ALIA9ALIAkAIIAjAIIA0APQAfAKASAJQASAHAUAMQAUAMAPAMQARAOATAUQAUAUAOASQAPAVAUAeQAQAbAOAaQAQAcAQAlQAQAjANAfQANAiAPAuQAPArALAmIAYBaQAMAwAJArIATBhQAKA3AHAsIAMBiQAHA4ACAqQACAoABA0QAAAxgCAsQgCA4gFBFQgFBHgHA3QgGA4gHAzQgKA+gKAsQgQBFgQA5QgVBLgUAxQgSAugdAyQgdA1gcAkQgeAngvAsQgrApgqAgQguAjhHArQg5AkhBAiQgtAZhCAeQg6Aag6AXQg8AYhFAYQhLAag5ARQg5AQhFAQQhGAQg5AKQhEALhWAKQhSAKhHAFQg/AFhRACIhZABIg3gBg");
	shape_12.setTransform(-3.9,-4.9);

	shape_13 = this.shape_13 = new Shape();
	shape_13.graphics.f("#2EABB8").s().p("AKVWoQhAgBhOgEQhPgEhAgHQgwgEg7gJQg7gKgwgKQg3gLhDgSQhAgRg3gRQgzgQhAgXQg9gWg0gVQgwgUg5gbQg6gagugYQgigSgpgYQgogZghgWQgkgYgqggQgqggghgbQgggbgngkQgmgjgfgfQgbgcgfgjQgfgjgYgeQgYgfgcgoQgcgmgVgiQgZgmgSgfQgYgqgNgeQgOgegIgYQgKgigBgXQAAgPAKgTQAKgOALABQAdAUArA6QAyBEASARQCJCEAmAiQBtBkBOA0QB9BUBXAvQCEBIBhATQBLAOBigVQBhgVA9gsQA9grA2haQAyhSAVhRQAXhaABiLQAAhggMiHQgIhkgZh2QgZh5gghfQgVhAghg8QgmhGgngmQgagYgtgKQgvgLgeANQgmAQgsA4IhEBZQgSAVhSBuQhABXgqAmQgrAog5AkQg8Amg0ARQguAPhAADQg+ADgzgIQgwgIhNghIh6g1IhBgpIgngcIgngdIglggQgWgTgNgPQgcgdgYgcQgegjgSgaQgSgZgWgnIglhDQgNgXgWguIgihFIgnhNQgYgvgRgdIgphJQgZgrgUgbQgRgXgZgcQgYgbgWgVQgSgRgbgVIgwgiQgYgQgbgQQgegRgXgLQgagMgggMQgggMgagIQgkgLgcgGQgmgJgbgCQg1gEgeAAQgyABggAJQgOAFgOAVIgVAjIAAAKIACAMIgCARIgEANIgIAMIgFAEIgLAGIgGACIgKABIgKAAIgHgDIgGgGIgCgGIAAgHIADgSIAGgRIAQgjIAMg9IAAggIgGgcIgIgUIgQgVIgFgNIgDgMIACgOIAFgNIALgHIANgFIAJgDIAJgBIAIABIAOAFIAHAEIAPAQIAEAGIADAHIABAIIgDANIgQAiIABANIAGAPQAMAEAUgBIAhgEQAKgBAZgFIAigGQASgCAbgBIAtgBIApgBQAaAAAQABIA2ADIA1AGIBBAJIBAALIBEAPQApAKAbAJQAeAKA2AXIBUAjIBeAmQA7AYAjALICPAuQBZAaA4AEQBRAGBvgIQBigHBdgQQBlgSCzgvIEWhKIDtg6QCSglBZgSQA8gNBtgRICrgaIBigRIBjgQQAbgEAsgEIBGgGIBPgHIBPgGIBQgFIBQgDIBIgCIBIAAIBGACIBGADIBLAFIBLAGIBJAHIBJAJIBCAJIBCAKIA9AKIA9ALIAkAIIAjAIIAzAPQAfAJATAJQASAIAUALQAUAMAPAMQARAOATAUQATATAOASQAQAVATAeQARAbAOAZQAQAdARAkQAQAkAMAeQAOAiAPAuIAaBRQAMAnANAzQAMAwAJAqQAKAtAKA1QAKA3AHArIANBiQAGA5ADApQADAoAAA0QABAygCArQgCA7gFBCQgFBHgGA4QgGA3gHA0QgJA+gKArQgQBGgQA5QgUBLgUAxQgTAvgcAyQgdA1gcAlQgeAmguAtQgrApgrAhQguAkhHArQg6AkhAAjQguAahCAeQg6Aag6AXQg9AZhFAYQhKAbg6ARQg5AQhFAQQhGAQg6AKQhDAMhWAKQhUAKhHAFQg+AFhSACIhZABIg4gBg");
	shape_13.setTransform(-6.4,-4);

	shape_14 = this.shape_14 = new Shape();
	shape_14.graphics.f("#2EABB8").s().p("AK1WpQhAgBhPgEQhOgFhAgGQgxgFg7gJQg7gKgvgKQg3gMhDgRQhDgSg0gRQgzgQhAgYQg9gWg0gWQgwgUg5gbQg5gbgugYQgigSgpgZQgogZghgWQgkgZgpggQgrggghgcQgggbgnglQglgkgegfQgbgcgfgkQgfgkgXgeQgYgfgcgoQgbgogWgiIgqhGQgXgqgNgfQgOgfgHgYQgLgiAAgYQAAgPAJgUQAKgPAKABQAeAVAqA7QAwBEASASQCJCGAkAjQBsBlBOA1QB8BWBXAwQCEBJBhAUQBKAPBhgUQBigUA8gsQA9grA1hZQAyhSAVhRQAXhZAAiLQAAhegLiIQgJhlgYh2QgYh5gfheQgVhBggg8QglhGgpgnQgZgYgrgLQgvgMgfAMQglAQgtA2IhFBXQgTAVhTBrQhBBUgrAmQgrAng5AiQg9AlgyAQQguAOhAACQg9ACgygJQgwgJhLghIh3g2Ig+goIgngcIgmgdIgkgfQgUgTgOgPQgagcgYgcQgdgigSgZQgQgXgXgnIglhAIgjhCIgjhCIgrhGQgZgqgUgcQgYgigWgdQgdglgWgXQgTgTgdgXQgZgVgagRQgTgNgfgRIgzgaIg3gaIg4gXIg8gXIg9gVIhCgUQgogLgbgFIhVgQQg0gIghAEQgOACgSARIgaAfIgCAKIABAMIgFARIgDAGIgEAGIgEAFIgFAEIgGADIgGACIgNACIgLgCIgLgDIgGgFIgFgIIgBgGIABgHIAGgRIAJgQIAWgdIASgrIAGgbIABgqIgFggIgMgbIgDgOIgBgOIAEgOIAIgMIALgEIAWgDIAJACIAHADIANAIIAGAGIAFAGIALAVIABAIIAAAIIgJAVIgQAYIgCAOIAFARQALAGAUADIAiACQALABAYAAIAkgBIAtACIAuAEIArACIArADIA2AFIB4ALIBCAHIBGAGQArAFAaAFQAgAFA3AOIBXAVIBiAXIBiAWICUAjQBeAVA4ADQBVAEBvgGQBpgGBbgNQBngQCygoIEXhBIDrg1QCXgiBUgQQA7gMBtgQICpgZIBigSIBhgQIBGgIIBGgHIBOgHIBOgHIBQgFIBPgEIBIgCIBIgBIBGACIBGACIBLAFIBLAGIBIAGIBJAJIBCAIIBCAKIA9AKIA+ALIAjAHIAjAIIAzAOQAfAKAUAIQARAIAUALQAUAMAPALQARAOAUAUQATATAOASQAQAVATAdQARAbAOAaQAQAcARAkQARAkAMAeQAOAiAPAtQAPArALAmQAMAnANAzQANAwAJAqIAUBiIASBiIANBhQAHA5ADAqQADAoABA0QAAAxgBArQgCA7gEBDQgFBHgFA4IgNBrQgJA+gKAsQgPBGgQA5QgUBLgUAxQgTAvgbAzQgeA1gcAlQgeAnguAtQgrAqgqAhQgvAkhHAsQg6AlhAAjQgvAahCAeQg6Abg6AYQg9AZhGAYQhKAbg6ARQg5ARhGAQQhHARg6AKQhEALhWALQhTAKhIAFQg+AFhTACIhYABIg5gBg");
	shape_14.setTransform(-9.7,-3.1);

	shape_15 = this.shape_15 = new Shape();
	shape_15.graphics.f("#2EABB8").s().p("ALFWpQhAgChPgEQhPgFhAgHQgxgFg7gKQg7gJgwgLQg2gMhDgSQhDgSg0gRQgzgRhAgYQg+gXgzgWQgvgUg6gcQg5gbgtgZQgjgSgogZQgpgZgggXQgkgZgpghQgqghghgcQgggcgmglQgmgkgeggQgagcgfgkQgeglgYgeQgYgggbgpQgagngWgjQgXgngSggQgXgrgNgfQgNgfgHgZQgKgjgBgYQAAgPAKgUQAJgQALABQAdAVAoA8QAvBFASASQCICJAjAiQBrBnBOA3QB6BXBXAyQCEBLBhAVQBKAQBhgUQBfgTA+grQA9grA2hYQAxhRAVhRQAXhYAAiKQAAhcgLiKQgIhlgYh1QgXh6geheQgVhAgeg8QgmhHgognQgZgZgqgMQgugNgfAMQgmAOgtA1QgmAtghAoQgTAUhVBpQhCBSgrAkQgsAmg5AhQg9AjgyAPQguAOg+ABQg8ABgygLQgvgJhJgiIh0g3Ig9goIgmgcIgkgcIgjgfQgUgTgNgOQgagbgXgcQgcghgSgZQgPgWgXgmIgkg+Igkg+QgXgpgOgUQgWgigXgfQgcgkgVgZQgYgbgcgbQgfgdgagTQgUgQgggRQgZgOgfgOQgTgJgjgLIg3gTIg6gTIg6gUIg+gVIg9gVIhBgXIhCgXIhSgcQg0gSghgCQgOAAgTAMQgLAGgVARIgCAKIgBAMIgEAIIgEAHIgDAGIgGAEIgFAEIgFADIgHABIgNgBIgRgGIgKgGIgGgHIgEgJIABgHIACgGIAJgPIAlgjIAJgMIAQgaIALgZIAIgpIABgXIgBgLIgHgeIAAgPIACgOIAHgNIAJgKIALgCIANABIAIACIAHAEIAGAEIAGAGIAKANIAIAXIABAIIABAJIgCAIIgHAMIgYAcIgDANIACASQAJAJATAHIAhAKQAMADAWADIAjAFIAsAJIAsAIIAqAGIArAGIA1AGQAhAEAVABIBCAEIBCABQATAAAzgBQAxgCAWABIBaAEIBZAGIBlAHIBlAJQAaACB/AUQBlAOA2ACQBcADBtgEQBwgFBYgLQBpgNCygiIEZg3QA6gLCuglQCdggBOgOQA4gKBvgQICngYIBhgSQBBgMAfgEIBFgJIBFgHIBNgIIBOgHIBQgGIBOgFIBIgCIBIgBIBFABIBGACIBLAEIBLAFIBJAHIBIAHIBCAJIBCAJIA9AJIA9ALIAkAHQAVAEAOAEIAzAOQAfAJATAIQATAHATALQAUAMAPALQARAOAUAUQATATAOASQARAUASAdQARAbAPAaQAPAcASAkQARAjAMAeQAOAiAQAtIAbBRIAZBZIAWBbQALAtAKA0QALA3AHArQAIAxAGAxQAIA4ADAqQACAoABA0QACAxgCAsQgBA7gEBCQgFBHgEA4QgGA4gHAzQgJA/gKArQgOBHgQA5QgUBLgUAyQgSAvgcAzQgdA2gdAlQgdAnguAuQgsAqgqAhQgvAkhHAtQg7AlhAAkQgvAahCAfQg7Abg6AYQg9AZhHAZQhLAbg6ASQg5ARhHAQQhHARg6AKQhFALhWALQhUAKhIAFQg/AFhTABIhZABIg4AAg");
	shape_15.setTransform(-11.7,-2.3);

	shape_16 = this.shape_16 = new Shape();
	shape_16.graphics.f("#2EABB8").s().p("ALBWnQhBgChPgFQhPgGhAgHQgwgFg8gKQg6gKgxgLQg3gMhCgTQhDgTg0gSQgzgQg/gZQg+gYg0gWQgvgVg5gcQg5gcgugZQghgTgpgZQgpgagfgXQglgZgpghQgqgighgcQgfgdgmglQglglgeggQgagdgegkQgfglgWgfQgYgggbgpQgagogUgjQgXgngSghQgXgrgLgfQgNgfgIgaQgJgigBgZQAAgPAKgUQAJgQAKABQAeAVAnA8QAuBGAQASICqCuQBqBpBMA3QB5BYBYA0QCDBNBhAWQBKARBhgSQBhgSA8grQA9gpA2hYQAxhQAVhQQAXhXAAiKQAAhYgLiMQgHhlgWh1QgXh5gdheQgVhBgeg8QgkhHgogoQgYgZgrgNQgtgNggALQglANgvAzIhHBTQgUAUhWBmQhEBQgrAjQgtAlg4AfQg8AigzAOQgtANg/gBQg6AAgygLQgugKhHgiIhyg4Ig7gpIgkgbIgkgdIgigeIggghQgYgagXgcQgagggTgZQgOgUgXgmIgkg7Igkg7QgXgmgPgUQgXgdgZgdQgcgggYgVQgZgWgggXQgggXgcgPQgWgLgkgMIg7gSIg6gNIg5gLIg9gNQgkgJgXgHIg9gSQgigLgbgKIg+gaIg+gbIhMgoQgygZgdgHQgOgEgUAIQgNAEgTAKIgFAJIgCALIgFAHIgEAHIgKAHIgGACIgGABIgGgBIgHgBIgGgDIgQgKIgIgJIgFgJIgCgJIABgHIADgFIALgMIAGgFIAcgOIAHgFIAUgTIARgXIAKgUIAJgcIAGgiIAAgfIACgPIAGgNIAHgLIALgIIAKABIARAIIAHAFIAIAMIADAIIAEAQIADAYIgBAJIgDAIIgNAPIgVARIgFANIAAASQAHAKARALQAKAGATAKQALAGAUAGIAhAKIApAOQAaAIAPAEIAoAJIAoAIIA0AHQAfAEATABQAdABAlAAQAjgBAegDQAYgCAvgHIBHgKIBbgKIBcgJIBmgIQBBgFAnABQAuAABvAJQBuAJAwAAQBwABBfgCQB5gEBUgIQBsgLCvgcIEagvQBIgMCggeQCkgfBFgLQA2gJBxgQQB5gQAtgIIBggRQBCgNAcgEIBEgJIBFgIIBNgIIBNgIIBOgHIBPgFIBIgDIBIgBIBGAAIBFACIBLAEIBKAEIBJAGIBIAIIBCAIIBCAJIA+AJIA9AKIAjAGIAjAIIAzAOQAfAIAUAIQASAIATALQAVALAOALQASAOAUAUQASATAPARQAQAVAUAdQAQAaAPAZQAQAcASAkQARAjAMAeQAPAiAPAtIAbBRQAMAmAOAzQANAwAKAqIAVBhQAMA3AGArQAJAxAHAxQAHA5ADApQADAoACA0QABAygBArQgBA7gEBCQgEBHgFA4QgFA4gHAzQgJA/gIAsQgPBGgQA6QgUBLgUAyQgSAwgbAyQgdA3gdAlQgeAogvAtQgqArgsAhQguAlhIAtQg7AmhAAkQgwAahCAfQg7Acg6AYQg/AZhGAZQhMAcg7ARQg6ARhGARQhIAQg7AKQhEAMhYAKQhUAKhIAFQg/AEhUACIhLAAIhHAAg");
	shape_16.setTransform(-11.9,-1.6);

	shape_17 = this.shape_17 = new Shape();
	shape_17.graphics.f("#2EABB8").s().p("AKwWjQhAgChQgGQhPgFhAgIQgxgGg7gKQg7gLgwgLQg3gNhDgTQhAgTg3gTQgzgRg/gZQg9gYg0gXQgvgVg5gdQg5gdgugZQghgTgpgbQgogZgggYQgjgagqghQgqgigggdQgfgcgmgmQglglgeghQgZgdgeglQgeglgXgfQgXgggagpQgagpgUgjQgXgngRghQgWgrgMgfQgMgfgHgaQgJgjgBgYQAAgQAJgUQAJgPALABQAcAVAnA8QAsBGARASQCECNAkAkQBoBqBMA4QB4BaBYA1QCDBOBhAYQBJASBhgRQBhgRA9gpQA8goA2hXQAyhPAVhPQAXhWAAiJQABhWgLiNQgHhlgWh0QgWh6gchdQgUhBgeg9QgkhHgngoQgYgZgqgOQgugOggALQglAMgvAyIhJBRQgTAThYBkQhFBOgrAiQgtAkg4AeQg9AhgyANQgtALg+gBQg7gBgwgMQgtgLhHgjIhvg5Ig6gpIgjgcIgjgcIghgfQgSgSgNgOQgXgZgXgcQgZgfgSgZQgOgTgXgmIgjg5Igkg5QgXgjgQgTQgXgbgbgZQgegdgYgSQgagSgigSQgigSgegLQgXgJgmgGIg+gKQgTgDgogCIg8gFIg9gJQgkgFgYgGQgcgHgggJQghgLgZgKQgagKghgQQgfgPgagOQgPgJg2gmQgtgfgbgKQgMgFgTACQgPACgSAGIgFAHIgEALIgJAKIgFADIgLADIgGgBIgMgEIgLgJIgIgJIgHgKIgDgKIgBgJIACgGIAEgFIAFgFIANgGIAjgLIAUgOIATgTIAMgSIAPgjIAGgWIAFgeIAEgOIAHgNIAJgJIAKgFIAJACIAJAGIAFAFIAFAGIAGAOIADAQIAAAYIgDAQIgEAIIgOANIgUANIgGALIgDARQAGAMAOANIAZAUQAKAHASAJIAeANIAlARIAmAPQAQAGAUAFQAUAFARADIAxAIQAdAEATAAQAcAAAkgDQAigCAdgFQAagEAtgMIBGgSIBcgWQA6gOAjgHIBngWQBBgNAogCQA3gEBqACQCDAEAegBIDSgCQCDgCBQgHQBwgJCsgXQBcgMC/gbQBNgLCagbIDognQAxgIB1gPQBzgPAygIQAegFBAgNIBegRQAagFAqgFIBEgIIBMgJIBNgIIBOgHIBOgGIBIgDIBIgCIBFAAIBFABIBLADIBLAFIBIAGIBJAGIBBAIIBCAJIA9AIIA+AKIAjAGIAjAIIA0ANQAfAJATAIQASAHATALQAVALAPALQARAOAUATQATATAPARQAQAVATAcQASAbAOAZQAQAcASAjQARAkANAdQAOAiARAtQAPArAMAlQAMAnAOAzIAYBaIAVBhQAMA2AHArIAPBiQAIA5AEApQADAoACA0IAABdQgBA7gDBCQgEBIgFA3QgFA4gGA0QgIA/gKArQgOBHgQA6QgTBLgUAyQgSAwgcAzQgdA2gcAmQgeAngvAuQgsArgqAhQgwAmhHAtQg8AmhAAkQgwAahDAgQg8Abg6AYQg/AahGAZQhNAcg7ARQg6ARhHAQQhIARg7AKQhFALhYAKQhVAKhJAFQg/AEhUABIgzABIhggCg");
	shape_17.setTransform(-10.8,-1.2);

	shape_18 = this.shape_18 = new Shape();
	shape_18.graphics.f("#2EABB8").s().p("AKeWgQhAgDhQgGQhPgGhBgIQgwgGg8gLQg7gLgwgMQg3gNhDgUQhAgTg2gTQgzgSg/gZQg+gZgzgXQgvgWg5gdQg4gdgugaQgigTgogbQgogagggYQgjgagpgiQgqgigggdQgfgdgmgmQglglgdghQgagdgdglQgeglgWggQgXgggagqQgagogUgjQgWgngRghQgVgrgMgfQgMgfgHgbQgKgiAAgYQAAgQAJgUQAJgQAKACQAcAVAmA9QAsBGARASQCCCNAjAlQBoBrBLA5QB3BaBZA2QCCBQBhAZQBJATBggPQBigQA8goQA9gnA2hWQAxhOAWhOQAXhWAAiIQABhUgLiOQgHhkgVh0QgWh6gchdQgThBgeg9QgjhHgmgoQgXgagsgOQgtgOggAKQglALgwAxIhJBQQgUAThYBiQhGBMgrAiQgtAjg5AdQg9AggyAMQgtALg9gDQg6gCgxgMQgsgMhFgjIhug7Ig4gpIgjgcIgigcIgggfIgfggQgWgZgWgcQgZgegSgZQgMgSgYgmIgjg4Igkg2QgXgigQgSQgXgZgbgXQgfgagZgQQgagPgkgPQgjgNgfgIQgXgGgngDIg/gDQgSgBgrABQgqABgTgBIg8gEQgkgEgYgEQgbgFgfgJQgggJgZgJQgZgKgfgPQgegPgXgPQgRgLgvgmQgqgigYgMQgLgGgSAAQgPAAgQADIgGAHIgEAJIgEAFIgGAEIgFACIgFABIgFAAIgGgBIgFgDIgLgIIgEgFIgOgWIgCgJIAAgKIADgFIAEgEIALgHIAHgCIAagDIAHgBIAVgLIASgQIANgQIARggIAIgVIAHgdIAFgNIAIgMIAJgIIAKgEIAIAEIAMANIADAGIACAHIADAPIgCAgIgCAHIgCAIIgEAHIgIAHIgaAOIgGALIgEAQQAFAMAMAOQAJAKANAMQAJAIARAKIAbAPIAiASQAUAKAPAGQAPAGATAFQATAFAQADQAZAFAUACQAcADATAAQAbgBAigFQAigFAcgGQAagHAsgPIBFgYIBcggQA7gUAhgKIBogfQBAgTAogFQA8gIBngCICjgCIDXgCQCLgBBLgFQB0gICpgTQB+gOCegUQBPgLCXgYIDnglIClgWQBvgOA2gJQAegEA/gNIBdgSIBDgKIBEgIIBMgKIBMgJIBOgHIBOgGIBIgEIBHgCIBGAAIBFABIBLADIBKAEIBJAFIBIAHIBCAHIBBAIIA+AJIA9AJIAjAGIAkAIIAzANQAfAIATAIQASAHAUALQAVALAOALQASAOAUATQATATAOARQARAUATAdQASAaAOAZQARAcARAkQASAjANAdQAOAiARAtQAPAqAMAmQANAmAOAzQANAwALAqIAWBhQALA3AIArQAIAwAHAxQAIA5AEApQAEAoABA1QACAxgBArQAAA7gDBCQgEBIgFA4QgEA4gHAzQgIA/gJAsQgPBGgPA6QgTBMgUAyQgSAwgcAzQgdA2gcAmQgeAogvAuQgsAqgrAiQgvAlhIAuQg8AmhBAkQgvAbhEAfQg8Acg6AYQg/AZhHAaQhNAbg7ARQg6ARhIARQhIAQg7AKQhGALhYAKQhVAJhJAFQhAAEhTAAIgsABQg2AAgygCg");
	shape_18.setTransform(-9.3,-0.9);

	shape_19 = this.shape_19 = new Shape();
	shape_19.graphics.f("#2EABB8").s().p("AKXWdQhAgChQgHQhPgGhBgJQgwgGg8gLQg6gLgwgMQg3gOhDgUQhAgTg2gUQgzgRg/gaQg+gZgzgYQgvgVg5geQg4gdgtgaQgigUgogbQgogagggYQgjgagpgiQgqgigggeQgfgdglgmQglglgdgiQgagdgdglQgeglgWggQgXgfgagqQgZgpgUgjQgWgngRghQgVgrgMgfQgMgfgHgaQgKgjAAgYQAAgQAJgTQAIgQAKABQAcAWAmA9QArBFARATQCBCOAkAlQBnBrBLA6QB2BaBZA3QCBBRBhAZQBJATBggOQBhgOA9gpQA8gmA2hUQAxhOAWhNQAXhWAAiIQAAhSgKiOQgHhlgVh0QgVh5gchdQgUhCgdg8QgjhHgmgpQgXgZgsgPQgtgOggAKQglALgwAxIhJBOQgUAThZBhQhGBMgsAhQgtAig4AdQg+AfgxAMQgtAKg9gDQg6gDgwgMQgsgMhEglIhtg7Ig4gpIgigcIghgdIgggeIgeggQgWgZgWgcQgYgfgSgYQgMgRgXgmIgjg4Igkg1QgWghgRgSQgWgXgcgWQgegZgagNQgagOgkgMQgjgMgfgFQgYgFgnAAIg/ABIg9AEIg9AEIg8gBQgkgBgYgDQgbgEgfgHQgggHgXgJQgagJgegOQgegOgXgOQgRgLgtglQgqgigWgMQgLgFgSgBQgPgBgPADIgGAGIgEAJIgJAIIgKADIgLgCIgFgDIgKgIIgMgQIgGgLIgCgKIAAgJIADgFIAEgEIAFgEIAGgCIANgDIAFAAIAVgCIAKgEIATgNIAPgPIALgPIARgiIALgoIAFgMIAIgMIAIgHIALgEIAHAEIALANIADAHIACAGIACAXIgCAYIgCAHIgCAHIgEAHIgIAHIgGAEIgTAKIgGAKIgEAQQAFALAMAOQAIALANAMQAJAIAQAJIAaAPIAhASQAUAKAPAFQAOAGATAEQASAFAQACQAZAEAUACQAaACATgCQAbgCAigGQAggHAbgIQAagIAsgRIBEgdIBbgmIBbgkIBnglQBAgWAogHQA+gKBlgEIClgFQAygCCmAAQCQAABJgEQB2gICngQQCIgOCUgSQBRgJCUgYIDngjIClgWQBtgOA3gJQAegEA/gNQBEgOAZgEIBDgKIBDgJIBMgKIBMgJIBOgHIBOgHIBHgEIBIgCIBFgBIBFACIBLACIBKAEIBJAFIBIAHIBCAHIBCAIIA9AIIA9AJIAkAGIAjAIIAzANQAfAIATAIQASAHAUALQAVALAOALQASANAUATQATATAPARQAQAUAUAdQASAaAOAZQAQAcASAjQASAjANAeQAOAiARAtQAQAqAMAmQAMAmAPAzIAXBaIAXBhIATBhQAJAxAHAxQAIA4AEAqQADAoACA0QACAxAAArIgEB+QgDBHgFA4QgFA4gGAzQgIA/gJAsQgOBHgPA6QgUBLgTAyQgTAwgbAzQgdA3gdAmQgeAngvAuQgrArgrAiQgwAlhHAuQg9AmhAAkQgwAbhEAfQg7Acg7AYQg/AZhHAaQhNAbg7ARQg7ARhHAQQhJARg7AJQhFAMhYAJQhWAKhJAEQhAAEhTAAIgaABQhAAAg6gDg");
	shape_19.setTransform(-8.5,-0.8);

	shape_20 = this.shape_20 = new Shape();
	shape_20.graphics.f("#2EABB8").s().p("AKhWeQhAgDhQgGQhPgHhAgIQgxgGg7gLQg7gLgwgMQg2gNhDgUQhBgUg2gTQgygShAgaQg9gZgzgXQgvgWg5gdQg4gegugaQghgTgpgbQgngagggYQgkgagogiQgqgjgggdQgggdglgmQglgmgdghQgagdgeglQgdglgWggQgXgggbgqQgZgpgUgjQgWgngRghQgWgrgMggQgMgfgHgaQgJgigBgZQAAgPAIgUQAJgPAKABQAcAWAlA9QAsBFARATQCACNAlAmQBnBsBMA5QB2BbBZA3QCCBQBhAaQBIATBggPQBigPA8goQA8gmA2hVQAxhNAVhOQAXhVABiJQgBhSgJiOQgIhlgVh0QgWh5gchdQgThCgdg8QgjhHgngpQgXgZgrgOQgugPggAKQglAMgvAxIhKBPQgTAShZBiQhHBMgrAhQgtAjg5AdQg+AfgxALQgtALg+gDQg6gDgvgNQgtgMhFglIhsg8Ig4gqIgjgcIghgdIgfgfIgeggQgWgagVgcQgZgfgRgZQgNgSgWgmIgjg5Igig2QgWgigQgRQgXgZgagWQgegZgYgPQgagOgkgNQgigMgegGQgYgEgmAAIg/ABQgSAAgqAEQgqAFgSAAIg8ABQglgBgYgCQgbgDgfgGQgigHgZgHQgagIgfgNQgfgMgZgNQgRgJgzgjQgrgegZgKQgMgFgSABQgPABgQAEIgFAHIgDAKIgFAFIgFAEIgFACIgEACIgGAAIgGAAIgFgDIgLgHIgOgPIgHgKIgCgKIgBgJIACgGIAEgEIAFgEIANgGIAggHIAUgMIASgRIAFgIIAVgqIAMg0IAEgNIAHgMIAIgJIAKgFIAJAEIAMALIAEAHIAEANIADAQIgBAYIgBAIIgCAHIgDAHIgHAIIgGAFIgUALIgFALIgDARQAGALANANQALAKAOAKQAJAIARAIIAcANIAkAQQAVAIAPAFQAQAEATAEQATAEARABIAuAEQAbABATgCQAcgDAigIQAigHAbgJQAZgIAsgSIBEgdIBaglQA6gYAhgMIBmgjQBAgVAogFQA9gJBmgCICjgBIDXABQCNABBKgEQB0gHCogSQB9gNCegUQBRgJCVgZIDngkIClgWQBtgOA3gJQAegEA/gNQBDgOAagEIBDgKIBDgJIBMgKIBMgJIBOgHIBPgGIBHgEIBHgDIBFAAIBGABIBKADIBLAEIBJAFIBIAGIBCAHIBBAIIA9AJIA+AJIAjAGIAkAHIAyANQAgAJATAHQASAIAUAKQAUAMAPALQASANATATQAUATAOARQARAUATAdIAhAzQAQAcARAjQASAjANAeQAOAiARAtQAQAqAMAmQANAmAOAzQANAvALArQALAsALA1IAUBhQAIAxAHAxQAJA4ADAqQADAoACA0IACBcQgBA8gDBCQgDBHgFA4QgEA4gHAzQgHA/gKAsQgOBHgPA6QgUBLgTAyQgSAwgcAzQgdA3gcAlQgeAogvAuQgrArgrAiQgwAlhHAtQg9AnhAAkQgwAahDAgQg8Acg6AXQg/AahIAZQhMAcg7ARQg6ARhIAQQhIARg7AJQhGAMhYAJQhVAKhJAEQhAAEhUABIgZAAQhAAAg6gCg");
	shape_20.setTransform(-9.2,-0.8);

	shape_21 = this.shape_21 = new Shape();
	shape_21.graphics.f("#2EABB8").s().p("AK1WfQhAgChQgGQhOgGhBgIQgwgGg7gLQg7gLgwgMQg3gNhDgUQhCgTg0gTQgygShAgaQg9gYgzgYQgvgVg5geQg4gdgugaQghgTgpgbQgngagggXQgkgbgpgiQgqgigggdQgfgdgmgnQglglgeghQgagdgdglQgegmgXgfQgXgggbgqQgagpgUgjIgohJQgWgrgMgfQgNgggHgaQgKgigBgZQAAgPAIgUIASgOQAbAWAnA9QAsBGARATQCBCMAmAnQBoBsBMA5QB3BaBZA3QCCBQBhAZQBIATBggPQBhgPA8gpQA8gmA1hWQAxhNAVhOQAXhWAAiIQAAhUgLiNQgIhlgVh0QgWh5gcheQgUhBgeg8QgjhHgngoQgZgagqgNQgtgOggAKQglAMgwAyIhJBQQgTAShZBjQhGBNgsAiQgtAjg5AdQg9AggyALQgtALg+gDQg6gDgxgNQgsgMhGgmIhtg9Ig4grIgjgdIghgeIgfggQgSgSgMgPIgrg3QgYghgRgZQgMgTgWgnIghg7Ighg4QgVgjgQgTQgVgagZgYQgcgbgYgQQgYgQgigOQgggPgdgHQgXgFglgBQgRgBgrAAQgUABgnAEIg7AFIg9ACQglABgYgBQgdgCgggDQgjgEgagFQgcgGgjgJQgigJgcgJQgQgGg9gaQgygXgcgFQgNgDgTAHQgOAEgRAJIgEAJIgCAKIgDAHIgFAGIgEADIgFADIgFACIgGABIgGgBIgNgEIgGgEIgKgHIgJgJIgFgJIgCgJIABgGIADgGIAEgFIAGgFIAMgIIATgJIAIgEIASgSIAPgWIALgdIAIgoIAAgqIACgPIAEgNIAHgLIAKgIIAJABIAKAFIAGAEIAGAFIAFAGIAJAVIAFAgIgBAJIgCAIIgMAPIgSARIgEAMIABARQAHALARAKQALAHASAIQALAFATAFIAgAIIAoAJQAYAGARACQAQACAWACIAmABQAdAAAVgCQAegBAUgDQAcgFAjgJQAigJAdgKQAYgIAtgTIBEgdIBagiQA3gVAjgKIBlgeQA+gQApgDQA6gFBmADIChAGIDTAGQCHAEBNgEQBvgHCrgUQBdgLC9gZQBPgLCXgaIDngmIClgXQBwgPA0gIQAegFBAgNQBDgOAagEIBDgKIBEgIIBMgKIBMgJIBOgHIBPgGIBHgEIBIgCIBFgBIBFACIBLACIBLAEIBIAGIBJAGIBBAHIBCAJIA9AIIA+AJIAjAGIAjAIIAzANQAgAIATAIQASAHAUALQAUALAPALQARAOAUATQAUATAOARQARAUATAdQASAaAOAZQAQAcASAkQASAjAMAdQAPAiARAtQAPAqAMAmQANAmAOAzIAYBaQALAtALA0QAMA3AHArQAJAwAHAxQAIA5AEApQADAoACA0QACAygBArQAAA7gDBCQgEBIgEA3QgFA5gHAzQgHA/gJAsQgPBGgPA6QgTBLgUAzQgSAvgbAzQgdA3gcAlQgeAogvAuQgrArgrAhQgvAlhHAuQg8AmhAAkQgwAbhDAfQg7Acg7AYQg+AZhHAaQhMAbg7ARQg6ARhHARQhIAQg7AKQhFALhYAKQhVAKhIAEQhAAEhTABIgsAAQg2AAgxgCg");
	shape_21.setTransform(-10.4,-0.9);

	shape_22 = this.shape_22 = new Shape();
	shape_22.graphics.f("#2EABB8").s().p("AK/WfQhBgChOgGQhPgGhAgIQgwgGg7gLQg7gLgwgLQg2gNhDgUQhCgTg0gTQgzgRg/gaQg9gZgzgXQgvgVg5gdQg4gdgugaQgigTgogbQgogagggXQgkgbgpghQgqgjgggdQgggcgmgnQglglgeghQgagdgeglQgeglgYggQgXgggbgqQgbgpgVgjQgWgmgSgiQgXgsgNgfQgNgfgIgaQgLgigBgZQgBgPAIgTIARgOQAcAWAoA+QAsBFASAUQCACKApAoQBpBrBMA6QB3BZBaA2QCCBQBiAZQBIASBggPQBggPA8gpQA7gnA1hVQAwhOAVhOQAXhWgBiIQAAhVgLiMQgJhlgVh0QgXh5gdhdQgUhBgeg9QgkhGgngoQgZgZgqgNQgugOggALQglANgvAyIhJBSQgSAShZBlQhGBOgsAjQgtAjg5AeQg9AggzALQguALg+gDQg7gCgwgOQgugMhGgnIhug+Ig5gtIgigeIgigfIgfghIgegiQgVgcgVgeQgYgigQgaQgNgUgUgoIggg+Igfg7QgUgmgOgUQgUgdgWgZQgbgfgWgSQgXgTgfgRQgfgSgcgJQgVgIgjgDIg5gEQgVAAglADIg5AFIg9AEIg9ACIg/AAIhAgCIhEgFIhEgGIhVgNQg3gJgeADQgOABgSANQgLAIgQAQIgCAKIABAMIgCAIIgDAHIgHAKIgKAHIgHABIgGABIgOgCIgLgDIgLgGIgHgHIgFgIIgBgGIACgHIAHgPIAKgMIAXgXIANgZIAKgbIAEgXIAAgoIgEgYIgKgdIgCgPIABgPIAEgNIAIgKIAKgDIALABIAJABIAHADIAHAEIALALIAJAOIAJAXIACAIIgBAJIgEAMIgEAHIgPAXIgBANIAEARQALAIATAFIAhAGQANACAVAAIAjgBIAsAAIAsgCIApgEIApgFIA1gIQAggGAUgFQAcgHAlgLIBBgWIBFgbQAvgUAWgHQAygRAngMQA1gQAlgIQA9gNAngHQA9gKApAAQA2gBBoAMQB9AOAhACIDOANQCBAHBOgEQBsgGCsgYIEYgqQBNgMCYgcQCtggA7gJQAygJBzgQQB0gQAxgIQAegEBAgOIBegSIBEgJIBEgJIBMgJIBNgIIBOgIIBPgFIBHgEIBIgCIBFgBIBGACIBKADIBLAEIBJAFIBIAHIBCAHIBCAIIA9AJIA9AJIAkAHIAjAHIAzANQAfAJAUAIQASAHATALQAVALAOALQASANAUAUQATATAPARQAQAUAUAdQARAaAPAaQAQAbASAkQARAjANAeQAOAiARAtQAPAqAMAmQANAmAOAzIAYBaQALAtALA0QALA3AIArQAIAwAHAxQAIA5AEApQAEAoABA0QACAygBArQAAA7gDBCQgEBIgEA3QgFA4gHA0QgIA/gJArQgOBHgPA5QgTBMgTAyQgTAvgbAzQgdA3gcAlQgdAngvAuQgrArgqAhQgvAlhHAtQg8Amg/AkQgwAbhCAfQg8Abg5AYQg+AahHAZQhLAbg7ARQg6ARhHARQhHAQg7AKQhEALhYAKQhUAKhIAEQg/AEhTABIgsABQg1AAgxgCg");
	shape_22.setTransform(-10.4,-1.2);

	shape_23 = this.shape_23 = new Shape();
	shape_23.graphics.f("#2EABB8").s().p("AK7WdQhAgChPgGQhOgGhAgIQgwgGg7gLQg7gLgvgLQg3gNhDgUQhCgTgzgTQgzgRg/gaQg+gYgzgXQgvgWg5gdQg4gdgugaQghgTgpgaQgngaghgYQgkgagpghQgqgighgdQgfgdgngmQglglgeghQgbgdgeglQgfglgXgfQgYgggcgpQgbgpgVgjQgXgmgTgiQgXgrgOgfQgOgfgIgZQgLgigCgZQgBgNAIgTIAQgOQAcAXAoA9QAuBGASATQCACHArArQBqBqBNA5QB4BZBaA2QCCBOBiAZQBIATBggPQBggPA8goQA7gnA1hVQAwhOAUhNQAXhWgBiIQAAhXgMiKQgIhlgXh0QgXh6gdhdQgVhAgfg8QglhHgngnQgXgZgtgMQgugNgfALQgmAOguA0QgmAsgiAnQgRARhaBoQhFBQgsAjQgsAjg6AfQg+AggzAMQguALg/gDQg8gCgxgOQgugNhHgnIhwhBIg5guIgjgfQgVgTgMgNIgggiQgSgVgLgPIgrg9QgXgjgQgbQgNgWgTgpIgehBIgcg/QgTgogNgWQgTghgUgbQgZgjgUgVQgWgWgcgVQgegWgagNQgUgKghgGQgZgGgfgDQgVgCgiABIg4ADIg8AEIg9AFIhAAGIhBAHIhFAHQgrAEgaAEIhXAKQg3AHgeANQgNAFgNAUQgHALgMAYIABAKIAEALIAAARIgCAHIgCAGIgIALIgLAGIgGADIgSACIgMgBIgIgEIgHgGIgCgHIgBgHIACgRIAGgQIAOggIAEgPIADgtIAAgMIgEgVIgJgeIgLgVIgSgYIgGgNIgDgOIAAgOIAFgOIAJgGIAUgGIAJgBIAIACIAHACIAOAIIARASIAFAGIADAIIACAIIgBANIgLAkIACANIAJAQQANAEAUgCIAigGQAMgCAWgHIAigLIAtgMIAsgMIAqgMIAqgOIA1gQIA2gSIBBgXIBBgYIBGgaQAsgRAagHQArgMAvgKQA0gLAngEQA1gGAxgDQA8gCApADQAyAFBpAVQBvAXAsAFQCSAQA3AFQB6AKBPgFQBqgGCsgdIEWgwQBJgNCcgfQCngiBBgLQA1gKBxgQQB6gSAsgHQAcgFBDgNIBegSIBFgJIBEgJIBNgJIBNgIIBOgHIBPgFIBIgEIBHgCIBGAAIBFABIBLADIBLAFIBJAFIBIAHIBCAHIBCAJIA9AJIA+AJIAjAGIAjAIIAzANQAgAJATAIQASAHAUALQAUALAPAMQARANAUAUQAUATAOARQAQAUAUAdQARAbAPAZQAQAcASAjIAeBCQAOAiARAtQAPAqAMAmQANAmAOAzIAXBaIAWBhQALA3AIArQAIAwAHAxQAIA5AEApQADAoACA1QACAxgBArQgBA7gDBCQgDBIgFA3QgFA4gHA0QgIA+gJAsQgOBGgPA6QgTBLgTAyQgTAvgaAzQgdA2gcAlQgeAnguAuQgrAqgqAhQgvAlhGAtQg8Alg/AkQgvAahDAfQg6Abg6AYQg+AZhGAZQhLAbg6ARQg6ARhGAQQhHAQg6AKQhFALhWAKQhVAJhHAEQg/AFhTAAIgrAAQg1AAgxgBg");
	shape_23.setTransform(-9.2,-1.8);

	shape_24 = this.shape_24 = new Shape();
	shape_24.graphics.f("#2EABB8").s().p("AK5WaQhAgDhOgGQhPgGg/gIQgwgGg8gLQg6gLgwgLQg3gOhCgTQhCgUg0gSQgzgShAgZQg9gZgzgXQgvgVg5gdQg4gdgugaQgigTgpgbQgngZghgYQgkgagpghQgrgigggdQgggcgngmQglglgfghQgagcgfglQgfgkgYggQgYgfgcgpQgbgogWgjIgqhHQgYgrgOgeQgOgfgJgZQgLghgCgYQgBgNAHgSIAQgNQAcAXApA+QAuBEATAUQB/CFAtArQBrBqBOA4QB4BZBaA1QCEBOBiAZQBJASBfgOQBhgPA8gnQA7gnA1hUQAxhNAUhNQAXhXAAiHQAAhZgMiIQgJhkgXh1QgYh5gehdQgVhAggg8QglhGgognQgXgZgtgLQgvgMgfAMQglAOguA1IhIBVQgPARhaBrQhEBRgsAjQgtAlg7AeQg+AhgzANQgvALhAgDQg9gDgxgNQgvgOhIgoIhyhCIg6gwIgjggIghghIgggkQgSgVgLgQQgWgfgVggQgXglgPgcQgNgYgSgqIgchEIgbhCQgSgsgLgWQgUgmgRgdQgXgngTgXQgVgagagZQgdgbgZgQQgTgMgggLQgbgJgcgGQgWgEghgBIg2AAQgbABghADIg7AGIg/ALIg/AOQglAJgdAJQgoALgaALIhQAgQgxAWgaAVQgMAJgGAYIgIAoIAEAKIAGAJIADAJIACAPIAAAHIgEANIgHAKIgFAEIgFAEIgKAFIgKADIgJgBIgIgEIgEgFIgCgGIgEgSIAAgSIAEgkIgDgfIgHgeIgIgWIgPgZIgNgRIgIgHIgXgQIgJgLIgIgLIgDgOIABgOIAHgKIAKgJIAIgFIAIgEIAIgBIAPAAIAIACIAbAOIAFAHIAEAHIACANIgCAmIAGAMIAMAMQAMAAATgJIAegQQALgFAUgOIAfgUIApgWIApgWIAngVIAogUIAzgYIA0gXIBBgcIBCgaIBGgZQArgOAdgGQAqgJAygFQA1gGApAAQAxgBA2AEQA7AEAsAIQAsAIBsAhQBoAeAxAIQB0ATBPAJQB1AMBOgFQBogHCsghIETg3QBFgOCjgjQCfgkBHgNQA4gLBvgQICngaIBfgTIBggSIBFgJIBEgIIBOgJIBNgIIBPgGIBPgGIBIgDIBIgCIBFAAIBGACIBLADIBLAFIBIAFIBJAHIBCAIIBCAIIA9AJIA9AKIAkAGIAjAIIA0ANQAfAJATAIQASAHAUALQAUAMAPALQARAOAUATQAUATAOASQARAUATAdQARAbAPAZQAQAcASAkIAeBBQAOAiAQAtQAQArAMAlQAMAnAOAzQANAvAKArQALAtALA0QAMA3AHArIAPBhQAIA5AEApQADAoACA1QABAxgBArQAAA7gEBCQgDBIgFA3QgFA4gHAzQgIA/gJAsQgOBGgPA5QgUBLgTAyQgSAvgbAyQgdA2gcAlQgdAnguAtQgrAqgqAhQgvAkhGAtQg7AlhAAjQguAahDAeQg6Abg6AXQg9AZhGAZQhLAag6ARQg5ARhGAQQhHAQg6AJQhEALhXAJQhUAJhHAFQg/AEhSAAIgfAAQg9AAg2gBg");
	shape_24.setTransform(-8.7,-2.5);

	shape_25 = this.shape_25 = new Shape();
	shape_25.graphics.f("#2EABB8").s().p("AKkWXQhBgChOgHQhPgGhAgIQgwgGg7gLQg7gLgwgMQg3gNhDgUQhAgTg2gTQgzgRhAgaQg9gYg0gXQgvgWg5gdQg5gdgugaQghgSgqgbQgngaghgXQgkgagqghQgqgighgcQgggdgnglIhEhFQgagcgfglQgfgkgYgfQgYgfgdgpQgcgngVgjQgYglgTghQgYgqgOgeQgOgfgJgXQgMghgCgYQgBgMAIgRIAQgMQAcAXAqA9QAuBEAUAUQB+CCAvAtQBsBpBNA4QB6BXBaA1QCEBOBiAYQBKASBggNQBhgPA9gnQA8gmA2hUQAxhNAVhNQAYhWAAiIQAAhbgLiFQgJhkgYh1QgZh5gehdQgWhAggg8QgmhGgngmQgZgYgtgLQgvgLgfANQglAPguA2IhHBXQgPAQhaBtQhDBSgsAlQgtAlg7AfQg+Aig1AMQgvAMhAgDQg+gCgygOQgwgOhJgpIh0hDIg7gxIgjghQgVgUgNgOQgRgSgPgTQgSgWgLgQQgWgggUghQgYgmgPgdQgMgZgSgsIgbhGIgahGQgQgugLgXIgihIQgWgrgSgaQgUgdgZgcQgcgggYgSQgTgQgggOQgbgMgcgIQgVgGghgDQgZgDgeAAQgagBggADQggACgaAFQgbAEghAJQghAJgbAJQggAMgdANQgkARgXAOQgtAdgZATQgpAegUAbQgJAMAAAZIACAoIAFAJIAIAIIAFAHIADAIIAEANIAAAGIAAAHIgCAGIgCAGIgHAKIgHAIIgIAFIgHACIgIgBIgFgEIgEgFIgHgQIgFgSIgEgaIgHgZIgFgOIgTglIgMgQIgcgZIgJgFIgZgIIgLgGIgJgJIgGgNIgCgNIAEgMIAOgTIAHgGIAHgEIAOgEIAIgBIAVADIAHADIAGAEIAFAGIAGAUIAEAdIAHAKIAOAIQALgEAQgNIAYgXIAagZIAZgaIAkgdIAkgdIAkgaIAkgZIAwgcQAcgQAVgLQAggQAfgNQAmgRAbgKIBIgXQArgNAegEQArgGA1gBQA1gCArADQAvAEA7AKQA5AKAuAMQAnALBvApQBkAmAzAKQBoAWBVAKQBxAPBNgGQBngHCsgnIEQg+QBAgOCogoQCcglBLgPQA6gMBtgRICogbIBggTIBhgSIBFgJIBGgIIBOgIIBOgIIBPgGIBPgFIBIgEIBIgBIBFAAIBGACIBLADIBLAFIBJAFIBIAHIBCAIIBCAJIA+AJIA9AKIAkAGQAVAEAOAEIAzAOQAgAJATAHQASAIAUALQAUAMAPALQARANAUAUQAUATAOASQARAUATAeQARAaAPAaQAQAbASAkIAeBCQAOAiAQAtQAQAqAMAmQAMAnAOAzQANAvAKArQALAtAKA0QAMA3AHArIAPBhQAIA5ADApQAEApABA0QACAxgBArQgBA7gEBCQgDBIgFA3QgFA4gHAzQgIA/gJArQgPBGgPA5QgTBLgTAyQgTAvgbAyQgdA1gcAlQgdAnguAtQgrAqgqAgQgvAkhGAsQg7Alg/AjQgvAZhCAeQg7Abg5AXQg9AZhGAYQhLAag6ARQg5AQhGAPQhHAQg6AJQhEALhXAJQhUAJhHAFQg/ADhSABIgaAAQg/AAg4gCg");
	shape_25.setTransform(-6.6,-3.1);

	shape_26 = this.shape_26 = new Shape();
	shape_26.graphics.f("#2EABB8").s().p("AKNWWQhAgChPgGQhPgHhAgHQgwgGg8gLQg7gLgwgMQg3gNhEgUQhAgTg2gSQg0gShAgZQg9gZg0gXQgvgVg6gdQg4gcgvgaQgigTgpgaQgogaghgXQgjgagqghQgrghghgdQgggcgnglQglgkgfggQgbgcgfgkQgfgkgYgfQgYgfgdgoQgcgogWgiQgXglgTggQgZgqgOgeQgOgegIgXQgMghgCgXQgBgMAJgQIAQgLQAcAWAqA9QAvBEATAUQB/CAAwAuQBsBnBOA4QB6BWBbA1QCFBMBiAYQBKASBhgOQBigOA/goQA7gmA3hTQAyhOAVhNQAYhWABiIQAAhdgLiEQgJhjgZh2QgZh4gfheQgWg/ghg8QgmhFgngmQgagYgugKQgugLgfANQgmAQgtA4IhGBYQgOAPhaBxQhCBTgsAlQgtAmg7AgQg/Aig1ANQgwAKhBgCQg+AAgygOQgxgOhKgpIh2hEIg8gxIgjgiIgjgiIgggmQgSgWgMgRQgWghgUghQgYgngPgeQgMgagRgsIgbhIIgZhIQgQgwgKgYQgTgwgNgcQgVgtgRgcQgUghgYgeQgbgjgYgVQgTgRgfgRQgcgPgbgKQgWgIgggGQgbgEgcgCQgagCggABQggACgZAEQgaAFggAJQggAJgYAKQgeANgcAPQggASgVAQQgkAdgZAZQgiAjgQAcQgHANADAZIAHAnIAHAHIAIAHIAFAGIAIANIACAGIACAGIAAANIgDAMIgCAFIgFAJIgGAHIgHACIgHABIgFgDIgFgFIgJgOIgIgQIgLgjIgVgmIgPgVIgVgSIgOgKIgRgHIgYgDIgLgEIgKgHIgHgLIgEgMIADgNIAKgVIAGgIIAGgFIAGgEIAOgFIAHgBIANAAIAHABIAGADIAFAFIAFALIAKAjIAIAIIAOAFQAKgFANgQIAUgZIAVgdIAWgcIAfggIAhgfIAggcQATgQAOgKIAugeQAbgRAUgKQAfgQAfgOQAlgQAcgJQAngMAhgJQAsgLAfgCQArgDA3ACQA2ABAsAHQAuAGA8APQA3AOAxAQQAjAMBwAxQBhAqA0ANQBhAXBYALQBuAPBNgHQBlgICsgrIEOhEIDpg6QCZgnBOgRQA7gNBtgSICogcIBhgSQBAgNAhgFQAbgFArgFIBGgHIBPgJIBOgHIBPgGIBQgFIBIgDIBIgCIBGABIBFABIBLAEIBLAFIBJAFIBJAIIBCAIIBCAIIA+AKIA9AKIAkAGIAjAIIAzAOQAgAJATAIQASAHAUALQAUAMAPALQARAOAUAUQAUATAOASQARAUATAdQARAbAPAZQAQAcARAkQASAkAMAeQAPAiAQAtQAPArAMAmQAMAmAOAzQANAwAKAqIAWBiIASBhIAPBiQAIA5ADApQAEAoABA0QABAygBArQgBA7gDBCQgEBHgFA4QgFA4gHAzQgIA+gJAsQgPBFgPA6QgUBKgTAyQgSAugbAyQgdA2gcAlQgeAmguAtQgrApgqAhQguAkhHArQg7Alg/AiQgvAahCAeQg6Aag6AXQg9AYhGAZQhKAag7AQQg5AQhGAQQhGAQg6AJQhEALhXAJQhUAJhHAEQg/ADhSABIgaAAQg/AAg5gCg");
	shape_26.setTransform(-4.5,-3.5);

	shape_27 = this.shape_27 = new Shape();
	shape_27.graphics.f("#2EABB8").s().p("AKIWYQhBgChPgGQhOgGhBgHQgwgGg8gLQg7gKgwgMQg3gMhEgUQhBgTg2gSQg0gRhAgZQg+gYgzgXQgwgVg6gcQg4gdgvgZQgigTgpgaQgogZghgXQgkgagqggQgrghghgdQgggbgngmQgmgjgfggQgbgcgfgkIg3hCQgYgfgdgoQgcgngWgiQgYglgTggQgYgqgOgeQgPgegIgXQgMgggBgXQgBgMAIgQIARgLQAcAWArA9QAvBDAUAUQB/B/AwAtQBtBnBOA3QB7BWBbAzQCFBMBjAXQBLASBggPQBjgPBAgpQA6gmA3hVQAzhOAWhNQAYhXAAiIQABhfgMiDQgJhjgZh2QgZh4ghheQgWg/ghg8QgnhFgnglQgagYgugKQgvgJgfANQglAQgtA4QgkAwghAqQgNAPhaBzQhBBUgsAmQgtAmg7AhQg/Ajg1ALQgwANhCgCQg+gBgzgMQgxgNhLgpIh4hDIg8gxIgkgiQgWgUgNgOIghgmQgSgWgMgRQgXgigUghQgYgngPgeQgNgbgRgsIgbhIIgZhKQgQgygJgXIgghPQgUgvgRgdQgUgigWggQgbglgXgXQgTgTgegTQgcgRgbgMQgWgKgfgIQgcgGgbgEQgbgDgegBQghAAgZADQgaADgfAHQggAIgYAJQgdAMgcAOQggARgUAQQgiAbgaAaQghAigPAdQgHAMADAZIAIAmIAHAIIAIAGIAFAGIAFAHIAFAMIACAMIAAAGIgCAMIgCAGIgKAPIgHADIgGABIgGgDIgJgLIgJgPIgPgqIgOgaIgXggIgNgNIgVgOIgQgHIgYgCIgKgEIgKgGIgHgKIgEgMIACgOIAGgMIAKgRIAFgFIANgHIAHgDIAHgBIATABIAGADIAFAEIAFALIAKAiIAIAIIANAFQAKgFANgQIATgaIAVgcIAVgcQANgOASgSIAggeIAggbQATgPAOgKQAWgOAYgOQAagQAVgJQAegOAhgMQAlgOAbgIQAngKAjgHQAsgIAfgBQArgBA4AFQA1AFAtAJQAsAJA9ATQA0APA0AUQAeALByA1QBfAtA0ANQBdAWBZAMQBsANBMgHQBmgKCrguIENhJIDpg9QCXgpBQgSQA8gNBtgSICpgdIBhgTQBAgNAigFIBGgJIBHgIIBOgIIBPgHIBQgGIBPgFIBIgDIBJgCIBFABIBGACIBLADIBLAFIBJAGIBJAHIBCAIIBCAJIA+AKIA9AKIAkAGIAjAIIA0AOQAfAJATAIQASAIAUALQAVAMAOALQASAOAUATQATAUAPASQAQAUATAdQASAbAOAaQAQAcASAkQARAjANAeQAOAiAQAuIAbBQIAaBZQANAwAKArQALAtAKA0QAMA3AHArQAIAxAHAwQAHA5AEAqQADAoABA0IABBcQgCA7gDBCQgEBIgFA3QgFA4gHAzQgIA/gKArQgOBGgPA5QgUBKgTAyQgTAugbAyQgdA2gcAlQgdAmguAtQgrApgqAgQgvAkhGAsQg6AkhAAjQgvAZhCAeQg6Abg5AXQg9AYhGAYQhLAag5ARQg5AQhGAQQhHAPg6AKQhEALhWAJQhUAJhHAFQg/AEhTAAIgyABIhfgCg");
	shape_27.setTransform(-3.8,-3.5);

	shape_28 = this.shape_28 = new Shape();
	shape_28.graphics.f("#2EABB8").s().p("AKhWfQhBgBhOgFQhPgFhAgHQgxgGg8gJQg7gKgwgLQg3gMhEgTQhBgSg2gRQg0gRhAgYQg+gXg0gWQgwgVg6gcQg5gbgugZQgigSgqgaQgogYghgXQgkgZgrggQgqghghgcQghgbgnglQgmgkgfgfQgbgcgfgkQgggjgYgeQgZgfgcgoQgcgngXgiQgYglgTggQgYgqgPgeQgOgegIgXQgMghgBgXQgBgNAJgRIARgLQAdAWArA8QAwBEAUATQCBB/AvArQBtBmBPA2QB8BUBbAzQCFBJBjAWQBLAQBhgRQBjgRA9gqQA9goA2hWQAzhQAVhPQAXhXABiJQAAhhgMiDQgKhjgah2Qgah4ghheQgWg/gig8QgnhEgogmQgagXgugJQgvgKgeAOQglARgtA4QgjAxghAqQgOAQhXBzQhBBWgrAmQgsAng7AiQg/Akg1ANQgwANhBAAQg/AAgzgMQgxgKhNgoIh4hAIg+gwIglghQgWgUgNgOIgiglQgTgWgMgRQgYghgVggQgZgngPgeQgOgagSgsIgchIIgahJIgbhJIgghPQgVgwgQgdQgUgkgVggQgagngWgYQgSgUgegWQgagTgbgPQgVgMgfgLQgbgKgbgHQgbgHgfgFQgggFgZgBQgbgBghADQghACgaAGQggAGgdAJQgjALgYAMQgoAVgdATQgoAbgVAZQgKALgBAZIABAnIAFAJIAHAIIAHAOIADAOIAAANIgGAQIgEAFIgNANIgHACIgHgBIgFgEIgEgGIgHgPIgNhEIgQgpIgLgTIgRgTIgOgMIgIgEIgXgIIgKgGIgIgIIgGgMIgBgNIAFgNIAHgLIAOgOIANgGIAPgDIAHABIANACIAGADIAGAEIAEAFIADAMIAEAkIAGAKIANAIQALgDAPgNIAZgVIAagYIAagXIAkgZIAmgYIAkgVQAVgMAQgHIAxgUQAdgLAWgHQAggJAigIQAmgJAcgEQApgFAigDQAsgDAeACQAqADA3AJQAzAJAtAMQAqALA8AVQAtAPA4AWQAWAIB4A4QBcAqA1AMQBZAVBcAJQBrAKBMgJQBlgMCrgxQCNgpCAgkIDqhAQCVgpBSgTQA9gOBsgTIEMgxQA/gMAjgGIBHgJIBGgHIBPgIIBPgIIBQgGIBQgEIBIgDIBIgCIBGABIBGACIBLADIBLAFIBJAGIBJAIIBCAIIBCAJIA+AJIA9ALIAkAGIAjAIIA0AOQAfAJATAIQASAIAUALQAVAMAOALQASAOAUAUQATATAPASQAQAVATAdQASAbAOAZQAQAcASAkQARAkAMAeQAPAiAQAtQAPArAMAmIAaBZIAWBbQALAtALA0QALA3AHArQAIAxAHAxQAHA4ADAqQAEAoABA0QABAxgBArQgBA7gEBCQgEBIgFA3QgFA4gHAzQgIA/gJArQgPBGgPA5QgUBLgTAxQgSAvgbAyQgdA1gcAlQgdAnguAsQgqAqgqAgQgvAkhGAsQg6Alg/AiQgvAahBAeQg6Abg5AXQg9AZhGAZQhKAag6ARQg4AQhGARQhGAQg6AKQhEALhWAKQhTAKhIAFQg+AEhTACIhLABIhGgBg");
	shape_28.setTransform(-5.7,-3.1);

	shape_29 = this.shape_29 = new Shape();
	shape_29.graphics.f("#2EABB8").s().p("AKvWpQhBAAhPgEQhPgEhAgGQgxgEg8gJQg7gJgxgKQg3gLhEgRQhBgRg3gRQg0gQhAgXQg/gWg0gVQgwgUg6gbQg6gagugYQgjgSgqgZQgpgYghgWQgkgZgrggQgrgggggbQghgbgoglQgmgjgfgfQgcgcgfgjQgfgkgZgeQgYgfgdgoQgcgngWgiQgZglgTggQgYgqgOgeQgOgfgJgYQgLghgBgXQAAgOAJgSIATgNQAdAWArA8QAxBEAUASQCDCAAuApQBuBkBQA1QB9BTBaAxQCGBIBjATQBMAPBigUQBjgVA8grQA+grA2hZQAyhSAWhRQAXhZAAiKQgBhjgMiDQgKhkgbh2Qgah4giheQgWhAgjg7QgohEgnglQgbgYgtgJQgwgJgdAOQgmASgrA5QgkAxggArQgOARhVB0QhABXgrAnQgrAog7AjQg+Amg1AOQgvAPhCABQg/ACgzgLQgygLhNgjIh7g9Ig/guIgmggIgkggIgkgkQgTgVgNgRQgYgggXggQgagmgRgdQgPgagSgrIgfhHQgJgVgUgzQgSgzgKgVIgihOQgUgwgRgdQgUgmgUgfQgZgpgVgZQgRgVgcgZQgZgWgZgSQgUgOgegQQgYgNgcgNQgagMgegLQgfgMgagHQgbgHghgHQgigGgbgDQgigDggAAQgmgBgbAEQgzAHgeAGQgxALgcAQQgNAHgKAXIgMAmIACAKIAEAKIABAIIABAJIgBAHIgDANIgDAGIgEAFIgEAEIgJAHIgTAGIgIgCIgHgEIgCgFIgCgHIgCgRIADgSIAIgkIABguIgGgmIgOgiIgMgQIgUgRIgHgLIgFgLIgBgOIADgNIAJgKIAKgHIAJgFIAJgDIAIAAIAOABIAIADIAGADIAMAIIAFAFIAEAGIADAIIgBANIgIAkIADAMIAJANQAMABATgGIAfgKQAKgDAXgKQAWgKAKgDIAsgMIAsgKIAogJQAZgGARgCIA2gGQAegDAYgBQAggCAjAAQAnAAAdABQArACAdADQAsAEAdAGQAmAHA1APIBbAcQAlAMA9AYIBhAlICLA8QBZAmA1AKQBWARBfAFQBpAFBOgLQBlgPCrgzQCNgsCBgmIDphCQCUgqBVgUQA8gPBtgTICpgfIBjgTIBjgSIBHgJIBHgIIBPgIIBQgHIBPgGIBQgFIBIgCIBJgCIBFABIBGACIBLADIBMAFIBJAHIBJAHIBCAIIBCAKIA+AJIA9AKIAkAHIAjAIIA0AOQAfAJAUAIQASAIATALQAVAMAPALQARAOAUAUQATATAPASQAQAVATAdQARAbAPAaQAQAcARAkQASAjAMAfQAOAiARAtQAPAqALAmIAaBaIAXBaQAKAtAKA1IATBhIAPBiQAHA5ADApQADAoACA1QABAxgBArQgCA7gDBCQgFBHgEA4QgGA4gGAzQgJA+gJAsQgPBGgPA5QgTBLgUAxQgSAvgbAyQgcA2gcAlQgdAnguAtQgqApgqAhQguAkhGAtQg6Alg/AjQguAahCAfQg5Abg5AYQg+AZhFAZQhJAbg6ASQg5ARhFARQhHARg5AKQhDAMhXALQhTALhHAGQg+AFhTADQhAADg6AAIgXgBg");
	shape_29.setTransform(-6.7,-2.3);

	shape_30 = this.shape_30 = new Shape();
	shape_30.graphics.f("#2EABB8").s().p("AIWXdQhQgDhBgFQgxgDg8gIQg9gIgwgJQg4gKhFgQQhBgQg4gQQg0gPhBgWQg/gVg1gVQgxgTg6gaQg7gZgvgYQgjgRgqgYQgpgYghgWQglgYgrgfQgrgggigbQgggbgogkQgmgigfggQgcgbgfgjQgggkgYgeQgYgegdgoQgcgngVgjQgZgmgSgfQgZgqgNgfQgNgegIgZQgLgiAAgXQAAgPALgTQAKgOALABQAeAVArA7QAyBEATASQCHCAArAnQBvBjBPA0QB+BRBbAwQCIBFBiARQBOANBjgXQBkgXA+guQA+guA4hbQAzhVAWhTQAXhaAAiMQAAhlgNiEQgKhkgbh3Qgbh3gihfQgXg/gjg8QgohEgoglQgbgXgtgJQgwgIgeAOQglASgrA6IhCBcQgPAThTB1Qg/BYgqAoQgrApg6AjQg+Ang0ASQgwAQhCADQhAAEg0gJQgygJhOgjIh9g3IhBgsIgngeQgYgTgOgNIglgiQgUgUgOgQIgxg+QgdglgRgcQgQgagVgqIgihFIgghHIgfhHIglhOQgWgugRgeQgVgngTgfQgZgpgUgaQgQgWgagcQgXgXgYgWQgRgQgdgWIgwgkIgygkIg0giIg3ghQgggSgZgNIg+gdQglgQgagJIhSgZQgygOghAAQgOABgTAPIgcAcIgDAKIAAAMIgCAJIgEAIIgHALIgKAJIgMADIgGABIgHAAIgKgCIgKgDIgGgGIgFgIIAAgGIACgHIADgJIAIgPIAdgkIAVgpIAJgaIADgVIABgeIgDgWIgKgbIgBgOIAAgNIAFgOIAJgLIALgEIANgBIAJABIAJACIAOAHIAGAGIAFAGIALAUIACAIIABAIIgBAIIgLATIgSAXIgCANIADARQAKAHAUAFIAgAGIAjAEIAjADIAtAIIAsAJIAqAIIApAJIA1ANIA0AOIBAASIBAASIBDATQAqAMAZAJQAeALA3AVIBTAiIBeAlIBdAjICKA1QBXAgA2AHQBUAMBjgBQBngBBPgOQBkgSCtg2QCOguCBgnIDqhFQCSgrBXgWQA9gPBsgUICrgfIBjgTQA/gNAkgGQAbgEAsgFIBIgIIBPgIIBPgHIBQgGIBQgEIBJgDIBIgBIBGAAIBGACIBLAEIBMAFIBJAGIBJAIIBCAIIBCAJIA+AKIA+AKIAjAHIAkAIIAzAOQAfAKAUAIQASAHATAMQAVALAPAMQARANAUAUQATAUAPASQAQAUATAeQASAaAOAaQAQAcARAkIAeBCQAOAiAQAtIAbBRIAaBZIAWBbQALAtAKA0QALA3AHArQAIAxAHAxQAHA5ADApQADAoABA0QACAxgBAsQgCA4gEBFQgEBHgFA4QgFA4gHAzQgIA+gKAsQgPBGgPA5QgTBLgTAyQgTAvgaAyQgdA2gcAlQgdAnguAuQgqAqgqAhQguAlhGAtQg6Alg/AkQgvAahBAgQg6Abg5AZQg9AahFAZQhKAcg6ATQg5ARhFASQhHASg5ALQhEANhXAMQhTAMhIAHQg/AGhTAEQhNADhFABIgWAAQg5AAhBgCg");
	shape_30.setTransform(-6.4,-5.5);

	shape_31 = this.shape_31 = new Shape();
	shape_31.graphics.f("#2EABB8").s().p("AHeZKQhRgChBgEQgygDg9gHQg9gHgygJQg4gKhEgPQhEgQg5gPQg0gOhCgWQhAgUg2gUQgxgTg7gZQg8gZgvgXQgjgRgrgYQgpgXgigVQglgYgrgfQgsgfghgbQghgagogkQgmgjgfgfQgbgbgfgjQgggjgXgdQgYgfgcgoQgcgmgVgiQgYgngRgeQgYgqgMgeQgNgfgHgZQgJgiABgXQABgQAMgSQANgUAKAHQAfAUArA6QAyBFASARQCKCAApAkQBvBiBPAyQB/BRBcAuQCIBEBjAPQBQAMBmgZQBmgZBBgwQA/gvA5hdQA2hXAXhUQAZhcAAiNQABhogMiEQgKhjgch5Qgbh2gjhgQgXg+gjg7QgphEgoglQgbgXgugIQgvgJgeAPQglASgrA6IhBBeQgQAUhQB1Qg+BZgqAnQgrAqg6AnQg9Apg1ASQgwAShDAFQhAAFg1gIQgygHhQghIh/g1IhDgpIgpgdIgogcIgmghQgWgUgOgQQgcgegZgeQgegkgTgbQgRgZgXgpIgmhEIgjhGIgkhGIgphNIgrhMIgqhHQgagrgTgbQgPgWgagfIgsg0IgpgtIgpgtIgqgwIgpgxIgqgzIgrgzIgug2QgcghgTgUIg7hAQglgogcgRQgMgHgXADQgMABgZAHIgIAIIgFALIgGAGIgHAGIgMAFIgMACIgGgCIgMgFIgFgEIgIgJIgHgJIgCgJIAAgKIADgGIAFgFIAOgLIAxgSIAZgPIAYgUIAQgSIAVgiIAJgWIAGgeIAGgOIAIgMIAKgJIANgGIALADIASAMIAGAGIADAHIADAIIADAQIAAAIIgEAZIgDAIIgFAHIgSAMIgaALIgIALIgGARQAEAMAOAQIAZAXQAJAIASAOIAcAVIAjAcIAiAdIAiAaIAhAZIAqAgIAqAgIA1AlQAfAVAXANQAXAOAkATIA7AfIBNAoQAvAYAfANQArATAwASQA0AUAoAMICMAsQBXAZA3AEQBTAGBngHQBmgHBSgRQBkgVCvg5IEPhZIDrhIQCRgsBZgXQA+gPBsgUICrggIBkgUQA+gNAmgGQAbgEAsgFIBIgIIBPgIIBQgHIBQgGIBQgFIBJgDIBIgBIBGABIBGACIBMAEIBLAFIBJAGIBJAIIBDAIIBCAKIA+AJIA9ALIAkAHQAVAEAOAEIA0AOQAfAJAUAIQASAIATALQAVAMAPALQARAOAUAUQATATAPASQAQAVATAdQASAbAOAZQAQAdARAkQASAjAMAeQAOAjAQAtQAPAqAMAmQAMAnANAzQANAwAKAqQAKAtALA1QALA3AHArQAIAwAGAxQAHA5AEApQADApABA0QABAvgBArQgCA7gEBFQgEBHgFA3QgGA4gHA0QgIA+gJAsQgPBGgQA5QgTBLgUAyQgSAvgbAzQgdA2gcAlQgeAoguAtQgqArgrAhQguAlhGAtQg7Amg/AkQgvAbhCAgQg6Acg6AYQg9AbhFAaQhLAcg6ATQg5AShHASQhHATg6ALQhEAOhYAMQhUANhIAHQhAAHhUAFQhOAEhFABIg8ABIhXgCg");
	shape_31.setTransform(-2.8,-15);

	shape_32 = this.shape_32 = new Shape();
	shape_32.graphics.f("#2EABB8").s().p("AFgZ0QhSgChCgFQgzgDg9gHQg/gHgvgJQg6gJhGgQQhGgPg5gQQg1gOhDgVQhAgVg2gUQgygSg8gZQg8gZgwgXQgjgRgrgXQgqgXgigWQglgXgrgfQgsgfghgaQghgagngjQgmgjgfgeQgbgbgfgiQgfgigYgeQgXgegcgmQgagngVghQgYgmgQgdQgXgpgMgeQgLgdgGgZQgJghADgWQACgQAOgSQAPgTAKAHQAfATArA6QAyBDASARQCLCAAnAhQBvBgBPAyQCABPBcAtQCJBDBkAPQBRAMBpgaQBngZBEgwQBDgvA6hdQA4hXAYhVQAbhcACiNQAChqgMiDQgJhigdh6Qgbh1gihgQgWg/gkg7QgphEgrgkQgagXgugIQgwgJgeAPQglATgqA7IhABeQgQAUhPB2Qg9BZgqApQgrArg6AoQg9Apg1AUQgxAShDAHQhAAGg2gHQgzgGhSgfIiBgyIhFgoIgqgbIgqgdIgnggQgXgTgPgNIg4g7QgggjgUgbQgTgYgagpIgphDIgohFIgohGIguhPIgvhNIgthLIguhJIgog7Igog6Igkg0QgVghgMgUIgeg6Igag7IgYg+IgVhAIgThEIgShFIgThYQgMg4gOgcQgGgMgTgLQgMgGgVgHIgKAEIgKAGIgPAEIgGgBIgMgDIgFgEIgEgFIgGgLIgDgTIAAgNIADgJIAFgJIAFgDIAHgDIAIgBIAQABIAnAKIANABIAcgCIAZgHIALgEIAkgTIATgPIAVgYIAMgIIANgHIAOgCIAMACIAHAIIAEAKIADARIgBAIIgJAXIgVAbIgHAGIgHADIgNACIgIAAIgagDIgMAGIgOAMQgCANADAVIAHAiQACAMAIAVIANAgIAPAqIAQApIARAlIASAkIAYAtQAPAcALAQIAkAxQAVAcASASQATAUAcAXQAaAWAYARQAlAaAhAVQArAaAfAPQApATAzATQAzATArALQBqAbAmAJQBZATA6ABQBTACBrgOQBkgMBXgVQBjgXCxg8IERhdIDshKQCSgsBZgYQA+gQBtgVICrghIBkgUQA/gNAmgGQAbgEAtgFIBIgIIBPgIIBRgHIBQgGIBQgFIBJgDIBIgBIBGABIBGACIBMAEIBLAFIBKAGIBJAIIBCAIIBCAKIA+AKIA+AKIAkAHQAVAEAOAEIA0AOQAfAKAUAIQASAHAUAMQAUAMAPALQARAOAUAUQAUATAOASQARAUATAeQASAbAOAZQAQAcARAkQARAkANAeQAOAiAQAuQAPAqAMAmQAMAnANAzIAXBaIAUBiQALA3AHArQAIAxAGAwQAIA5ADAqQADAoABA0QABAvgBArQgCA7gEBFQgEBHgGA4QgFA3gHA0QgJA+gJAsQgPBGgQA5QgUBLgUAyQgSAvgcAzQgdA2gdAlQgdAngvAuQgrAqgrAiQguAkhHAuQg7AlhAAlQgvAahDAgQg7Acg6AYQg+AbhGAaQhMAcg6ATQg6AShHASQhIASg7AMQhFANhYANQhVANhJAHQhAAHhVAEQhPAEhHABIg4AAIhcAAg");
	shape_32.setTransform(7.5,-19.3);

	shape_33 = this.shape_33 = new Shape();
	shape_33.graphics.f("#2EABB8").s().p("ADPZsQhSgChDgFQgzgEg8gHQg/gIgygJQg5gKhHgQQhGgQg5gQQg2gOhDgWQhBgVg2gUQgygSg9gaQg8gZgwgXQgjgRgrgXQgqgXgigWQglgXgrgeQgsgfghgaQghgagngiQgmgigfgeQgbgageghQgfgigXgdQgYgdgbglQgagmgUggIgohBQgWgogLgcQgMgdgFgXQgIggAEgVQACgPAPgRQAQgRALAHQAeASArA5QAyBBASARQCNB+AlAgQBvBeBPAwQCABPBdAtQCJBCBjAPQBTAMBpgYQBqgYBFgvQBDguA+hbQA7hXAZhUQAchbADiMQADhqgMiCQgIhhgdh7Qgch0gjhgQgXg/glg7QgphDgrglQgbgWgugIQgvgJgeAQQglASgpA7IhABfQgQAVhOB2Qg9BZgpAqQgqArg7AoQg9Aqg1AVQgxAShDAIQhBAGg2gGQg0gFhTgdIiDgwIhGgnIgsgbIgqgcIgpgfQgYgTgQgPQgegagcgdQgigigVgbQgUgYgcgoIgshDIgshGIgrhHIgzhRIgyhRIgvhQIguhPIgmhAQgXgpgNgYIgcg6QgQgkgJgYQgJgcgHgjQgIgigDgdQgEgcAAglQgBgjACgfQACgeAGgnQAFgkAGghQAEgSAUhFQARg5ACgeQABgNgJgRQgHgOgLgOIgJgBIgLABIgHgBIgHgDIgEgDIgEgEIgDgFIgCgFIAAgHIABgNIACgHIAMgXIAIgHIAIgFIAGgBIAHABIANAHIAFAEIASAWIAGAGIAVANIAYAIIAVAEIAmgBIAYgEIAegKIAOgCIAOABIAMAEIAJAHIAAAKIgCALIgDAHIgEAHIgMAMIgOAKIgfANIgIACIgIAAIgLgEIgGgEIgTgNIgNgBIgRAFQgJAKgIAUIgMAhQgEAMgDAVIgFAiIgHArIgEAqIgBAnQAAAVABASIAEAvQAEAdAFASQAHAcAKAaQAMAfAMAVQANAXAWAaQAVAaAUASQAeAcAiAaQAnAdAfAQQApAWA0AUQA1AUAsALQBXAVA/ALQBaAQA9gCQBSgCBwgSQBigRBdgYQBigaCzg+QDphSAqgNIDthMQCSgtBdgZQA+gQBrgWICsghIBkgUIBlgTQAcgFAsgFIBJgIIBQgIIBQgHIBRgGIBQgFIBJgCIBJgCIBGABIBGACIBLAEIBMAFIBJAHIBKAIIBCAIIBCAKIA+AJIA+ALIAkAHIAjAIIA0APQAgAJATAIQASAIAUALQAVAMAOALQASAOAUAUQAUATAOASQARAVATAdQASAbAOAaQAQAcARAkQASAkAMAeQAOAiAQAuIAbBQIAZBaIAXBaQAKAtAKA1QALA3AHArQAIAxAGAwQAIA5ADAqQADAoABAyQAAAxgBArQgBA7gEBFQgFBHgFA3QgGA4gHAzQgJA/gJArQgQBGgQA6QgUBLgUAxQgTAvgcAzQgdA1gdAlQgeAngvAuQgrApgrAiQgwAkhHAtQg7AlhBAkQgvAahEAfQg6Acg7AYQg/AahGAZQhMAcg7ASQg6AShIARQhIASg7ALQhGANhZAMQhWAMhJAHQhBAGhVAEQhPADhHABIgXABQg6AAhFgDg");
	shape_33.setTransform(20.3,-20.2);

	shape_34 = this.shape_34 = new Shape();
	shape_34.graphics.f("#2EABB8").s().p("AC1ZQQhSgDhDgFQgxgFg+gIQg/gIgygKQg6gLhGgQQhGgQg6gQQg1gPhDgXQhBgUg2gVQgygTg8gZQg8gZgwgXQgkgSgqgXQgqgXgigWQglgXgrgeQgrgegigaQgggZgogiQgmghgegeQgbgZgeghQgfghgYgcQgXgcgbglQgagkgUggQgYgkgQgbQgWgmgLgcQgMgbgFgWQgIgfAEgUQACgOAQgPQAQgQALAHQAeASArA3QAyA/ATARQCNB8AkAfQBvBcBOAvQCCBPBbAsQCKBCBiAPQBTANBqgWQBpgXBGgtQBEgsA+haQA8hVAZhTQAchaAEiLQADhqgLh/QgJhigdh6QgbhzglhhQgXg+gkg7QgqhEgrgkQgbgWgugIQgvgJgeAQQglATgpA7Ig/BfQgQAVhOB3Qg7BagpApQgqAsg6AoQg+Aqg1AVQgwAShEAIQhBAHg2gGQg0gFhUgdIiEguIhHglIgsgbQgbgQgQgLIgrgfQgYgTgQgOQgggbgcgcQgjgigWgaQgVgYgdgoIgvhDQgTgbgcgsIgthIIg1hUIg0hWQgVgkgagwIgshWIgihEQgUgqgLgdQgMgggJgfQgLglgEgaQgFgcgBgjQgBgjADgcQADgcAJgjQAIggAKgcQAKgcARghQAQggARgbQAMgTAqgzQAmguAOgZQAGgLABgSQABgQgDgPIgGgFIgKgCIgFgEIgEgFIgCgFIgBgEIAAgGIABgFIACgGIAIgLIAFgFIAVgQIAKgEIAKAAIAFABIAFADIAEAFIADAGIAEAMIACATIACAHIAFAKIAGAJIAQARIAQAKIAhANIAWAFIAfAEIANAEIAMAHIAHAHIAEAKIgEAIIgOANIgGAEIgIADIgYAFIghgBIgIgBIgHgDIgLgNIgJgSIgLgEIgRgDQgMAHgQAOQgLAJgOAPQgJAKgLAQIgTAdIgVAjIgUAkIgOAiIgMAjIgKAsQgFAagBARQAAAaADAbQAEAeAHAVQAIAZAQAcQAQAcARATQAaAfAgAdQAkAgAeATQAoAYA1AWQA2AXAsALQBRAUBJAKQBcAOBAgDQBSgDBzgXQBdgSBlgcQBhgbC1hBQDhhRA0gRQCcgzBSgZQCQgtBggaQA+gQBrgWICsghIBlgWQA+gMAngHQAcgEAtgFIBIgIIBRgIIBRgHIBQgGIBRgEIBJgEIBIgBIBHABIBGACIBLAEIBMAFIBJAHIBKAHIBCAJIBCAKIA/AJIA9ALIAkAHIAkAIIA0APQAfAKATAIQATAHAUAMQAUAMAPALQASAOAUAUQATAUAPARQARAVATAeQASAaAOAaQAQAcASAlQARAjAMAeQAPAjAQAtQAPArALAmQAMAmAOA0QAMAvAKArQAKAtAKA1QALA2AHAsIAOBhQAHA5ADApQADAoABA1QABAvgBArQgCA7gEBEQgEBIgGA3QgFA4gIAzQgJA+gJAsQgQBFgQA6QgUBKgUAyQgTAugcAyQgeA2gdAkQgeAngvAtQgsApgrAhQgvAkhIAsQg8AkhAAkQgwAZhDAfQg7Abg7AYQg/AZhGAZQhNAbg7ARQg6ARhIASQhIAQg7ALQhGAMhZAMQhWAKhJAHQhBAGhVADQhQADhGAAQhEgBhSgDg");
	shape_34.setTransform(22.4,-19.4);

	shape_35 = this.shape_35 = new Shape();
	shape_35.graphics.f("#2EABB8").s().p("AFCYnQhEAAhRgEQhSgEhDgGQgxgEg+gJQg+gIgzgKQg5gLhGgRQhGgQg5gRQg1gPhDgWQhAgWg3gUQgxgTg8gaQg8gZgwgXQgjgRgrgYQgpgXgigVQglgXgrgeQgrgegigaQgggZgngiQgmgggfgdQgbgageggQgfghgXgbQgYgcgbgkQgagjgVgfQgYgkgPgaQgXglgMgbQgLgbgGgVQgIgeAEgTQACgOAQgOQAQgPAKAGQAeASAsA2QAzA/ASAQICyCZQBvBbBOAvQCCBOBaAsQCJBBBiAQQBTANBpgVQBpgVBGgtQBDgrA+hYQA8hUAZhSQAchZAEiKQADhpgLh/QgJhhgdh6QgchzgkhgQgYg+gkg7QgqhEgrgkQgbgXgugHQgwgIgeAPQgkATgpA7Ig/BgQgQAVhNB2Qg7BagoAqQgqArg6ApQg9Aqg1AUQgwAThEAIQhBAHg2gFQg0gFhUgcIiFguIhHglIgtgaIgsgbIgqgeQgZgSgQgPQgggagdgcQgkgigXgaQgVgYgegoIgwhDQgUgdgcgrIgvhJIg2hXQggg0gUgkIgthYQgYgwgTgqQgQglgOgjQgRgrgJgfQgJgfgGghQgIglgBgcQgBgcADgiQAEgiAGgbQAHgZANgfQANgfAPgXQAPgZAWgbQAXgcAVgUQASgRAzgkQAxgiATgTQAJgIAIgQQAGgOADgPIgEgFIgIgFIgDgFIgCgFIgBgFIABgEIACgFIADgFIAEgFIAMgIIASgIIANgEIAKAAIAJABIAFADIADAEIACAGIABAFIgDASIgDAMIgBAHIADATIAJATIAGAHIALAMIAdAVIAlARIALAHIAJAJIAEAKIABAJIgHAHIgRAGIgQACIgYgCIgXgHIgOgGIgGgFIgEgIIgCgFIgCgTIgJgHIgOgGQgOACgTAJIgeAQQgMAHgPAMIgZAWIgeAbQgRARgKAMQgLAMgKAQQgMAQgHANIgSAmQgKAXgEAQQgFAYgBAZQgBAeAEAUQAFAZAMAcQAMAdAOAUQAYAhAdAfQAhAiAdATQApAcAzAYQA2AZAtALQBOAUBOALQBcANBCgEQBSgEB1gaQBYgTBrgfQBhgbC2hDQDdhQA5gTIDvhNQCPgtBhgaQA/gRBrgVICsgiIBlgVQA/gNAngGIBJgKIBIgIIBRgIIBRgHIBRgGIBQgEIBJgDIBJgBIBGAAIBHADIBLADIBMAGIBJAGIBJAIIBDAJIBCAJIA/AKIA+ALIAjAHIAkAIIA0APQAfAJAUAIQASAIAUALQAVAMAOAMQASAOAUAUQAUATAOASQARAVATAeQASAbAPAZQAQAdARAkIAeBCQAOAiAQAuQAPAqAMAmQAMAnANAzQANAwAJArQALAtAKA0IASBiIAOBiQAHA5ADApQADAoABA0QABAwgCArQgBA7gFBEQgEBHgGA4QgFA3gIAzQgJA/gJArQgQBFgQA6QgVBKgUAxQgTAvgcAyQgdA1gdAkQgfAngvAsQgrApgrAgQgwAkhHArQg8AkhBAjQgvAahEAeQg6Aag7AYQg/AYhGAZQhNAag7ARQg6ARhHARQhIAQg7AKQhGAMhZALQhVAKhKAGQhAAFhVADQhAABg6AAIgcAAg");
	shape_35.setTransform(23.4,-16.5);

	this.timeline.addTween(Tween.get({}).to({state:[{t:shape_1}]}).to({state:[{t:shape_2}]},1).to({state:[{t:shape_3}]},1).to({state:[{t:shape_4}]},1).to({state:[{t:shape_5}]},1).to({state:[{t:shape_6}]},1).to({state:[{t:shape_7}]},1).to({state:[{t:shape_8}]},1).to({state:[{t:shape_9}]},1).to({state:[{t:shape_10}]},1).to({state:[{t:shape_11}]},1).to({state:[{t:shape_12}]},1).to({state:[{t:shape_13}]},1).to({state:[{t:shape_14}]},1).to({state:[{t:shape_15}]},1).to({state:[{t:shape_16}]},1).to({state:[{t:shape_17}]},1).to({state:[{t:shape_18}]},1).to({state:[{t:shape_19}]},1).to({state:[{t:shape_20}]},1).to({state:[{t:shape_21}]},1).to({state:[{t:shape_22}]},1).to({state:[{t:shape_23}]},1).to({state:[{t:shape_24}]},1).to({state:[{t:shape_25}]},1).to({state:[{t:shape_26}]},1).to({state:[{t:shape_27}]},1).to({state:[{t:shape_28}]},1).to({state:[{t:shape_29}]},1).to({state:[{t:shape_30}]},1).to({state:[{t:shape_31}]},1).to({state:[{t:shape_32}]},1).to({state:[{t:shape_33}]},1).to({state:[{t:shape_34}]},1).to({state:[{t:shape_35}]},1).wait(1));

	// Layer 9
	shape_36 = this.shape_36 = new Shape();
	shape_36.graphics.f("#E08DBF").s().p("Ak5B2QApjpEIhsQHljIjpGkQh0DRirA6QhVAYg7AAQicAAAeiqg");
	shape_36.setTransform(8.5,89.3,1,1,0,0,0,0.8,0);

	this.timeline.addTween(Tween.get(shape_36).wait(35));

	// Layer 4
	instance_2 = this.instance_2 = new lib.bilbomouthint("synched",0);
	instance_2.setTransform(-0.2,10.8);

	this.timeline.addTween(Tween.get(instance_2).to({x:-4.2,y:15.8},16,Ease.get(-1)).to({x:-0.2,y:10.8},18,Ease.get(-1)).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-209.2,-170.5,466.1,311.1);


(lib.biblobodywalkcycle = function(mode,startPosition,loop) {
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// bilbo-ear
	instance = this.instance = new lib.bilboear("synched",0);
	instance.setTransform(4.1,-58.6,1,1,0,0,0,-40,0);

	this.timeline.addTween(Tween.get(instance).wait(1).to({regX:0,scaleX:1,skewX:-0.2,skewY:-1,x:44.1,y:-57.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.9,skewY:-3.8,x:44.2,y:-54.9},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-1.8,skewY:-7.3,x:44.1,y:-51.6},0).wait(1).to({regX:-40.1,scaleX:1.01,skewX:-2.1,skewY:-8.4,x:4,y:-44.6},0).wait(1).to({regX:0,skewX:-2,skewY:-8,x:44.1,y:-51},0).wait(1).to({scaleX:1.01,skewX:-1.7,skewY:-7,y:-52.2},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-1.3,skewY:-5.4,x:44.2,y:-54.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.8,skewY:-3.1,y:-56.8},0).wait(1).to({regX:-40,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:-60.6},0).wait(1).to({regX:0,scaleX:1,skewY:-1.1,x:44.2,y:-59.5},0).wait(1).to({scaleX:1.01,skewY:-4.1,y:-56.2},0).wait(1).to({scaleX:1.01,skewY:-7.8,y:-52.3},0).wait(1).to({regX:-40,scaleX:1.01,skewY:-9.1,x:4.1,y:-44.6},0).wait(1).to({regX:0,scaleX:1.01,skewY:-8.1,x:44.1,y:-51.9},0).wait(1).to({scaleX:1.01,skewY:-5,x:44.2,y:-54.8},0).wait(1).to({scaleX:1,skewY:-1.3,y:-58.4},0).wait(1).to({regX:-40,scaleX:1,skewY:0,x:4.1,y:-59.6},0).wait(1).to({regX:0,scaleX:1,skewX:-0.4,skewY:-0.9,x:44.1,y:-58.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.7,skewY:-3.4,x:44.2,y:-55.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-3.2,skewY:-6.5,x:44.1,y:-51.2},0).wait(1).to({regX:-40,scaleX:1.01,scaleY:1,skewX:-3.7,skewY:-7.5,x:4.1,y:-44.6},0).wait(1).to({regX:0,scaleY:1,skewX:-3.5,skewY:-7.2,x:44,y:-50.4},0).wait(1).to({scaleX:1,skewX:-3.1,skewY:-6.3,x:44.1,y:-51.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-2.4,skewY:-4.9,y:-53.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.4,skewY:-2.8,y:-56.6},0).wait(1).to({regX:-40,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:-60.6},0).wait(1).to({regX:0,scaleX:1,scaleY:1,skewX:-0.4,skewY:-1.1,x:44.1,y:-59.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.7,skewY:-4.1,x:44.2,y:-56.2},0).wait(1).to({scaleX:1.01,scaleY:0.99,skewX:-3.2,skewY:-7.8,x:44.1,y:-52.2},0).wait(1).to({regX:-40,regY:0.1,scaleX:1.01,scaleY:0.99,skewX:-3.7,skewY:-9.1,x:4.1,y:-44.5},0).wait(1).to({regX:0,regY:0,scaleX:1.01,scaleY:0.99,skewX:-3.3,skewY:-8.1,x:44.1,y:-51.8},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:-2.1,skewY:-5,x:44.2,y:-54.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-1.3,y:-57.6},0).wait(1).to({regX:-40,scaleX:1,scaleY:1,skewX:0,skewY:0,x:4.1,y:-58.6},0).wait(1));

	// bilbo-hat
	instance_1 = this.instance_1 = new lib.bilbohat("synched",0);
	instance_1.setTransform(-63.7,-103.2,1.436,1.436,0,0,0,4.2,12.5);

	this.timeline.addTween(Tween.get(instance_1).to({y:-102.6},1).to({y:-99.4},1).to({y:-96},1).to({y:-89.3},1).to({y:-112.2},5,Ease.get(-1)).to({y:-114.6},1,Ease.get(1)).to({y:-115.6},1).to({y:-104.4},1).to({y:-97.2},1).to({regX:4.1,regY:12.6,rotation:3.3,x:-63.8,y:-99.2},1,Ease.get(-1)).to({regX:4.2,regY:12.5,rotation:5.8,y:-102.3},1).to({scaleX:1.44,scaleY:1.44,rotation:7.5,x:-63.7,y:-106.1},1).to({rotation:7.2,y:-107.2},1).to({y:-105.2},1).to({y:-102.2},1).to({y:-97.7},1).to({rotation:4.9,x:-63.8,y:-89.1},1).to({scaleX:1.44,scaleY:1.44,rotation:0,x:-63.7,y:-104.2},5,Ease.get(-1)).to({y:-108.6},1,Ease.get(1)).to({y:-110.6},1).to({y:-103.4},1).to({y:-93.7},1).to({y:-94.3},1,Ease.get(-1)).to({y:-97.4},1).to({y:-102},1).to({y:-102.9},1).wait(1));

	// bilbo-body
	instance_2 = this.instance_2 = new lib.bilbobody("synched",0);
	instance_2.setTransform(58.4,159.4,1,1,0,0,0,102,145);

	this.timeline.addTween(Tween.get(instance_2).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-8.8,startPosition:1},0).wait(1).to({y:-3.5,startPosition:2},0).wait(1).to({y:2.7,startPosition:3},0).wait(1).to({regX:102,regY:145,x:58.4,y:174.9,startPosition:4},0).to({y:156.1,startPosition:9},5,Ease.get(-1)).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-12.3,startPosition:10},0).wait(1).to({y:-7.8,startPosition:11},0).wait(1).to({y:-2.4,startPosition:12},0).wait(1).to({regX:102,regY:145,x:58.4,y:169.4,startPosition:13},0).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-1.7,startPosition:14},0).wait(1).to({y:-5.1,startPosition:15},0).wait(1).to({y:-9.2,startPosition:16},0).wait(1).to({regX:102,regY:145,x:58.4,y:159.4,startPosition:17},0).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-8.6,startPosition:18},0).wait(1).to({y:-2.8,startPosition:19},0).wait(1).to({y:4.2,startPosition:20},0).wait(1).to({regX:102,regY:145,x:58.4,y:176.5,startPosition:21},0).to({y:159.4,startPosition:26},5,Ease.get(-1)).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-9.4,startPosition:27},0).wait(1).to({y:-6,startPosition:28},0).wait(1).to({y:-2,startPosition:29},0).wait(1).to({regX:102,regY:145,x:58.4,y:169.4,startPosition:30},0).wait(1).to({regX:-11.7,regY:-25,x:-55.3,y:-1.7,startPosition:31},0).wait(1).to({y:-5.1,startPosition:32},0).wait(1).to({y:-9.2,startPosition:33},0).wait(1).to({regX:102,regY:145,x:58.4,y:159.4,startPosition:0},0).wait(1));

	// bilbo-tail
	instance_3 = this.instance_3 = new lib.bilbotail("synched",0);
	instance_3.setTransform(191.7,-92.1,1.436,1.436,0,0,0,-34.1,-15.2);

	this.timeline.addTween(Tween.get(instance_3).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:1},0).wait(1).to({y:-131.7,startPosition:2},0).wait(1).to({y:-127.6,startPosition:3},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:4},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-126.8,startPosition:5},0).wait(1).to({y:-127.9,startPosition:6},0).wait(1).to({y:-129.8,startPosition:7},0).wait(1).to({y:-132.5,startPosition:8},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,startPosition:9},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:10},0).wait(1).to({y:-131.7,startPosition:11},0).wait(1).to({y:-127.6,startPosition:12},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:13},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-127.3,startPosition:14},0).wait(1).to({y:-130.7,startPosition:15},0).wait(1).to({y:-134.8,startPosition:16},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,startPosition:17},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:18},0).wait(1).to({y:-131.7,startPosition:19},0).wait(1).to({y:-127.6,startPosition:20},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:21},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-126.8,startPosition:22},0).wait(1).to({y:-127.9,startPosition:23},0).wait(1).to({y:-129.8,startPosition:24},0).wait(1).to({y:-132.5,startPosition:25},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,startPosition:26},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-135.1,startPosition:27},0).wait(1).to({y:-131.7,startPosition:28},0).wait(1).to({y:-127.6,startPosition:29},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-82.1,startPosition:30},0).wait(1).to({regX:-15.8,regY:-46,x:217.9,y:-127.3,startPosition:31},0).wait(1).to({y:-130.7,startPosition:32},0).wait(1).to({y:-134.8,startPosition:33},0).wait(1).to({regX:-34.1,regY:-15.2,x:191.7,y:-92.1,mode:"single",startPosition:0},0).wait(1));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(-252.8,-240.5,466.1,395.5);


// stage content:


(lib.demoanimatekeyframe = function(mode,startPosition,loop) {
	var instance_5;
	var instance_4;
	var instance_3;
	var instance_2;
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// bilbo-foot
	instance = this.instance = new lib.bilbofootwalkcycle("synched",4);
	instance.setTransform(478,537,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(Tween.get(instance).wait(35));

	// Layer 20
	instance_1 = this.instance_1 = new lib.bilbofootwalkcycle("synched",0);
	instance_1.setTransform(384,537,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(Tween.get(instance_1).wait(35));

	// Layer 10
	instance_2 = this.instance_2 = new lib.biblobodywalkcycle("synched",0);
	instance_2.setTransform(353.1,355.5,1.175,1.175);

	this.timeline.addTween(Tween.get(instance_2).wait(35));

	// Layer 22
	instance_3 = this.instance_3 = new lib.bilbofootwalkcycle("synched",10);
	instance_3.setTransform(372.5,528.8,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(Tween.get(instance_3).wait(35));

	// Layer 21
	instance_4 = this.instance_4 = new lib.bilbofootwalkcycle("synched",14);
	instance_4.setTransform(468.6,528.8,1.175,1.175,0,0,0,1.6,-3.9);

	this.timeline.addTween(Tween.get(instance_4).wait(35));

	// Layer 19
	instance_5 = this.instance_5 = new lib.shadow();
	instance_5.setTransform(419.8,572.2,0.853,0.853);

	this.timeline.addTween(Tween.get(instance_5).wait(35));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(456,472.8,547.8,516.4);

})(lib = lib||{}, images = images||{}, createjs = egretAnimate||{}, ss = ss||{});
var lib, images, createjs, ss;
