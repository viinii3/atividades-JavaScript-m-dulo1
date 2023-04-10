/* 
    faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a 
    sua média e a sua classificação conforme a tabela abaixo.

    média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação
    - Média entre 5 e 7, recuperação
    - Média acima de 7, passou de semestre
*/

const nota1 = 5;
const nota2 = 8;
const nota3 = 10;

const mediaNota = (nota1 + nota2 + nota3) / 3
console.log(mediaNota.toFixed(1))

if (mediaNota > 7) {
    console.log('Aprovado')
} else if (mediaNota >= 5 && mediaNota <= 7) {
    console.log('Recuperação')
} else {
    console.log('Reprovado')
}
