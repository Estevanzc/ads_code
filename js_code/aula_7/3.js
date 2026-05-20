const prompt = require("prompt-sync")()
let nums = []
for (let i = 0; i <= 4; i ++) {
    nums.push(Number(prompt("Num: ")))
}
console.log(nums.reduce((acc, num) => acc + num))
