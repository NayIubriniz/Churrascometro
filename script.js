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
    button.addEventListener('click', () =>{  
    
    let qtdAdultos = adultosInput.value;
    let qtdCriancas = criancasInput.value;
    let duracao = duracaoInput.value;

    let qtdCarne =  carnePorPessoa(duracao) * qtdAdultos + (carnePorPessoa(duracao) / 2 * qtdCriancas);
    let qtdCerveja = cervejaPorPessoa(duracao) * qtdAdultos ;
    let qtdBebidas = bebidaPorPessoa(duracao) * qtdAdultos + (bebidaPorPessoa(duracao) / 2 * qtdCriancas);


    resultado.innerHTML = `<p><span>${qtdCarne}g</span> de Carne</P>`;
    resultado.innerHTML += `<p><span>${qtdCerveja}ml</span> de Cerveja</p>`;
    resultado.innerHTML += `<p><span>${qtdBebidas}ml</span> de Bebidas</p>`;
})
    

function carnePorPessoa(duracao){
        if(duracao >= 6){
            return 650;
        }else{
            return 400;
        }
    }
    function cervejaPorPessoa(duracao){
        if(duracao >= 6){
            return 2000;
        }else{
            return 1200;
        }
    }
    function bebidaPorPessoa(duracao){
        if(duracao >= 6){
            return 1500;
        }else{
            return 1000;
        }
    }

}
calcular();