function createLabel(text, htmlFor) {
    const label = document.createElement("label");
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput(id, value, name, type = "text" , placeholder = "") {
    const input = document.createElement("input")
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder;
    return input
}


const addTech = document.getElementById("addTech")


const form = document.getElementById("form");

const developers = []
let list = 0

addTech.addEventListener("click", function(eve) {
    const stackInputs = document.getElementById("stackInputs")

    const newLine = document.createElement("li")
    const lineIndex = list
    list++
    newLine.id = "inputLine- " + lineIndex
    newLine.className = "inputLine"
    
    const techNameLabel = createLabel("nome: ", "techName-" + lineIndex)
    const techNameInput = createInput("techName-" + lineIndex, null, "techName")

    const expLabel = createLabel("\nexperiência: ")
    const id1 = "expRadio-" + lineIndex + ".1"
    const expRadio1 = createInput(id1, "0-2 anos ", "techExp- " + lineIndex, "radio")
    const expLabel1 = createLabel("0-2 anos  ", id1 )

    const id2 = "expRadio-" + lineIndex + ".1"
    const expRadio2 = createInput(id2, "3-5 anos ", "techExp- " + lineIndex, "radio")
    const expLabel2 = createLabel("3-5 anos  ", id2 )

    const id3 = "expRadio-" + lineIndex + ".1"
    const expRadio3 = createInput(id3, "5+ anos ", "techExp- " + lineIndex, "radio")
    const expLabel3 = createLabel("5+ anos  \n", id3 )

    const removeLineBtn = document.createElement("button")
    removeLineBtn.type = "button"
    removeLineBtn.innerText = "Remover"
    removeLineBtn.addEventListener("click", function(){
        stackInputs.removeChild(newLine)
    })
    


    newLine.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeLineBtn)

        stackInputs.appendChild(newLine)
})
form.addEventListener("submit", function(event){
    eve.preventDefault()
    const fullNameInput = document.getElementById("fullname")
    const inputLine = document.querySelector(".inputLine")

    let technologies = []
    inputLine.forEach(function(line) {
    const techName =  document.querySelector( "#" + line.id + 'input[name = "techName"]').value
    const techExp = document.querySelector('#' + line.id + 'input[type= "radio"]:checked').value
    technologies.push({name: techName, exp: techExp
    })
    const newDev = { fullname:fullNameInput.value, technologies: technologies}
    developers.push(newDev)
    alert("Dev cadastrado !")

    fullNameInput.value = ""
    inputLine.forEach(function(row) {
        row.remove()
    })

    console.log(developers)})
})