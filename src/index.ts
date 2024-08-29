import promptSync from "prompt-sync";
const prompt = promptSync();

/*Exercício 1: Implementar em TypeScript um programa que, a partir da cotação do dólar e do valor em reais, calcula o valor equivalente em dólares.
No console,como um alerta e no documento do HTML*/

let cotacaoAtual: number = Number(prompt("Informe a cotação do Dólar:"));

let carteira: number = Number(prompt("Informe o valor que tem:"));

let opcao: number = Number(prompt("Informe o tipo de conversão: \n1 - Real -> Dólar -> \n2 - Dólar -> Real ->"));

let valorConvertido: number;
if (opcao == 2) {
    valorConvertido = cotacaoAtual * carteira;
} else {
    valorConvertido = carteira /  cotacaoAtual;
}
alert(valorConvertido);

/*Exercício 2: Faça um programa que leia dois números e informe qual é o maior.
Ex. 
numero1 = 20
numero2 = 30
resposta = ‘O número2 é o maior’*/

let numero1: number = Number(prompt("Informe o número 1"));
let numero2: number = Number(prompt("Informe o número 2"));

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior`);
} else {
    console.log(`O número ${numero2} é maior`);
}

/*Exercício 3: Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6) em cada uma das provas.*/

let prova1:number = Number(prompt ("Informe a nota da prova 1 :"));
let prova2:number = Number(prompt ("Informe a nota da prova 2:"));

if (prova1 >= 6) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}