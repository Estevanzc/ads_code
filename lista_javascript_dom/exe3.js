function alterarParagrafos() {
    let paragraphs = document.getElementsByTagName("p")
    for (let i = 0; i <= paragraphs.length-1; i ++) {
        paragraphs[i].style.color = "green"
        paragraphs[i].style.fontSize = "18px"
        paragraphs[i].innerHTML = "Parágrafo alterado pelo JavaScript"
    }
}
