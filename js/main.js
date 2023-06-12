$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#celular').mask('(00) 00000-0000')


    
    $('form').validate({
        rules: {
            nome:{required: true},                      /* "required=true"' => obrigatório = verdadeiro / indicar o name do campo. Não funciona com id ou classe*/
            email:{required: true, email: true},        /* para o email há uma validação customizada*/
            celular:{required: true},
            telefone:{required: true},
            },
            messages: {
                nome:'*',
                email: '*',
                telefone: '*',
                celular: '*',},
            
            SubmitHandler: function(form){                                  //Enviando o formulário
                console.log(form)
            },
            invalidHandler: function(evento, validador){
                let camposFaltando = validador.numberOfInvalids();          //armazenando o numero de campos faltando preenchimento
                if(camposFaltando){
                    alert(`${camposFaltando} campo(s) obrigatório(s) está(ão) sem preechimento`)}
        }
    })
});