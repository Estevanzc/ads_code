function alterarTitulo() {
    let element = document.getElementById("titulo") || null
    if (element) {
        element.innerHTML = "Título alterado com JavaScript"
        element.style.color = "blue"
    }
}
