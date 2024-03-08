let idade = parseInt(prompt("Digite a sua idade"));
let mes = parseInt(prompt("Digite o mês em que você nasceu"));
let ano1 = parseInt(prompt("Digite o ano em que você nasceu"));

let dias = parseFloat(365,25);
let mes2 = parseFloat(30);
let ano2 = parseInt(2024);

let resultado = (idade * dias);
let resultado2 = (resultado / mes2);
let resultado3 = (ano2 - ano1);

console.log("Seus dias de vida: " + resultado);
console.log("Seus meses: " + resultado2);
console.log("Seus anos: " + resultado3);