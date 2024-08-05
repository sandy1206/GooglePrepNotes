function mergeSort(arr, start, end) {
	if (arr.length <= 1) return arr;

	let middle = Math.floor(arr.length / 2);

	return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

function merge(arr1, arr2) {
	let result = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < arr1.length && rightIndex < arr2.length) {
		if (arr1[leftIndex] <= arr2[rightIndex]) {
			result.push(arr1[leftIndex]);
			leftIndex++;
		} else {
			result.push(arr1[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex))

}


console.log(mergeSort([2,1,4,5,6,]))
