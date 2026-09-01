import Node from "./node";

class DoubleList {
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
            newValue.prev = this.last
        }
        this.last = newValue
        this.size++
    }
    prepend(newValue) {
        newValue = new Node(newValue)
        if (!this.isEmpty()) {
            this.first.prev = newValue
            newValue.next = this.first
        } else {
            this.last = newValue
        }
        this.first = newValue
        this.size++
    }
    removeFirst() {
        if (!this.isEmpty()) {
            if (this.size == 1) {
                this.last = null
            } else {
                this.first.next.prev = null
            }
            this.first = this.first.next
            this.size--
        }
    }
}