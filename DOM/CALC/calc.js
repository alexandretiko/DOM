const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
function calculate() {}
//botões da calculadora armazenados em um array
const allowedKeys =["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

//adiciona funcionalidades aos botões de cima
document.querySelectorAll(".charKey" ).forEach(function(charkeyBtn) {
    charkeyBtn.addEventListener("click", function() {
        const value = charkeyBtn.dataset.value
        input.value += value
    })
})

    document.getElementById("clear").addEventListener("click", function() {
        input.value = ""
        input.focus()
    })
//colocar só os números para o input
input.addEventListener("keydown", function(ev) {

    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
}
    if (ev.key === "Backspace"){
        input.value = input.value.slice(0, -1)
    }

})

    document.getElementById("equal").addEventListener("click", calculate)

    function calculate(){
    const result = eval (input.value)
    resultInput.value = result
}