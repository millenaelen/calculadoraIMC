const btnCalcular = document.querySelector('#btn-calcular');
const btnRefazer = document.querySelector('#btn-refazer');
//console.log(btnCalcular);
//console.log(btnRefazer);

const divCalculadora = document.querySelector('.calculadora');
const divResultado = document.querySelector('.resultado');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

const infoIMC = document.querySelector('#info-imc');
const infoClassificacao = document.querySelector('#info-classificacao');


function calcularIMC() {
    //console.log('funcao acionada');

    divCalculadora.classList.add('hide'); //esconde a div
    divResultado.classList.remove('hide'); //mostra a div


    //extraindo o valor dos inputs
    //parseFloat() > converte um texto(string) em numeros reais (com casas decimais)
    let peso = parseFloat(inputPeso.value);
    let altura = parseFloat(inputAltura.value);

    //typeof variavel -> retornar o tipo de dado
    //console.log(typeof peso);
    //console.log(typeof altura);

    let imc = peso / (altura * altura);
    //console.log(imc);
    let classificacao = '';
    let cor = ''; //opcao 2 de mudar cor

    // condição //

    if (imc < 18.5) {
        classificacao ='Magreza';
        infoIMC.classList.add('blue');   //1 opção de mudar a cor
        infoClassificacao.classList.add('blue'); //opcao 1
    }

    else if (imc >= 18.5 && imc <= 24.99) {
        classificacao ='Normal';
        cor = '#00FF00';  //opcao 2 de mudar cor
    }

    else if (imc >= 25.0 && imc <= 29.99) {
        classificacao ='Sobrepeso';
        infoIMC.classList.add('yellow');   //1 opção de mudar a cor
        infoClassificacao.classList.add('yellow'); //opcao 1
    }

    else if (imc >= 30.0 && imc <= 39.99) {
        classificacao ='Obesidade';
        infoIMC.classList.add('orange');   //1 opção de mudar a cor
        infoClassificacao.classList.add('orange'); //opcao 1
    }

    else {
        classificacao ='Obesidade Grave';
        
    }

    //escrevendo dentro do HTML
    infoIMC.innerHTML = imc.toFixed(2);
    infoClassificacao.innerHTML = classificacao;
    infoIMC.style.color = cor; //opcao 2 de mudar cor
    infoClassificacao.style.color = cor; //opcao 2 de mudar cor
}


function refazerTeste() {
    //console.log('funcao acionada');

    divCalculadora.classList.remove('hide'); //mostra a div
    divResultado.classList.add('hide'); //esconde a div

    inputPeso.value = '';
    inputAltura.value = '';

    btnCalcular.removeAttribute('disabled');

}    
    

function verificarCampos() {

    //console.log('funcao acionada');

    if(inputPeso.value != '' && inputAltura.value != ''){
        btnCalcular.removeAttribute('disabled');
    }

    else{
        btnCalcular.setAttribute('disabled','true');
    }
    
}



inputPeso.addEventListener('keyup',verificarCampos);
inputAltura.addEventListener('keyup',verificarCampos);

 


btnCalcular.addEventListener('click', calcularIMC);
divResultado.addEventListener('click', refazerTeste);






