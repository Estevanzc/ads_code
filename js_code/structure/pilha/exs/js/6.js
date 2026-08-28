const prompt = require("prompt-sync")()

let equation = prompt("Type a equation: ")
let elements = equation.match(/[\(\)\{\}\[\]]/g);
let stack = []
let reverse_options = {
    ")": "(",
    "]": "[",
    "}": "{",
}

if (elements.length > 0) {
    for (element of elements) {
        if (Object.keys(reverse_options).includes(element) && stack[stack.length - 1] == reverse_options[element]) {
            stack.pop()
        } else {
            stack.push(element)
        }
    }
}

console.log(stack.length == 0 ? "Valid equation" : "Invalid equation");
