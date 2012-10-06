safari.application.addEventListener("open", function(event){
	console.log(event);
}, false);

safari.application.addEventListener("close", function(event){
	console.log(event);
}, false);

safari.application.addEventListener("beforeNavigate", function(event){
	console.log(event);
}, false);

safari.application.addEventListener("navigate", function(event){
	console.log(event);
}, false);

safari.application.addEventListener("activate", function(event){
	console.log(event);
}, true);

safari.application.addEventListener("deactivate", function(event){
	console.log(event);
}, false);

safari.application.addEventListener("available", function(event){
	console.log(event);
}, false);

safari.application.addEventListener("beforeSearch", function(event){
	console.log(event);
}, false);
