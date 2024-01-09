/*let option = "5"



do {
    option = prompt("Escolha uma das opções abaixo:\n" +
    "1 - não fara nada\n" +
    "2 - não fara nada\n" +
    "3 - não fara nada\n" +
    "4 - não fara nada\n" +
    "5 - encerra\n" 
)
switch(option) {
    case"1" : 
    alert("nada acontece")

    break
    case"2" : 
    alert("nada acontece")
    break

    case"3" : 
    alert("nada acontece")
    break

    case"4" : 
    alert("nada acontece")
    break

    case"5" : 
    alert("Encerrando...")
    break
}
} while (option !== "5") {
    alert("Encerrando...")
}

*/

let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial:"))
let opcao = ""

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"))
      break
    case "2":
      saldo -= prompt("Informe o valor a ser removido:")
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Entrada inválida.")
      break
  }
} while (opcao !== "3");