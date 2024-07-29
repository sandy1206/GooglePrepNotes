function dfs(root){
	let stack=[];

	stack[0]= root;
	while (stack.length){
		let curr = stack.pop();
		let left = curr.left
		let right = curr.right;
		if(left){
			stack.push(left)
		}
		if (right) {
			stack.push(right)
		}
	}
}

const tree = {
	value: 1,
	left: {
		value: 2,
		left: {
			value: 4,
			left: null,
			right: null
		},
		right: {
			value: 5,
			left: null,
			right: null
		}
	},
	right: {
		value: 3,
		left: null,
		right: {
			value: 6,
			left: null,
			right: null
		}
	}
};

dfs(tree)
