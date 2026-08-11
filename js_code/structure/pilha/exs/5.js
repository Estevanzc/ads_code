const prompt = require("prompt-sync")()

let equation = prompt("Type a equation: ")
let elements = equation.match(/\(|\)/g);
let stack = []

if (elements.length > 0) {
    for (element of elements) {
        if (element == ")" && stack[stack.length - 1] == "(") {
            stack.pop()
        } else {
            stack.push(element)
        }
    }
}

console.log(stack.length == 0 ? "Valid equation" : "Invalid equation");
