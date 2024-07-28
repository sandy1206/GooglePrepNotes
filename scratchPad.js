class MinHeap{
	constructor(size){
		this.heap=new Array();
		this.size=size;
		this.length=0;
	}

	insert(item){
		if(this.length==this.size)return "heap is full";
		this.heap.push(item);
		this.length++;
		this.heapUp();
	}

	fetchMin(){
		if(!this.length) return "heap is empty";
		let output=this.heap[0];
		let replace= this.heap.pop();
		this.heap[0]= replace;
		this.heapDown(0)
		return output;
	}

	getParent(index){
		return (index+1)/2
	}

	getLeftChild(index){
		return (index*2)+1;
	}

	getRightChild(index){
		return (index*2)+2;
	}

	heapUp(){
		let currItem = this.heap.length-1;
		while (this.heap[currItem] < this.heap[this.getParent(currItem)] && currItem>0){
			[this.heap[currItem], this.heap[this.getParent(currItem)]] = [this.heap[this.getParent(currItem)], this.heap[currItem]];
			currItem= this.getParent(currItem);
		}
	}

	heapDown(index){
		let leftChild= this.getLeftChild(index);
		let rightChild= this.getRightChild(index);
		while(this.heap[index]>this.heap[leftChild] || this.heap[index]>this.heap[rightChild]){
			if(this.heap[index]>this.heap[leftChild] && this.heap[index]<this.heap[rightChild]){
				[this.heap[index], this.heap[leftChild]] = [this.heap[leftChild], this.heap[index]];
				this.heapDown(leftChild)
			}
			else if(this.heap[index]>this.heap[rightChild]){
				[this.heap[index], this.heap[rightChild]] = [this.heap[rightChild], this.heap[index]];
				this.heapDown(rightChild)
			}
		}
	}
}


let test= new MinHeap(5);
console.log(test);
test.insert(10);
test.insert(5);
test.insert(11);
test.insert(1);
test.insert(0);
// console.log(test.fetchMin())



console.log(test);
