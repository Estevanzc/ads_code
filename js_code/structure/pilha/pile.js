class Pilha {
    constructor(tamanhoMaximo) {
        this.dados = new Array(tamanhoMaximo);
        this.topo = -1;
        this.tamanhoMaximo = tamanhoMaximo;
    }
    isEmpty() {
        return this.topo === -1;
    }
    isFull() {
        return this.topo === this.tamanhoMaximo - 1;
    }
    size() {
        return this.topo + 1;
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Pilha vazia.");
            return null;
        }
        return this.dados[this.topo];
    }
    push(elemento) {
        if (this.isFull()) {
            console.log("Erro: pilha cheia!");
            return;
        }
        this.topo++;
        this.dados[this.topo] = elemento;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Erro: pilha vazia!");
            return null;
        }
        const removido = this.dados[this.topo];
        this.topo--;
        return removido;
    }
    imprimir() {
        if (this.isEmpty()) {
            console.log("Pilha vazia.");
            return;
        }
        let elementos = "";
        for (let i = 0; i <= this.topo; i++) {
            elementos += this.dados[i] + " ";
        }
        console.log("Pilha:", elementos.trim());
    }
}