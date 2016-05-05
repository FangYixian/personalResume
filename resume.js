var index = 0;

$(function(){
var switchLength=$(".section").height();
console.log(switchLength);

var wrapper=$(".wrapper");
var canScroll =true;
var pages = $("#pageSwitch li");

$("#pic").css({
	"width":$("#pic").height()
});

function pageHandler(){
	pages.eq(index).addClass("active").siblings().removeClass("active");
}

$("#pageSwitch #list-0").bind("click",function(){
	index=0;
	pages.eq(index).addClass("active").siblings().removeClass("active");
	wrapper.css({
		"transition":"all 1000ms ease",
		"transform":"translate(0px,0px)"
	});
});

$("#pageSwitch #list-1").bind("click",function(){
	index=1;
	pages.eq(index).addClass("active").siblings().removeClass("active");
	wrapper.css({
		"transition":"all 1000ms ease",
		"transform":"translate(0px,-"+switchLength+"px)"
	});
});

$("#pageSwitch #list-2").bind("click",function(){
	index=2;
	switchLength2=2*switchLength;
	pages.eq(index).addClass("active").siblings().removeClass("active");
	wrapper.css({
		"transition":"all 1000ms ease",
		"transform":"translate(0px,-"+switchLength2+"px)"
	});
});

$(document).bind("mousewheel DOMMouseScroll", function(event){
	event.preventDefault();
	var value = event.originalEvent.wheelDelta || -event.originalEvent.detail;
	var delta = Math.max(-1, Math.min(1, value));
	if(canScroll){
		if (delta < 0) {
			if(index<2){
				index++;
			}
			var elem=$("#section-"+index);
			scrollPage(elem);
		}else {
			if(index){
				index--;
			}
			var elem=$("#section-"+index);
			scrollPage(elem);
		}
	}
	return false;
});

function scrollPage(element){
	var dest = element.position();

	if(typeof dest === 'undefined'){ return; }
	
	canScroll =false;
	
	traslate = "0px, -"+dest.top+"px, 0px";		
	wrapper.css({
		"transition":"all 1000ms ease",
		"transform":"translate3d("+traslate+")"
	});
	wrapper.on("transitionend",function(){
		canScroll = true;
	});
	if (index>=2||index<=0) {canScroll=true;}
	element.addClass("active").siblings().removeClass("active");
	pageHandler();
}

});