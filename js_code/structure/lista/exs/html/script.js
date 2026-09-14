const circle = document.getElementById("circle");
const nextBtn = document.getElementById("nextBtn");
const invertBtn = document.getElementById("invertBtn");
const orderIndicator = document.getElementById("orderIndicator");

const values = ["Ana", "Bruno", "Carla", "Diego"];
const radius = 180;

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoubleCircleList {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
        this.currentPlayer = null
        this.order = true
    }

    isEmpty() {
        return this.size === 0;
    }

    length() {
        return this.size;
    }

    append(newValue) {
        newValue = new Node(newValue);

        if (this.isEmpty()) {
            this.first = newValue;
            newValue.prev = newValue;
            this.currentPlayer = this.first
        } else {
            this.last.next = newValue;
            newValue.prev = this.last;
        }

        newValue.next = this.first;
        this.first.prev = newValue;
        this.last = newValue;
        this.size++;
    }

    prepend(newValue) {
        newValue = new Node(newValue);

        if (!this.isEmpty()) {
            newValue.next = this.first;
            this.first.prev = newValue;
            this.last.next = newValue;
            newValue.prev = this.last;
        } else {
            this.last = newValue;
            newValue.next = newValue;
            newValue.prev = newValue;
        }

        this.first = newValue;
        this.size++;
    }

    removeFirst() {
        if (!this.isEmpty()) {
            if (this.size === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
                this.first.prev = this.last;
                this.last.next = this.first;
            }

            this.size--;
        }
    }
    printBoard() {
        let current = this.first;
        circle.innerHTML = ""
        for (let index = 0; index < list.size; index++) {
            const angle = (360 / list.size) * index;

            const wrapper = document.createElement("div");
            wrapper.className = "circle-wrapper";
            wrapper.style.transform = `rotate(${angle}deg)`;

            const position = document.createElement("div");
            position.className = "circle-position";

            const item = document.createElement("div");
            item.className = "circle-item" + (current == this.currentPlayer ? " choosen" : "");

            item.style.transform = `translate(-50%, -50%) rotate(${-angle}deg)`;

            item.textContent = current.value;

            position.appendChild(item);
            wrapper.appendChild(position);
            circle.appendChild(wrapper);

            current = current.next;
        }
    }
    changeOrder() {
        this.order = !this.order;
        orderIndicator.textContent = "Sentido: " + (this.order ? "Horário" : "Anti-horário");
    }
    nextPlayer() {
        let nextPlayer = this.order ? this.currentPlayer.next : this.currentPlayer.prev
        for (let i = 0; i <= circle.children.length - 1; i++) {
            if (circle.children[i].innerHTML == this.currentPlayer) {
                circle.children[i].classList.remove("choosen")
            }
            if (circle.children[i].innerHTML == nextPlayer) {
                circle.children[i].classList.add("choosen")
            }
        }
        this.currentPlayer = nextPlayer
        this.printBoard()
    }
}

nextBtn.addEventListener("click", function () {
    list.nextPlayer()
})
invertBtn.addEventListener("click", function () {
    list.changeOrder()
})

const list = new DoubleCircleList();

values.forEach(value => {
    list.append(value);
});

list.printBoard()
