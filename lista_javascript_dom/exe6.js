function cumprimento(name = "Client") {
    let element = document.getElementById("resultado")
    element.innerHTML = `Olá, ${name}! Bem-vindo ao sistema.`
}

let saudarComNome = () => cumprimento(prompt("Qual é o seu nome?"))
let saudarSemNome = () => cumprimento()
