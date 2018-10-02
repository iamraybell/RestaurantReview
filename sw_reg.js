//This file checks if a service worker is available. If it is, it registers the file sw.js to it.

document.addEventListener("DOMContentLoaded", function(event){
	if(navigator.serviceWorker){
		navigator.serviceWorker.register('sw.js')
		.then(function(reg){
			console.log("Service worker has been registered", reg);
		})
		.catch(function(error){
			console.log(`An error occured: ${error}`);
		})
	}
});