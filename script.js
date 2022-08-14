let prato=0;
let bebida=0;
let sobremesa=0;
let valorPrato = Number(0);
let valorBebida = Number(0);
let valorSobremesa = Number(0);

function selecionarPrato (elementoClicado,valor,nome) {
    
    const elementoSelecionado = document.querySelector('.pratos .selecionado');
    if (elementoSelecionado !== null) {
        elementoSelecionado.classList.remove ('selecionado');
    }
    elementoClicado.classList.add('selecionado');
    prato = nome;
    valorPrato = valor;        
    acionarBotao();      
}

function selecionarBebida (elementoClicado,valor,nome) {
 
    const elementoSelecionado = document.querySelector('.bebidas .selecionado');
    if (elementoSelecionado !== null) {
        elementoSelecionado.classList.remove ('selecionado');
    }
    elementoClicado.classList.add('selecionado');
    bebida = nome;
    valorBebida = valor;  
    acionarBotao();  
}

function selecionarSobremesa (elementoClicado,valor,nome) {

    const elementoSelecionado = document.querySelector('.sobremesas .selecionado');
    if (elementoSelecionado !== null) {
        elementoSelecionado.classList.remove ('selecionado');
    }
    elementoClicado.classList.add ('selecionado');
    sobremesa = nome;
    valorSobremesa = valor;  
    acionarBotao();    
}

function acionarBotao () { 
    if (prato !== 0 && bebida !== 0 && sobremesa !== 0) {
        const botaoAcionado = document.querySelector ('.botao');
        botaoAcionado.disabled = false;
        botaoAcionado.innerHTML = "Fechar pedido";
    }
}

function fecharPedido () {
    cliente = prompt ('Por favor, insira seu nome:');
    endereçoCliente = prompt ('E seu endereço:');

    const soma = valorPrato + valorBebida + valorSobremesa;
    const mensagem = 'Olá, gostaria de fazer o pedido:\n - Prato: '+ prato + '\n - Bebida: '+ bebida + '\n - Sobremesa: '+ sobremesa + '\n Total: R$ ' + soma.toFixed(2) + '\n \n Nome: ' + cliente + '\n Endereço: ' + endereçoCliente;
    const urldamensagempronta = encodeURIComponent(mensagem);
    const hotText = 'Fechar pedido';
    const URL = 'https://wa.me/5521984849345'+'?text='+urldamensagempronta;
    window.open(URL);
}
