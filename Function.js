let opcao = ""

function triangulo() {
    const base = parseFloat(prompt("informe a base do triângulo:"))
    const altura = parseFloat(prompt("informe a altura do triângulo:"))
    const resposta1 = alert("O valor final é: " + base* altura / 2)
    return resposta1
}

function retangulo() {
    const base = parseFloat(prompt("informe a base do retângulo"))
    const altura = parseFloat(prompt("informe a altura do retângulo:"))
    const resposta2 = alert("O valor final é: " + base * altura)
    return resposta2
}

function quadrado () {
    const lado = parseFloat(prompt("informe o lado do quadrado:"))
    const resposta3 = alert("O valor final é: " + lado * lado)
    return resposta3
}

function trapezio () {
    const baseMaior = parseFloat(prompt("informe a base maior do trapézio"))
    const baseMenor = parseFloat(prompt("informe a base menor do trapézio"))
    const altura = parseFloat(prompt("informe a altura do trapézio"))
    const resposta4 = alert("O valor final é: " + (baseMaior + baseMenor) * altura / 2)
    return resposta4
}

function circulo() {
    const raio = parseFloat(prompt("informe o raio do círculo:"))
    const pi = 3.14
    const resposta5 = alert("O valor final é: " + (raio* raio) * pi)
    return resposta5
}
do {
    opcao = prompt("Escolha as opções de calculos geométricos abaixo:" + 
    "\n1- Calcular a área do triângulo" + 
    "\n2- Calcular a área do retângulo" +
    "\n3- Calcular a área do quadrado" +
    "\n4- Calcular a área do trapézio" +
    "\n5- Calcular a área do circulo" +
    "\n6- Sair do programa"    )

    switch(opcao) {
        case"1":
        triangulo()

        break

        case"2":
        retangulo()

        break

        case"3":
        quadrado()

        break

        case"4":
        trapezio()

        break

        case"5":
        circulo()

        break

        case"6":
        alert("Saindo")

        break

        default:
            alert("Incorreto")

            break
    }
}while(opcao !== "6")

