let levels = 10
let stars_num = 1
let spaces_num = levels-1

for (let i = 0; i <= levels-1; i ++) {
    let stars = ""
    let spaces = ""
    for (let i = 0; i <= spaces_num-1; i ++) {
        spaces += " "
    }
    for (let i = 0; i <= stars_num-1; i ++) {
        stars += "*"
    }
    stars_num += 2
    spaces_num --
    console.log(`${spaces}${stars}`)
}