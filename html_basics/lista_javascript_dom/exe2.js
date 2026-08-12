function destacarCursos() {
    let elements = document.getElementsByClassName("curso")
    for (let i = 0; i <= elements.length-1; i ++) {
        elements[i].style.backgroundColor = "lightyellow"
        elements[i].style.padding = "10px"
        elements[i].style.color = "darkblue"
    }
}