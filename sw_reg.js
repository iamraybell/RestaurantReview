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