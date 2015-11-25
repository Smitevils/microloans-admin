$(document).ready(function() {
	$('.header__menu-button').click(function() {
		$('.header__menu-container, .header__user').toggleClass('open');
		$('.header__menu-container, .header__user').toggleClass('bounceInLeft');
	});
});