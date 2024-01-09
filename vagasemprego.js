let opcao = ""
const vagas =[]

function listarVagas() {
    const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
      textoFinal += indice + ". "
      textoFinal += vaga.nome
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
      return textoFinal
    }, "")
  
    alert(vagasEmTexto)}

function criarVaga(){
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe um descrição para a vaga:")
    const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")
  
    const confirmacao = confirm(
      "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )
  
    if (confirmacao) {
      const novaVaga = { nome, descricao, dataLimite, candidatos: [] }
      vagas.push(novaVaga)
      alert("Vaga criada.")
    }
  }

function vizualizarVaga(){
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    const vaga = vagas[indice]
  
    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")
  
    alert(
      "Vaga nº " + indice +
      "\nNome: " + vaga.nome +
      "\nDescrição: " + vaga.descricao +
      "\nData limite: " + vaga.dataLimite +
      "\nQuantidade de candidatos: " + vaga.candidatos.length +
      "\nCandidatos inscritos:" + candidatosEmTexto
    )
    
}

function inscreverVaga(){
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]
  
    const confirmacao = confirm(
      "Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
      "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
  
    if (confirmacao) {
      vaga.candidatos.push(candidato)
      alert("Inscrição realizada")
    }
}

function excluirVaga(){ 
     const indice = prompt("Informe o índice da vaga que deseja excluir:")
const vaga = vagas[indice]

const confirmacao = confirm(
  "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
  "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
)

if (confirmacao) {
  vagas.splice(indice, 1)
  alert("Vaga excluída.")
}
    
}

do {
    opcao = prompt("Escolha uma funcionalidade do sistema" + 
    "\n1 - Listar vagas disponíveis" + 
    "\n2 - Criar uma nova vaga" + 
    "\n3 - Vizualizar uma vaga" +
    "\n4 - Inscrever um candidato em uma nova vaga" +
    "\n5 - Excluir uma vaga" +
    "\n6 - Sair")

    switch (opcao){
        case"1":
        listarVagas()
        
        break
        case"2":
        criarVaga()

        break
        case"3":
        vizualizarVaga()

        break
        case"4":
        inscreverVaga()

        break
        case"5":
        excluirVaga()

        break
        case"6":
            alert("Saindo do sistema...")
            break
        
        default:
            alert("Erro")


    }

}while(opcao !== "6")