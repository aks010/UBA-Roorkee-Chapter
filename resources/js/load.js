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
	$('.header').html('')
	$('.content').html('')
	$('.header').hide();
	switch (name) {
		case "home":
			$('.header').show()
			$('.content').load("components/home.html");
			break;

			case "initiatives":
				$('.content').html('')
				$('.content').load("components/initiatives.html");
				break;		

				case "villages":
					$('.content').html('')
					$('.content').load("components/villages.html");
					break;	
					default:
						// statements_def
						break;
					}
					if(homeLoad == false){
						loadingHide();
					}else{
						console.log("loading");
					}


				}

				function bindFooter(){
					$('.fa-angle-double-up').on("click", function(){
						// $('.extra').css("height", "200px");
						// $('.collab').show(450);
						$([document.documentElement, document.body]).animate({
							scrollTop: 0
						}, 500, function(){
							$([document.documentElement, document.body]).stop();
						});
						// $('.bottom .fa-angle-double-up').hide();
						// $('.bottom .fa-angle-double-down').show();
					})
					$('.contact-us a').on("click", function(){
						// $('.extra').css("height", "200px");
						// $('.collab').show(450);
						$([document.documentElement, document.body]).animate({
							scrollTop: $(document).height()
						}, 500, function(){
							$([document.documentElement, document.body]).stop();
						});
						// $('.bottom .fa-angle-double-up').hide();
						// $('.bottom .fa-angle-double-down').show();
					})
				}

				function bindContact(){
					alert('yo')
					$([document.documentElement, document.body]).animate({
						scrollBottom: 0
					}, 500, function(){
						$([document.documentElement, document.body]).stop();
					});
				}

