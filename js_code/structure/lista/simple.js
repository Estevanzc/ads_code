import Node from "./node";

class SimpleList {
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
        this.last = newValue
        this.size++
    }
    prepend(newValue) {
        newValue = new Node(newValue)
        if (!this.isEmpty()) {
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
            }
            this.first = this.first.next
            this.size--
        }
    }
}