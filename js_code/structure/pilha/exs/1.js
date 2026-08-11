const prompt = require("prompt-sync")()

let stack = []
let finish = false

while (!finish) {
    let response = Number(prompt("Choose a action:\n\n1. Add Number\n2. Remove Last\n3. View Last\n4. View All\n5. Exit\n\nYour answer: ")) || 0
    switch (response) {
        case 1:
            let num = Number(prompt("\nType a number: ")) || 0
            stack.push(num)
            break;
        case 2:
            stack.pop()
            break;
        case 3:
            console.clear();
            console.log("The last number of the stack is: " + stack[stack.length - 1]);
            break;
        case 4:
            console.clear();
            console.log("Your current stack is: " + stack);
            break;
        default:
            console.clear();
            console.log("Good bye!!!");
            break;
    }
    let exitResponse = Number(prompt("Do you want to continue?\n\n1. Yes :)\n2. No :<\n\nYour answer: ")) || 0
    if (exitResponse == 0) {
        finish = true
        console.clear();
        console.log("Good bye!!!");
    }
}
