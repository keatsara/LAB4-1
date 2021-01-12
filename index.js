(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.ดินสอข้อความ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(0.1,1,1).p("ASTqfIjjAAASTpwIAAB4AIdqfIjjAAASThYIAAB3ASTFkIAAB4ASTCTIAAB4ANdqfIjjAAASTlhIAAB4ASTKgIjjAAAHrKgIjjAAANdKgIjjAAAkMqfIjjAAAvfn4IAAB4AvfqfIAAB4AvfhYIAAB3AvfkZIAAB4Av9B/IiWCMIDwAAAujFGIAAB4AqYqfIjjAAAjCKgIjjAAApIKgIjjAAAujIoIAAB4ACAKgIjiAAACAqfIjiAA");
	this.shape.setTransform(328.2,133.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.text = new cjs.Text("This is Pencil", "29px 'Times New Roman'", "#CC0099");
	this.text.lineHeight = 34;
	this.text.lineWidth = 170;
	this.text.parent = this;
	this.text.setTransform(257,112.25);
	this.text.shadow = new cjs.Shadow("rgba(51,51,51,1)",3,0,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AzevAIjukqQD4n3IyghIDuEqICvDuMAbSAlPIAAFOAsHudQAFgEAFgEIgMAHIACABMAauAl/QAwi4DEAQQAhjIERgNAwvrhICKhYQAGgEAEgCIARgLIgFAEQBDgsBFgrAuKtKQABgBACgBQA/gpA/gpIC0h0IFQjYAubs/IAMgHAwvrhIivjfIMqoYAKzaMIGNA7IGNA8IAAlQImNEUAKzaMQAFjQDvAmAwvrhMAbiAltApVwSMAbwAlM");
	this.shape_1.setTransform(192.575,262.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0099").s().p("AoLB3QD4n3IwggIDvEpIspIYg");
	this.shape_2.setTransform(96.5,124.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9900FF").s().p("Az+uxICLhZIAKgGIALgHICIhXMAauAmAQjugngFDQgAsjziIFQjYMAbRAlOQkQAOgiDHg");
	this.shape_3.setTransform(213.2,283.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AvQyFIAKgHIgLAGICzh0MAbwAlMQjDgQgxC5g");
	this.shape_4.setTransform(212.625,285.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjGBsIGMkTIAAFPg");
	this.shape_5.setTransform(321.2,425.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(363.1,305.5,403.3,377.6);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '7DBA697EEC238246BC8FA3EF2F9062F4',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7DBA697EEC238246BC8FA3EF2F9062F4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;