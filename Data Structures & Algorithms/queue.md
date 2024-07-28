# Queue Data Structure

## Table of Contents
1. [Simple Queue](#simple-queue)
2. [Circular Queue](#circular-queue)
3. [Priority Queue](#priority-queue)
4. [Deque (Double-Ended Queue)](#deque-double-ended-queue)

---

## Simple Queue

### Introduction
A simple queue is a linear data structure that follows the First In First Out (FIFO) principle.

### Operations
- **Enqueue**: Add an element to the end of the queue.
- **Dequeue**: Remove an element from the front of the queue.
- **Front**: Get the front element without removing it.
- **Rear**: Get the last element without removing it.
- **IsEmpty**: Check if the queue is empty.
- **IsFull**: Check if the queue is full (in case of fixed-size implementation).

### Implementation
- **Using Arrays**
- **Using Linked Lists**

### Code Examples
#### Array Implementation
```js
class SimpleQueue {
    constructor(max) {
        this.queue = [];
        this.length = 0;
        this.max = max;
    }

    isFull() {
        return this.length === this.max;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(item) {
        if (!this.isFull()) {
            this.queue.push(item);
            this.length++;
            return "item added to the queue";
        }
        return "queue is full";
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.length--;
            return this.queue.shift();
        }
        return "queue is empty";
    }

    front() {
        if (!this.isEmpty()) {
            return this.queue[0];
        }
        return "queue is empty";
    }

    rear() {
        if (!this.isEmpty()) {
            return this.queue[this.length - 1];
        }
        return "queue is empty";
    }
}
```

#### LinkedList Implementation
```js
function Node(data) {
    this.data = data;
    this.next = null;
}

function SimpleQueue() {
    this.length = 0;
    this.front = null;
    this.rear = null;

    this.isEmpty = function() {
        return this.length === 0;
    };

    this.enqueue = function(item) {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    };

    this.dequeue = function() {
        if (this.isEmpty()) {
            return "queue is empty";
        }
        const dequeuedItem = this.front.data;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.length--;
        return dequeuedItem;
    };

    this.log = function() {
        let curr = this.front;
        while (curr !== null) {
            console.log(curr.data);
            curr = curr.next;
        }
    };
}
```
