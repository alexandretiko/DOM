/*let number = parseFloat(prompt("Indique o numero a ser multiplicado: "));
let resultado = ""

for(let i = 1 ; i <= 20 ; i++ ) {
    resultado += " -> " +number + " x " + i + "=" + (number * i) + "\n"
}

alert("O resultado é : "+ resultado + "\n\n" )*/

let word = prompt   ("Insira sua palavra aqui : ")
let inverted = ""
for(let i = word.length - 1; i >=0; i--) {
    inverted += word[i]
}

if (word === inverted) {
    alert(word +" é um palindromo")
}else {alert("não é um palindromo : " +"\n" + word + "!==" + inverted)}