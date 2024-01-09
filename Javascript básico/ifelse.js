/*let car1 = prompt("Qual é o nome do carro1? ");
let velocidade1 = (parseFloat(prompt("Qual a sua velocidade? ")));

let car2 = prompt("Qual é o nome do carro2? ");
let velocidade2 = (parseFloat(prompt("Qual a sua velocidade? ")));

if (velocidade1 > velocidade2) {
    alert("A velocidade do " + car1 +" é : " + velocidade1 +" portanto, é maior que a velocidade do " + car2)
}
else if (velocidade2 > velocidade1) {
    alert("A velocidade do " + car2 +" é : " + velocidade2  +" portanto, é maior que a velocidade do " + car1)
}

else if (velocidade1 === velocidade2) {
    alert("Os dois carros tem a mesma velocidade !")    
} */

let personagem = prompt("Qual o nome do seu personagem?");
let power = parseFloat(prompt("Qual o poder de ataque do " + personagem));

let personagem2 = prompt("Qual é o nome do defensor?" );
let life = parseFloat(prompt("Quantos de vida ele tem? "));
let defesa = parseFloat(prompt("Quanto de defesa ele possui?"));  
let shield = prompt("Ele possui escudo? (S/N) ");

let danoCausado = 0


if (power > defesa && shield === "N") {
    danoCausado = power - defesa
}
else if (power > defesa && shield === "S") {
    danoCausado = (power - defesa) / 2
}
else if (power >= defesa) {
    danoCausado

}

alert(personagem + " causou " + danoCausado + " pontos de dano em " + personagem2)
alert(
  personagem + "\nPoder de ataque: " + power + "\n\n" +
  personagem2 + "\nPontos de vida: " + life +
  "\nPoder de defesa: " + defesa + "\nPossui escudo: " + shield
)