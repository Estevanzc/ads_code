function calc(l1, l2, l3) {
    let awnser = ""
    if (l1 >= l2 + l3 || l2 >= l1 + l3 || l3 >= l1 + l2) {
        awnser = "Não"
    } else {
        if ((l1 + l2 + l3) / 3 == l1) {
            awnser = "equilatero"
        } else if ((l1 + l2) / 2 == l1 || (l2 + l3) / 2 == l2 || (l1 + l3) / 2 == l3) {
            awnser = "isóceles"
        } else {
            awnser = "escaleno"
        }
    }
    return awnser
}
console.log(calc(2, 2, 4))