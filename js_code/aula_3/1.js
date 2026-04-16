const prompt = require("prompt-sync")()

let servers = {
    M: "Matutino",
    V: "Vespertino",
    N: "Noturno"
}
let server = prompt("Server: ")
console.log(servers[server] ? servers[server] : "Inválido")
