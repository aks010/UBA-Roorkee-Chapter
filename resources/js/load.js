var $window = $(window);

function isScrolledIntoView($elem, $window) {
	console.log($elem);
	var docViewTop = $window.scrollTop();
	var docViewBottom = docViewTop + $window.height();

	var elemTop = $elem.offset().top;
	var elemBottom = elemTop + $elem.height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function bindOnView(element, handler){
	$(document).on("scroll", function () {
		if (isScrolledIntoView($(element), $window)) {
			handler(element);
		}
	});
}



function loadingShow(loadtext=''){
	if(loadtext==''){
		$('#loading-screen').fadeIn(50);
	}
}

function loadingHide(){
	$('#loading-screen').fadeOut(50);
}

function loadPage(name){
	loadingShow();
	switch (name) {
		case "home":
			$('.content').load("components/home.html");
			break;
		default:
			// statements_def
			break;
	}
	loadingHide();

}

function bindFooter(){
	$('.fa-angle-double-up').on("click", function(){
		$('.extra').css("height", "200px");
		$('.collab').show(450);
		$([document.documentElement, document.body]).animate({
        		scrollTop: $(document).height()
    		}, 500, function(){
    			$([document.documentElement, document.body]).stop();
    		});
		$('.bottom .fa-angle-double-up').hide();
		$('.bottom .fa-angle-double-down').show();
	})

	$('.fa-angle-double-down').on("click", function(){
		$('.collab').hide(450);
		$('.extra').animate({
			height: "0px"
		})
		$('.bottom .fa-angle-double-down').hide();
		$('.bottom .fa-angle-double-up').show();
	})
}

