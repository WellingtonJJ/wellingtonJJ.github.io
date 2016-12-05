
$(function() {
    
     $("#limpar").click(function(){$("#formfaleconosco")[0].reset();});
  
	 $("#cancelar").click(function(){window.location.href='index.html';});
    /*Regras de validação dos campos do form - biblioteca JQUERY VALIDATION*/
    $("#formfaleconosco").validate({
        rules: {
            nomefaleconosco:{required: true, minlength: 5},
			idade:{required: true},
			assunto:{required: true, minlength: 5},
            emailfaleconosco:{required: true, minlength: 8}
        },
    
        messages: {
            nomefaleconosco:{required: "Informe o seu nome", 
                  minlength:"Nome curto demais"},
            emailfaleconosco:{required: "Informe o email", minlength:"Email inválido"},
            assunto:{required: "Nos diga o assunto do seu contato", minlength: "Nos diga o assunto do seu contato"},
			mensagemconosco:{required:"Nao esqueça de mandar a mensagem!"}
			
        },
    
        //Monta a mensagem em uma caixa separada
        errorLabelContainer: $("#bugs"),
        errorElement: "li"
    });
 
});