
/* faça um programa para calcular o valor de uma viagem.

voce tera 5 variaveis. Sendo elas:
- preço do etanol;
- preço da gasolina;
- o tipo de combustivel que esta no seu carro;
- valor medio de gasto de combustivel do carro em KM;
- distancia em KM da viagem;

imprima no console o valor que será gasto para realizar esta viagem. */

const preçoEtanol = 5.79;
const gastoCombustivel = 10;
const distancia = 100;
const preçoGasolina = 6.66;
const tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosViagem * preçoEtanol;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosViagem * preçoGasolina;
    console.log(valorGasto.toFixed(2))
}

const litrosViagem = distancia / gastoCombustivel;

console.log(valorGasto.toFixed(2))

