let imoveis = []

let opcao = ""

do {
    opcao = prompt("Bem-vindo(a) ao cadastro de imóveis\n" + 
    "Total de imóveis: " + imoveis.length + "\n\n" +
    "Escolha uma opção: " +
    "\n1. Novo imóvel" + 
    "\n2. Listar imóveis" +
    "\n3. Sair"
    )
    switch(opcao){
        case"1":
            let imovel = {}

            imovel.propietario = prompt("Informe o nome do proprietário: ")
            imovel.quarto = prompt("Informe a quantidade de quartos: ")
            imovel.banheiro = prompt("Informe a quantidade de banheiros: ")
            imovel.garagem = prompt("Tem garagem? (Sim/Não)")
            if (imovel.garagem === "sim") {
                alert("Casa com garagem")
            } else(alert("não tem garagem"))

            const confirmacao = confirm(
                "Salvar este imóvel?\n" + 
                "Proprietário:" + imovel.propietario +
                "\nQuantidade de quartos: " + imovel.quarto + 
                "\nQuantidade de banheiros: " + imovel.banheiro + 
                "\nTem garagem? " + imovel.garagem
            )
            if(confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel adicionado")
            }else (alert("Voltando ao menu..."))
            break



        case"2":
        for (let i = 0; i< imoveis.length; i++ ) {
            alert(
                "Imóvel " + (i+1) +
                "\nProprietário: " + imoveis[i].propietario +
                "\nQuartos: " + imoveis[i].quarto +
                "\nBanheiros " + imoveis[i].banheiro +
                "\nTem garagem? " + imoveis[i].garagem
            )
        }

        break

    

        case"3":
            alert("Encerrando...")
        break

        default:
            alert("Opção Inválida!")
    }

} while(opcao !== "3")
