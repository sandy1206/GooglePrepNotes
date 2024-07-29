class BinarySearchTree {
	constructor() {
		this.tree = []
	}

	// takes index and returns its parent index
	getParent(index) {
		if (index < 1) return index;
		return Math.floor((index - 1) / 2)
	}

	// takes index and returns its left child
	getLeftChild(index) {
		let child = Math.floor((index * 2) + 1)
		return child;
	}

	// takes index and returns its right child
	getRightChild(index) {
		let child = Math.floor((index * 2) + 2)

		return child;
	}

	// takes value and add it to tree
	add(item) {
		if (!this.tree.length) {
			this.tree.push(item)
		}
		let currNode = 0;
		while (this.tree[currNode]) {
			let rightChild = this.getRightChild(currNode);
			let leftChild = this.getLeftChild(currNode)
			currNode = item >= this.tree[rightChild] ? rightChild : leftChild;
		}
		this.tree[currNode] = item;

	}

	search(target){
		if(!this.tree.length) return false;
		let currNode = 0;
		while(this.tree[currNode]!== target && currNode>this.tree.length){
			let rightChild = this.getRightChild(currNode);
			let leftChild = this.getLeftChild(currNode)
			position = item >= this.tree[rightChild] ? rightChild : leftChild;
		}
		return this.tree[currNode]===target;
	}

}

let test= new BinarySearchTree();
test.add(1);
test.add(2)
test.add(3);
console.log(test);
