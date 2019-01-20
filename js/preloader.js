document.body.onload = function() {

	setTimeout(function() {
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('loading-done')){
			preloader.classList.add('loading-done');
		}
	}, 300);

}