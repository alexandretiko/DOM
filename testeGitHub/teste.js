function addName() {
    const contactSection = document.getElementById('test-name')

    const h2 = document.createElement('h2')
    h2.innerText = 'Seus dados'

    const ul = document.createElement('ul')

    const nomeLi = document.createElement('li')
    nomeLi.innerText = 'nome: '

    const nomeInput = document.createElement('input')
    nomeInput.type = 'text'
    nomeInput.name = 'nome'

    nomeLi.appendChild(nomeInput)
    ul.appendChild(nomeInput)

    contactSection.append(h2, ul)
}