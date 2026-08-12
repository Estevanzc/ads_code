let container = document.getElementById("container")

let new_element = document.createElement("div")
new_element.innerHTML = "Nova div adicionada!"
new_element.style.backgroundColor = "lightblue"

container.appendChild(new_element)
