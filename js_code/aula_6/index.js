const prompt = require("prompt-sync")()

let board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
let turn = true
function board_show() {
    console.clear()
    for (let ln in board) {
        let line_str = ""
        for (let col in board[ln]) {
            line_str += `${board[ln][col]} `
        }
        console.log(`${line_str}\n`);
    }
    board_build()
}
function board_build() {
    let response = prompt("Numbers")
    let plays = response.split(",")
    plays[0] = Number(plays[0])
    plays[1] = Number(plays[1])
    if (board[plays[0]][plays[1]] == 0) {
        board[plays[0]][plays[1]] = turn ? 1 : 2
        turn = !turn
    }
    board_show()
}
board_show()