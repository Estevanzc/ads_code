const prompt = require("prompt-sync")()

let html = prompt("Type a html: ")
let tags = html.match(/<\/?\w+>/g);
let stack = []

if (tags.length > 0) {
    for (tag of tags) {
        if (tag.includes("/")) {
            if (stack[stack.length - 1] == tag.replace("/", "")) {
                stack.pop()
            }
        } else {
            stack.push(tag)
        }
    }
}

console.log(stack.length == 0 ? "Valid HTML" : "Invalid HTML");

