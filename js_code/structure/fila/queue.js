/*
queue

FIFO = First In First Out

enqueue => O(1)
dequeue => O(1)
peek    => O(1)
search  => O(1)

*/
export class No {
    constructor(v) {
        this.value = v
        this.next = null
    }
}
export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.count = 0
    }
    isEmpty() {
        return this.count == 0
    }
    size() {
        return this.count
    }
    enqueue(newValue) {
        newValue = new No(newValue)
        if (this.isEmpty()) {
            this.first = newValue
        } else {
            this.last.next = newValue
        }
        this.last = newValue
        this.count++
    }
    dequeue() {
        if (this.size() > 0) {
            let head = this.first
            if (this.size() == 1) {
                this.last = null
            }
            this.first = head.next
            this.count--
            return head
        }
        return null
    }
    peek() {
        return this.first
    }
    search(value) {
        let current = this.first
        for (let i = 0; i <= this.count - 1; i++) {
            if (current.value == value) {
                return current
            }
            current = current.next
        }
        return null
    }
    print() {
        let arr = []
        let current = this.first
        for (let i = 0; i <= this.count - 1; i++) {
            arr.push(current.value)
            current = current.next
        }
        console.log(arr);
    }
}