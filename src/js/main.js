$(document).ready(function (){

  $('.vkf-modal-open').click(function(e) {
	  e.preventDefault();
	  var modalOpen = $(this).attr('href');
	  $('.vkf-modal').hide();
	  $(modalOpen).fadeIn('fast');
	  $('html, body').css('overflow','hidden');
	});

	$('.vkf-modal__wrapper__content__close').click(function(e) {
	  e.preventDefault();
	  $('html, body').css('overflow','');
	  $('.vkf-modal').fadeOut('fast');
	});

});

function emsFocusIpt(vkf) {
	$(vkf).removeClass('vkf-error');
}

function Contato(){

	d = document.form;
	erro = false;
	emsElement = '';
							
	if($('#your-name').val()==""){
		erro=true; 
		emsElement += '#your-name, ';
	}
	if($('#your-email').val()==""){
		erro=true;
		emsElement += '#your-email, ';
	}
	if($('#your-message').val()==""){
		erro=true; 
		emsElement += '#your-message';
	}
	if (erro) {
		$(emsElement).addClass('vkf-error');
	} else {
		$('form a').html('Enviando...').attr('disabled','disabled');
		d.submit();
	}
}