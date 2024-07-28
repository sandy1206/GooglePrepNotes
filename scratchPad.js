
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

const Test = new CircularQueue(5);
Test.enqueue(1);
Test.enqueue(2);
Test.enqueue(3);
Test.enqueue(4);
Test.enqueue(5);
Test.enqueue(6);
console.log(Test);
console.log(Test.dequeue())
console.log(Test.dequeue())
console.log(Test.dequeue())
console.log(Test.dequeue())
console.log(Test.dequeue())
Test.enqueue(6);
Test.enqueue(7);
console.log(Test);
