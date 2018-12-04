var prevScrollPos = $(window).scrollTop();
var lock = false;
var carouselInterval;

function carousel(root) {
	var
	figure = root.querySelector('figure'),
	nav = root.querySelector('nav'),
	images = figure.children,
	n = images.length,
	gap = root.dataset.gap || 0,
	bfc = 'bfc' in root.dataset,
	
	theta =  2 * Math.PI / n,
	currImage = 0
	;
		
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});
	setupNavigation();
	function setupCarousel(n, s) {
		var 
		apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;
		for (var i = 0; i < n; i++)
		images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				images[i].style.backfaceVisibility = 'hidden';
				
		rotateCarousel(currImage);
	}

	function setupNavigation() {
		nav.addEventListener('click', onClick, true);
		
		function onClick(e) {
			e.stopPropagation();
			
			var t = e.target;
			if (t.tagName.toUpperCase() != 'BUTTON')
				return;
				
			if (t.classList.contains('next')) {
				currImage++;
			}else {
				currImage--;
			}
					
			rotateCarousel(currImage);
		}				
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}

	function adjustPos(prevScrollPos){
	called = true;
	var windowHeight= $(window).height();
	if($(window).scrollTop()!=0 && $(window).scrollTop()<windowHeight){
		console.log("in");
		if($(window).scrollTop()> prevScrollPos){
			console.log(prevScrollPos);
			// prevScrollPos = windowHeight;
			$([document.documentElement, document.body]).animate({
        		scrollTop: windowHeight
    		}, 500, function(){
    			$([document.documentElement, document.body]).stop();
    		});
    		clearInterval(carouselInterval);

    		$('.navbar-inverse').stop().animate({
			backgroundColor: "#222B31",
			height: "100px"
		}, 300)
		$('.navbar-inverse a').stop().animate({
			color: "#a3bfc6"
		}, 300);

		}else{
			console.log(prevScrollPos)
			// prevScrollPos = 0
			$([document.documentElement, document.body]).stop().animate({
        		scrollTop: 0
    		}, 500, function(){
    			$([document.documentElement, document.body]).stop();
    		});
    		carouselInterval = setInterval(function(){
				rotateCarousel(currImage++)
			}, 5000)
    		$('.navbar-inverse').stop().animate({
			backgroundColor: "rgba(0,0,0,0.3)",
			height: "150px"
		}, 300)
		// $('.navbar-inverse').css("background-color", "rgba(0,0,0,0.3");
		$('.navbar-inverse a').stop().animate({
			color: "#fff"
		}, 300);
		}
		
	}else{
		$('.navbar-inverse').stop().animate({
			backgroundColor: "#222B31",
			height: "100px"
		}, 300)
		$('.navbar-inverse a').stop().animate({
			color: "#a3bfc6"
		}, 300);
	}
}

function checkPos(prevScrollPos){
	// console.log(windowHeight);
	if ($(window).scrollTop()==0) {
		
	}else{
				
	}
	// adjustPos(prevScrollPos);
}


function unlockLock(){
	lock = false;
}

var called = false;
$(document).on("scroll", function () {
	if($(window).scrollTop()>0 && $(window).scrollTop()< $(window).height()){
		lock = true;
	}else{
		lock=false;
		called=false;
	}
	if(lock==false){
		console.log("now");
		checkPos(prevScrollPos);
	}else if(lock==true && called==false){
		adjustPos(prevScrollPos);
	}
	prevScrollPos = $(window).scrollTop();	
});

adjustPos(prevScrollPos);
						
}

$('.header').load("components/carousel.html", function(){
	var
		carousels = document.querySelectorAll('.carousel');

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}

});



// checkPos();																																