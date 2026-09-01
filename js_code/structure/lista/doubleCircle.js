import Node from "./node";

class DoubleCircleList {
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
            newValue.prev = newValue
        } else {
            this.last.next = newValue
            newValue.prev = this.last
        }
        newValue.next = this.first
        this.first.prev = newValue
        this.last = newValue
        this.size++
    }
    prepend(newValue) {
        newValue = new Node(newValue)
        if (!this.isEmpty()) {
            newValue.next = this.first
            this.first.prev = newValue
            this.last.next = newValue
            newValue.prev = this.last
        } else {
            this.last = newValue
            newValue.next = newValue
            newValue.prev = newValue
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
                this.first.prev = this.last
                this.last.next = this.first
            }
            this.size--
        }
    }
}