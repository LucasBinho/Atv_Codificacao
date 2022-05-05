var selecionarCifra = document.getElementById('cesar');
var selecionarBase = document.getElementById('base');
var deslocamento = document.getElementById('deslocamento');
var opcao = document.querySelector('.codificar');
var opcao2 = document.querySelector('.decodificar');
var botao = document.getElementById('botao');
var resposta = document.getElementById('resposta');


//criação do deslocamento
selecionarCifra.addEventListener("click", function(){
    deslocamento.innerHTML = 'Selecione um deslocamento: <br> <input id="incremento" type ="number"></input> <br> <br>'
    
})

selecionarBase.addEventListener("click", function(){
    deslocamento.innerHTML = ''
    
})

//criação do botão e ação do botão de codificar
opcao.addEventListener('click', function(){
    botao.innerHTML = '<button id="clique">Codificar</button> <br> <br>';
    var mensagem = document.querySelector('#texto').value.toUpperCase();
    var clicar = document.querySelector('#clique');
    var stringResposta = ""
    //ação do botão
    clicar.addEventListener('click', function(){
        event.preventDefault();
        if(selecionarCifra.checked == false) {
            resposta.innerHTML = `<p>Mensagem codificada:</p> <p>${btoa(mensagem)}</p> <p>Por favor, atualize a página para usar novamente.</p>`
        } else {
            var incremento = Number(document.querySelector('#incremento').value);
            
            for (i = 0; i < mensagem.length; i++) {
                if(mensagem.charCodeAt(i) < 65 || mensagem.charCodeAt(i) > 90) {
                    //qualquer elemento que não seja do A ao Z:
                    stringResposta += mensagem(i)
                } else {
                    var novaLetra = mensagem.charCodeAt(i) + incremento
                }
                while(novaLetra > 90) {
                    //código para as ultimas letras do alfabeto entrar em looping e voltar para o início (90 é a ultima letra)
                    novaLetra = (novaLetra - 90) + 64
                }
                stringResposta += String.fromCharCode(novaLetra)
            }
            resposta.innerHTML = `<p>Mensagem codificada:</p> <p>${stringResposta}</p> <p>Por favor, atualize a página para usar novamente.</p>`
        }
        
    })
    
})




opcao2.addEventListener('click', function(){
    botao.innerHTML = '<button id="clique">Decodificar</button> <br> <br>';
    var mensagem = document.querySelector('#texto').value.toUpperCase();
    var clicar = document.querySelector('#clique');
    var stringResposta = ""
    //ação do botão
    clicar.addEventListener('click', function(){
        event.preventDefault();
        if(selecionarCifra.checked == false) {
            resposta.innerHTML = `<p>Mensagem decodificada:</p> <p>${atob(mensagem)}</p> <p>Por favor, atualize a página para usar novamente.</p>`
        } else {
            var incremento = Number(document.querySelector('#incremento').value);
            
            for (i = 0; i < mensagem.length; i++) {
                if(mensagem.charCodeAt(i) < 65 || mensagem.charCodeAt(i) > 90) {
                    //qualquer elemento que não seja do A ao Z:
                    stringResposta += mensagem(i)
                } else {
                    var novaLetra = mensagem.charCodeAt(i) - incremento
                }
                while(novaLetra < 65) {
                    //código para as primeiras letras do alfabeto entrar em looping e voltar para o início (65 é a primeira letra)
                    //se for menor que 65, vou pegar a nova letra e somar a quantidade de letras do alfabeto(26) pro looping acontecer
                    novaLetra = novaLetra + 26
                }
                stringResposta += String.fromCharCode(novaLetra)
            }
            resposta.innerHTML = `<p>Mensagem decodificada:</p> <p>${stringResposta}</p> <p>Por favor, atualize a página para usar novamente.</p>`
        }
        
    })
    
})


