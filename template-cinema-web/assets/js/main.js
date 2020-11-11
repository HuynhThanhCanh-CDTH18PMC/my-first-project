(function ($) {
	"use strict";

	/*----------------------------
	  Responsive menu Active
	  ------------------------------ */
	// $(".mainmenu ul#primary-menu").slicknav({
	// 	allowParentLinks: true,
	// 	prependTo: '.responsive-menu',
	// });

	/*----------------------------
	  START - Scroll to Top
	  ------------------------------ */
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 600) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate({
				scrollTop: 0,
			},
			2000
		);
		return false;
	});
	$(".menu-area ul > li > .theme-btn").on("click", function () {
		$(".buy-ticket").show();
		return false;
	});
	$(".buy-ticket .buy-ticket-area > a").on("click", function () {
		$(".buy-ticket").hide();
		return false;
	});
	$(".login-popup").on("click", function () {
		$(".login-area").show();
		return false;
	});
	$(".login-box > a").on("click", function () {
		$(".login-area").hide();
		return false;
	});

	/*----------------------------
	  START - Slider activation
	  ------------------------------ */
	$(".hero-area-slider").slick({
		responsive: [
			{
			  breakpoint: 1450,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				speed: 1500,
				swipeToSlide: true,
				pauseOnHover: true,
				arrows: true,
				touchMove: true,
				dots: true,
				centerMode: true,
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				speed: 1500,
				swipeToSlide: true,
				pauseOnHover: true,
				arrows: false,
				touchMove: true,
				dots: true,
				centerMode: true,
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				speed: 1500,
				swipeToSlide: true,
				pauseOnHover: true,
				arrows: false,
				touchMove: true,
				dots: true,
				centerMode: true,
			  }
			}
		  ]
	});

	$(".event-slider").slick({
		responsive: [
			{
			  breakpoint: 1450,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				speed: 1500,
				swipeToSlide: true,
				pauseOnHover: true,
				arrows: true,
				touchMove: true,
				dots: true,
				centerMode: true,
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				speed: 1500,
				swipeToSlide: true,
				pauseOnHover: true,
				arrows: false,
				touchMove: true,
				dots: true,
				centerMode: true,
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 3000,
				speed: 1500,
				swipeToSlide: true,
				pauseOnHover: true,
				arrows: false,
				touchMove: true,
				dots: true,
				centerMode: true,
			  }
			}
		  ]
	});

	/*----------------------------
	START -MenuToggle
	------------------------------ */
	$(".slicknav_btn").click(function () {
		$(".slicknav_nav").slideToggle();
	});
	$(".menu-phim").click(function () {
		$(".toggle-phim").slideToggle();
	});
	$(".menu-loai-phim").click(function () {
		$(".toggle-loai-phim").slideToggle();
	});
	/*----------------------------
	START - videos popup
	------------------------------ */
	$(".popup-youtube").magnificPopup({
		type: "iframe",
	});
	//iframe scripts
	$.extend(true, $.magnificPopup.defaults, {
		iframe: {
			patterns: {
				//youtube videos
				youtube: {
					index: "youtube.com/",
					id: "v=",
					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
			},
		},
	});

	/*----------------------------
	  START - Isotope
	  ------------------------------ */
	jQuery(".portfolio-item").isotope();
	$(".portfolio-menu li").on("click", function () {
		$(".portfolio-menu li").removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr("data-filter");
		$(".portfolio-item").isotope({
			filter: selector,
		});
	});

	/*----------------------------
	  START - Preloader
	  ------------------------------ */
	// jQuery(window).load(function () {
	// 	jQuery("#preloader").fadeOut(500);
	// });
})(jQuery);