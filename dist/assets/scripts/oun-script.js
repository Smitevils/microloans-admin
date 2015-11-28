$(document).ready(function() {
	$('.header__menu-button').click(function() {
		$('.header__menu-container, .header__user').toggleClass('open');
		
		$('.header__menu-container, .header__user').toggleClass('bounceInLeft');
		//
		if (!$('.header__menu-container').hasClass('open')) {
			$('aside.main-aside').removeClass('open');
			$('aside.main-aside').removeClass('bounceInLeft');
		}
	});
	$('#open-aside').click(function(event) {
		event.preventDefault();
		$('aside.main-aside').toggleClass('open');
		$('aside.main-aside').toggleClass('bounceInLeft');
	});
	//
	//табы на главной
	function hideContentMainPage() {
		$('.page-tab-container').hide();
	}
	hideContentMainPage();
	if ($('.main-page-tab').hasClass('active')) {
		var tab_number = $('.main-page-tab.active').attr('data-tab');
		hideContentMainPage();
		$('.page-tab-container[data-content="' + tab_number + '"]').show();
	}

	$('.main-page-tab').click(function() {
		$('.main-page-tab').removeClass('active'); 
		$(this).addClass('active');
		var tab_number = $(this).attr('data-tab');
		hideContentMainPage();
		$('.page-tab-container[data-content="' + tab_number + '"]').show();
	});
	//баланс - выбор платежа 
	$('.digit-payment').click(function(event) {
		$('.digit-payment').removeClass('active');
		$(this).addClass('active');
	});


	/* Слайдеры на странице Баланс */
	// Первый слайдер
	if ($('div').is('#nouislider-payment-1')) { // если на странице есть нужный слайдер то активируем его
		var slider = document.getElementById('nouislider-payment-1');
		noUiSlider.create(slider, {
			start: [0],
			step: 10000,
			range: {
				'min': 0,
				'max': 1000000
			},
			format: wNumb({
				decimals: 2,
				thousand: ' ',
				postfix: ' <span>руб.</span> ',
			})
		});
		$('#nouislider-payment-1').find('.noUi-handle.noUi-handle-lower').html("<div class='tooltip'></div>");
		var inputFormat = document.getElementById('nouislider-payment-format-1');
		slider.noUiSlider.on('update', function( values, handle ) {
			inputFormat.innerHTML  = values[handle];
			$('#nouislider-payment-1 .noUi-handle-lower .tooltip').html(values);
			$('#nouislider-payment-1 .noUi-handle-lower .tooltip span').hide()
		});
	}
	// Второй слайдер
	if ($('div').is('#nouislider-payment-2')) { // если на странице есть нужный слайдер то активируем его
		var slider2 = document.getElementById('nouislider-payment-2');
		noUiSlider.create(slider2, {
			start: [0],
			step: 10000,
			range: {
				'min': 0,
				'max': 1000000
			},
			format: wNumb({
				decimals: 2,
				thousand: ' ',
				postfix: ' <span>руб.</span> ',
			})
		});
		$('#nouislider-payment-2').find('.noUi-handle.noUi-handle-lower').html("<div class='tooltip'></div>");
		var inputFormat2 = document.getElementById('nouislider-payment-format-2');
		slider2.noUiSlider.on('update', function( values, handle ) {
			inputFormat2.innerHTML  = values[handle];
			$('#nouislider-payment-2 .noUi-handle-lower .tooltip').html(values);
			$('#nouislider-payment-2 .noUi-handle-lower .tooltip span').hide()
		});
	}
	//
	/* Слайдеры выбора платежной системы */
	if ($('div').is('#balance__payment-slider-1')) { // если на странице есть нужный слайдер то активируем его
		$('#balance__payment-slider-1').slick({
			infinite: false,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 3
		});
	}
	if ($('div').is('#balance__payment-slider-2')) { // если на странице есть нужный слайдер то активируем его
		$('#balance__payment-slider-2').slick({
			infinite: false,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 3
		});
	}
	//
	/* Окна FancyBox - для показа документов */
	if ($('div').is('.documents__open-img')) { // если на странице есть нужный элемент то вешаем клики
		$('.documents__open-img').on('click', function(event) {
			event.preventDefault();
			var url = $(this).attr('data-url');
			$.fancybox( url );
		});
	}
});