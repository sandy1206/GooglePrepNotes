# Queue Data Structure

## Table of Contents
1. [Simple Queue](#simple-queue)
2. [Circular Queue](#circular-queue)
3. [Priority Queue](#priority-queue)
4. [Deque (Double-Ended Queue)](#deque)

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

### Time Complexity
| Operation | Array (Average Case) | Linked List (Average Case) |
|-----------|-----------------------|----------------------------|
| Access    | O(1)                  | O(n)                       |
| Search    | O(n)                  | O(n)                       |
| Insertion | O(n)                  | O(1)                       |
| Deletion  | O(n)                  | O(1)                       |


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


## Circular Queue
> In Circular Queue last front element points to rear element so it makes this circular queue. We can implement this using either with **Linked List** or  **Array**.

### Usage
- Efficient Use of Space
- Fixed Size and Bounded Capacity
- Avoid Overflow and Underflow
- Consistent Time Complexity

### Implementation
- **Using Arrays**
- **Using Linked Lists**

#### Array Implementation
```js

class CircularQueue {
	constructor(size) {
		this.size = size;
		this.queue = new Array(size);
		this.rear = -1;
		this.front = -1;
	}

	isFull() {
		return (this.rear + 1) % this.size == this.front;
	}
	isEmpty() {
		return this.front === -1;
	}
	enqueue(item) {
		if (this.isFull()) return "queue is full"
		if (this.isEmpty()) {
			this.front = 0;
		}
		this.rear = (this.rear + 1) % this.size;
		this.queue[this.rear] = item
	}

	dequeue() {
		if (this.isEmpty()) return "queue is empty";
		let item = this.queue[this.front];

		if (this.front === this.rear) {
			this.front = this.rear = -1;
		} else {
			this.front = (this.front + 1) % this.size;
		}
		return item;
	}
}
```

#### Linked List Implementation
```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(item) {
        const newNode = new Node(item);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.front;
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
        return "item added to the queue";
    }

    dequeue() {
        if (this.isEmpty()) {
            return "queue is empty";
        }
        const dequeuedItem = this.front.data;
        if (this.front === this.rear) {
            this.front = this.rear = null;
        } else {
            this.front = this.front.next;
            this.rear.next = this.front;
        }
        this.length--;
        return dequeuedItem;
    }

    frontElement() {
        if (this.isEmpty()) {
            return "queue is empty";
        }
        return this.front.data;
    }

    rearElement() {
        if (this.isEmpty()) {
            return "queue is empty";
        }
        return this.rear.data;
    }

    log() {
        if (this.isEmpty()) {
            console.log("queue is empty");
            return;
        }
        let curr = this.front;
        do {
            console.log(curr.data);
            curr = curr.next;
        } while (curr !== this.front);
    }
}

```

## Priority Queue
> Priority queue is just a min or max heap implemented using either Linked list or array

### Min Heap implementation
```js
class MinHeap {
	constructor(size) {
		this.heap = [];
		this.size = size;
		this.length = 0;
	}

	insert(item) {
		if (this.length === this.size) return "Heap is full";
		this.heap.push(item);
		this.length++;
		this.heapUp();
	}

	fetchMin() {
		if (this.length === 0) return "Heap is empty";
		let output = this.heap[0];
		let replace = this.heap.pop();
		this.length--;
		if (this.length > 0) {
			this.heap[0] = replace;
			this.heapDown(0);
		}
		return output;
	}

	getParent(index) {
		return Math.floor((index - 1) / 2);
	}

	getLeftChild(index) {
		return (index * 2) + 1;
	}

	getRightChild(index) {
		return (index * 2) + 2;
	}

	heapUp() {
		let currItem = this.length - 1;
		while (currItem > 0 && this.heap[currItem] < this.heap[this.getParent(currItem)]) {
			let parent = this.getParent(currItem);
			[this.heap[currItem], this.heap[parent]] = [this.heap[parent], this.heap[currItem]];
			currItem = parent;
		}
	}

	heapDown(index) {
		let smallest = index;
		let leftChild = this.getLeftChild(index);
		let rightChild = this.getRightChild(index);

		if (leftChild < this.length && this.heap[leftChild] < this.heap[smallest]) {
			smallest = leftChild;
		}

		if (rightChild < this.length && this.heap[rightChild] < this.heap[smallest]) {
			smallest = rightChild;
		}

		if (smallest !== index) {
			[this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
			this.heapDown(smallest);
		}
	}
}

class PriorityQueue {
	constructor(size) {
		this.minHeap = new MinHeap(size);
	}

	enqueue(item, priority) {
		this.minHeap.insert({ item, priority });
	}

	dequeue() {
		const minElement = this.minHeap.fetchMin();
		if (minElement === "Heap is empty") {
			return minElement;
		}
		return minElement.item;
	}

	isEmpty() {
		return this.minHeap.length === 0;
	}

	isFull() {
		return this.minHeap.length === this.minHeap.size;
	}

	peek() {
		if (this.isEmpty()) {
			return "Heap is empty";
		}
		return this.minHeap.heap[0].item;
	}
}
```

## Deque
> It is called as Deck, which allows delete and add operation at both ends of queue.
in normal queue we can only add or delete at either at rear or front which is quite limiting so **double ended queue** helps to solve this.

### Application
- Palindrome Checking
- Sliding Window Problems
- Scheduling Algorithms

### Implantation
```js
class DequeNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class Deque {
	constructor() {
		this.front = null;
		this.rear = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	insertFront(item) {
		const newNode = new DequeNode(item);
		if (this.isEmpty()) {
			this.front = this.rear = newNode;
		} else {
			newNode.next = this.front;
			this.front.prev = newNode;
			this.front = newNode;
		}
		this.size++;
	}

	insertRear(item) {
		const newNode = new DequeNode(item);
		if (this.isEmpty()) {
			this.front = this.rear = newNode;
		} else {
			newNode.prev = this.rear;
			this.rear.next = newNode;
			this.rear = newNode;
		}
		this.size++;
	}

	deleteFront() {
		if (this.isEmpty()) {
			return "Deque is empty";
		}
		const value = this.front.value;
		this.front = this.front.next;
		if (this.front) {
			this.front.prev = null;
		} else {
			this.rear = null;
		}
		this.size--;
		return value;
	}

	deleteRear() {
		if (this.isEmpty()) {
			return "Deque is empty";
		}
		const value = this.rear.value;
		this.rear = this.rear.prev;
		if (this.rear) {
			this.rear.next = null;
		} else {
			this.front = null;
		}
		this.size--;
		return value;
	}

	getFront() {
		if (this.isEmpty()) {
			return "Deque is empty";
		}
		return this.front.value;
	}

	getRear() {
		if (this.isEmpty()) {
			return "Deque is empty";
		}
		return this.rear.value;
	}
}
```
