let candyInput = document.getElementsByTagName("input")[0]
let list = document.getElementsByTagName("ul")[0]
let body = document.getElementsByTagName("body")[0]

function adicionarDoceNaLista() {
    if (candyInput.value === "") {
        alert("Por favor, digite o nome de um doce!")
        return
    }
    console.log(`Doce digitado: ${candyInput.value}`);
    let newCandy = document.createElement("li")
    newCandy.innerText = candyInput.value
    candyInput.value = ""
    list.appendChild(newCandy)
    candyInput.focus()
}
function ativarAltoContraste() {
    if (!body.classList.contains("dark")) {
        body.classList.add("dark")
    }
}
function desativarAltoContraste() {
    if (body.classList.contains("dark")) {
        body.classList.remove("dark")
    }
}
