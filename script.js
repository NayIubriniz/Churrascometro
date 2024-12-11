//Carne  - 400 gr por pessoa + de 6 horas - 650
//Cerveja - 1200ml por pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

//criancas valem 0,5

let adultosInput = document.getElementById('adultos');
let criancasInput = document.getElementById('criancas');
let duracaoInput = document.getElementById('duracao');
let button = document.getElementById('btn');

let resultado = document.getElementById('resultado');

function calcular(){

    //Obtendo valores dos inputs 
    let qtdAdultos = parseInt(adultosInput.value) || 0;
    let qtdCriancas = parseInt(criancasInput.value) || 0;
    let duracao = parseInt(duracaoInput.value) || 0;

    //Calculo das quantidades
    let qtdCarne =  carnePorPessoa(duracao) * qtdAdultos + (carnePorPessoa(duracao) / 2 * qtdCriancas);
    let qtdCerveja = cervejaPorPessoa(duracao) * qtdAdultos ;
    let qtdBebidas = bebidaPorPessoa(duracao) * qtdAdultos + (bebidaPorPessoa(duracao) / 2 * qtdCriancas);


    resultado.innerHTML = `<p><span>${(qtdCarne / 1000).toFixed(2)}kg:</span> de Carne</p>`;
    resultado.innerHTML += `<p><span>${Math.ceil(qtdCerveja / 355)}ml:</span> de Latas de Cerveja (355ml)</p>`;
    resultado.innerHTML += `<p><span>${Math.ceil(qtdBebidas / 2000)}ml:</span> de Garrafas de Refri 2L</p>`;

    

function carnePorPessoa(duracao){
       return duracao >= 6 ? 650 : 400;
    }
    function cervejaPorPessoa(duracao){
      return duracao >= 6 ? 2000 : 1200;
    }
    function bebidaPorPessoa(duracao){
     return duracao >= 6 ? 1500 : 1000;
        }
    }

button.addEventListener('click',calcular);