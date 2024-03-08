let nota1 = parseFloat(prompt("Digite sua primeira nota!"));
let nota2 = parseFloat(prompt("Digite sua segunda nota!"));
let nota3 = parseFloat(prompt("Digite sua terceira nota!"));

let peso1 = parseFloat(2);
let peso2 = parseFloat(3);
let peso3 = parseFloat(5);

let resultado = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)

if (resultado >= 70) {
    alert("O aluno passou com média " + resultado); 
}   else {
    alert("O aluno reprovou com média " + resultado);
}