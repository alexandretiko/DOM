let velocidade = parseFloat(prompt("Insira a velocidade :"));

let mm = velocidade /5;
let cm = velocidade / 2.5;
let dc = velocidade / 2;
let dcc = velocidade * 2;
let hec = velocidade / 2.5;
let km = velocidade * 5;

let swi = prompt("Escolha em Qual tipo de medida você quer medir: " + "\n"+
    "1 - milimetro\n" +
    "2 - centimetro\n" +
    "3 - decimetro\n" +
    "4 - decâmetro\n" +
    "5 - hectômetro\n" +
    "6 - quilometro\n"

)   


switch (swi) {
    case"1":
    alert("Sua velocidade em milimetro é: : " + mm)

    brake
    

    case"2":
    alert("Sua velocidade em centimetro é: " + cm)

    brake

    case"3":
    alert("Sua velocidade em  decimetro é: " + dc)
    brake

    case"4":
    alert("Sua velocidade em decâmetro é: " + dcc)
    brake

    case"5":
    alert("Sua velocidade em hectômetro é:: " + hec)
    brake

    case"6":
    alert("Sua velocidade em quilometro é:: "+ km)
    brake

    default : 
    alert("Error404")


}

