function adicionarCurso() {
    let element = document.getElementById("listaCursos")
    let new_element = document.createElement("li")
    new_element.innerHTML = "JavaScript"
    element.appendChild(new_element)
}
