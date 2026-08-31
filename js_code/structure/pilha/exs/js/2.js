const prompt = require("prompt-sync")()

let word = prompt("Type a word: ")
let stack = word.split("")
let reverse_word = ""


for (let i = 0; i <= word.length-1; i ++) {
    reverse_word += stack.pop()
}

console.log("Your reversed word using stack (yay!) is: " + reverse_word);

