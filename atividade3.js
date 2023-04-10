/* 
    Elabore um algoritimo que calcule oque deve ser pago por um produto, considerando o preço normal de etiqueta
    e escolha da condição de pagamento
    Ultilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo
    adequado

    Codigo Condição de pagamento:
    1- À vista Débito "recebe 10% de desconto"
    2- À vista no Dinheiro ou Pix "recebe 15% de desconto"
    3- Em duas vezes "preço normal da etiqueta sem juros"
    4- Acima de duas vezes "preço normal de etiqueta mais juros de 10%"
*/

const produto = 100;
const formaDePagamento = 4; // 1 Debito, 2 PIX ou dinheiro, 3 em duas vezes, 4 acima de duas vezes

if (formaDePagamento === 1) {
    console.log(produto - (produto * 0.1));
} else if (formaDePagamento === 2) {
    console.log(produto - (produto * 0.15));
} else if (formaDePagamento === 3) {
    console.log(produto / 2);
} else {
    console.log(produto / 3 + (produto * 0.1));
}