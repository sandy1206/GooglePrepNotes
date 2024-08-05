function waveSort(arr) {
let temp= mergeSort(arr);
	for (let i = 0; i < temp.length - 1; i += 2) {
		[temp[i], temp[i + 1]] = [temp[i + 1], temp[i]];
	}

	return temp;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

function merge(arr1, arr2) {
	let leftIndex = 0;
	let rightIndex = 0;
	let result = [];

	while (leftIndex<arr1.length && rightIndex<arr2.length) {
		if (arr1[leftIndex] < arr2[rightIndex]) {
			result.push(arr1[leftIndex]);
			leftIndex++;
		} else {
			result.push(arr2[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(arr1.slice(leftIndex)).concat(arr2.slice(rightIndex));
}

console.log(mergeSort([3,2,4,65,6,1,6,3446,45,7,4,33,24]))
console.log(waveSort([3, 2, 4, 65, 6, 1, 6, 3446, 45, 7, 4, 33, 24]))
