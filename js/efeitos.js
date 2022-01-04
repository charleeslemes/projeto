

$(function(){


	/*fazendo script do menu mobile*/ 
	abrirMenu();
	function abrirMenu(){
		var botaoMobile = $('nav.menu-mobile');
		var slideBotaoMenu = $('nav.menu-mobile ul');
		botaoMobile.click(function(e){
			slideBotaoMenu.slideToggle();
		})
	}

	/*finalizando mobile*/ 



	function formularioEnviadoGreen(sucesso){
		sucesso.css('border','2px solid green');
	

		
	}


	function campoInvalido(invalido){
		invalido.css('border','2px solid red');
		invalido.css('color','red');
		invalido.val('campo Inválido');
	}

	function resetInvalido(invalido){
		invalido.css('border','1.8px solid #db2b2b');
		invalido.css('color','black');
		invalido.val('');
	}

	$('input[type=text], textarea').focus(function(){
		resetInvalido($(this));
	});


	$('form#formulario').submit(function(e){
		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var email = $('input[name=email]').val();
		var telefone = $('input[name=telefone]').val();
		var mensagem = $('textarea').val();


		if(validadoNome(nome) == false){
			campoInvalido($('input[name=nome]'));
		}
		else if(validadoEmail(email) == false){
			campoInvalido($('input[name=email]'));
		}

		else if(validadoTelefone(telefone) == false){
			campoInvalido($('input[name=telefone]'));
		}

		else if(validadoMensagem(mensagem) == false){
			campoInvalido($('textarea'));
		}

		else{
			formularioEnviadoGreen($('input[type=text]'));
			formularioEnviadoGreen($('textarea'));


			$(window).scroll(function(){
				$('input[type=text]').css('border','1.8px solid #db2b2b');
				$('textarea').css('border','1.8px solid #db2b2b');
			})

		}

	})



	function validadoNome(nome){
		if(nome == ''){
			return false;
		}
	}


	function validadoEmail(email){
		if(email == ''){
			return false;
		}

		if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
			return false;
		}

	}


	function validadoTelefone(telefone){
		if(telefone == ''){
			return false;
		}

		if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
			return false;
		}

	}


	function validadoMensagem(mensagem){
		if(mensagem == ''){
			return false;
		}
	}



	var formTelefone = $('.formulario-wraper input[name=telefone]');

	formTelefone.mask('(99)99999-9999');



	

	return false;

})