if (window.top === window) {
	var resized = false;
	var timer;
	safari.self.addEventListener("message", function(event){
		if (event.name == "wo-setsize" && !resized && event.message && (event.message.w != window.outerWidth || event.message.h != window.outerHeight)) {
			window.resizeTo(event.message.w, event.message.h);
			setTimeout(function(){
				clearTimeout(timer);
			}, 500);
			resized = true;
		}
	}, false);
	window.addEventListener("resize", function(){
		if (timer) clearTimeout(timer);
		timer = setTimeout(function(){
			safari.self.tab.dispatchMessage("wo-resized", {
				w:window.outerWidth,
				h:window.outerHeight
			});
		}, 1000);
		resized = true;
	}, false);
}