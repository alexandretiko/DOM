var oldname = prompt("(pessoa mais velha)Informe seu nome: ");
var oldyear = parsefloat(prompt("(pessoa mais velha)Informe sua idade: "));
var newname = prompt("(pessoa mais nova)Informe seu nome:");
var newyear = parsefloat(prompt("(pessoa mais nova)Informe sua idade:"));
var calc = parseFloat(alert("a diferença entre as duas idades é de: " + (oldyear - newyear) + " anos"));
var nome1 = alert("O nome da pessoa mais velha é " + oldname + " a sua idade é: " + oldyear +
            "\n\nO nome da pessoa mais nova é: " + newname + " e sua idade é: " + newyear +
            "\n\n E a diferença entre a idade é de:" +calc + " anos."
)