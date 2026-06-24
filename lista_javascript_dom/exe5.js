function mostrarMensagem() {
    let element = document.getElementById("mensagem")
    let name = prompt("Qual o seu nome?") || "Client"
    element.innerHTML = `Olá, ${name}! Bem-vindo ao sistema.`
}
