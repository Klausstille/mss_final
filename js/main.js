$(document).ready(function() {
	$('section#stuff a').on('click', function() {
		$('div#modal img').attr('src', $(this).attr('data-image-url') );
	})

});

		var nav = $('.navbar-fixed-top');
		var distance = $('.navbar-fixed-top').offset();

		if (distance.top >= 20 ) {
				nav.addClass('effect');
		}

		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				nav.addClass('effect');
			} else {
				nav.removeClass('effect');
			}

		/*	$('.collection-image img').waypoint(function() {
				$('.collection-image img').addClass('animated infinite pulse')
			}, {
				offset:'50%'
			});*/

		});

smoothScroll.init({
	speed:800,
	easing:'easeInOutCubic',
	offset:33,
	pagination: true, 
	responsiveFallback: false,
	loop: false, 
	updateURL: false
});
