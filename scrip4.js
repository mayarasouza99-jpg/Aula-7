/*
Solicitar a entrada de um número inteiro
Mostrar o numero digitado e ao lado
Mostra se o número é PAR ou ÍMPAR
Usar tenário
7.8 é par ou ímpar?
*/
const teste = document.querySelector(".teste");
const num = parseInt(prompt("Digite um número inteiro"))
let msg = (num%2 == 0) ? "PAR" : "ÍMPAR"
teste.innerHTML=`O número ${num} é ${msg};`
document.querySelector("h1").style.color="blue";
document.querySelector("body").style.backgroundColor="gray"
