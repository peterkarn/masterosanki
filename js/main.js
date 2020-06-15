$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 1,
		speed: 500,
		easing: 'ease',
		centerMode: true,
		infinite: true,
	});
	$('.progress__body').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: false,
		slidesToShow: 1,
		speed: 500,
		centerMode: true,
		infinite: true,
		fade: true,
		cssEase: 'linear'

	});
	$('.down').click(function () {
		var $input = $(this).parent().parent().find('.counter__text');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.up').click(function () {
		var $input = $(this).parent().parent().find('.counter__text');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});


	$(".descr__item-point").animated("zoomInUp");
	$(".family__wrap").animated("zoomInUp");

	$('.icon-menu').click(function () {
		$(this).toggleClass('icon-menu_active');
		$('.header__wrapper').toggleClass('header__wrapper_active');
	});

	$(window).on('load resize', function () {
		if ($(window).width() < 767) {
			$('.reasons__body:not(.slick-initialized)').slick({
				centerMode: true,
				dots: true,
				infinite: true,
				speed: 100,
				slidesToShow: 1,
			});
		} else {
			$(".reasons__body.slick-initialized").slick("unslick");
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) {
			$('header').addClass("sticky");
		} else {
			$('header').removeClass("sticky");
		}
	});
	// плавное перемещение страницы к нужному блоку
	$("a.go").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top - 90;
		$("body,html").animate({
			scrollTop: destination
		}, 800);
	});

	$('.header__wrapper a').click(function () {
		$('.header__wrapper').removeClass('header__wrapper_active');
		$('.icon-menu').removeClass('icon-menu_active');
	});
});
