import Node from "./node";

class CircleList {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }
    length() {
        return this.size
    }
    append(newValue) {
        newValue = new Node(newValue)
        if (this.isEmpty()) {
            this.first = newValue
        } else {
            this.last.next = newValue
        }
        newValue.next = this.first
        this.last = newValue
        this.size++
    }
    prepend(newValue) {
        newValue = new Node(newValue)
        if (!this.isEmpty()) {
            newValue.next = this.first
            this.last.next = newValue
        } else {
            this.last = newValue
            newValue.next = newValue
        }
        this.first = newValue
        this.size++
    }
    removeFirst() {
        if (!this.isEmpty()) {
            if (this.size == 1) {
                this.first = null
                this.last = null
            } else {
                this.first = this.first.next
                this.last.next = this.first
            }
            this.size--
        }
    }
}