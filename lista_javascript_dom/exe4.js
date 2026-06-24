function alterarDisciplina() {
    let element = document.getElementById("disciplina")
    element.innerHTML = "Desenvolvimento Web"
    element.style.color = "blue"
}
function destacarConteudos() {
    let elements = document.getElementsByClassName("conteudo")
    for (let i = 0; i <= elements.length-1; i ++) {
        elements[i].style.backgroundColor = "lightblue"
        elements[i].style.padding = "10px"
    }
}
function alterarSubtitulos() {
    let elements = document.getElementsByTagName("h2")
    for (let i = 0; i <= elements.length-1; i ++) {
        elements[i].style.color = "darkred"
        elements[i].innerHTML = "Tópico: " + elements[i].innerHTML
    }
}
