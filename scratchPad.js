function bubbleSort(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		let j = 1;
		while (j <= i) {
			if (arr[j - 1] > arr[j]) {
				[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
			}
			j++;
		}
	}
	return arr;
}

console.log(bubbleSort([3,2,1,3,4,5,]));
