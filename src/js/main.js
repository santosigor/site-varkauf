$(document).ready(function (){

  $('.vkf-modal-open').click(function(e) {
	  e.preventDefault();
	  var modalOpen = $(this).attr('href');
	  $('.vkf-modal').hide();
	  $(modalOpen).fadeIn('fast');
	  $('html, body').css('overflow','hidden');
	});

	$('.vkf-modal__close').click(function(e) {
	  e.preventDefault();
	  $('html, body').css('overflow','');
	  $('.vkf-modal').fadeOut('fast');
	});

});