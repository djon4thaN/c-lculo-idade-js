let idade = parseInt(prompt("Digite a sua idade"))
let mes = parseInt(prompt("Digite o mês em que você nasceu"))
let ano1 = parseInt(prompt("Digite o ano em que você nasceu"))

dias = 365,25
mes = 30
ano2 = 2024

let resultado = (idade * dias)
let resultado2 = (resultado / mes)
let resultado3 = (ano2 - ano1)

console.log("Seus dias de vida: " + resultado)
console.log("Seus meses: " + resultado2)
console.log("Seus anos: " + resultado3)