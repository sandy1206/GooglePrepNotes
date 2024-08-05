# Sorting Algorithms

## Time and Space Complexity

| Algorithm        | Best Time Complexity | Average Time Complexity | Worst Time Complexity | Space Complexity |
|------------------|----------------------|-------------------------|-----------------------|------------------|
| Bubble Sort      | O(n)                 | O(n^2)                  | O(n^2)                | O(1)             |
| Insertion Sort   | O(n)                 | O(n^2)                  | O(n^2)                | O(1)             |
| Selection Sort   | O(n^2)               | O(n^2)                  | O(n^2)                | O(1)             |
| Merge Sort       | O(n log n)           | O(n log n)              | O(n log n)            | O(n)             |
| Quick Sort       | O(n log n)           | O(n log n)              | O(n^2)                | O(log n)         |
| Heap Sort        | O(n log n)           | O(n log n)              | O(n log n)            | O(1)             |
| Counting Sort    | O(n + k)             | O(n + k)                | O(n + k)              | O(k)             |
| Radix Sort       | O(nk)                | O(nk)                   | O(nk)                 | O(n + k)         |
| Bucket Sort      | O(n + k)             | O(n + k)                | O(n^2)                | O(n + k)         |
| Shell Sort       | O(n log n)           | O(n (log n)^2)          | O(n (log n)^2)        | O(1)             |

* `n` is the number of elements to be sorted.
* `k` is the range of the input.


## Quick Sort

### Overview

Quick Sort is a highly efficient sorting algorithm and is based on partitioning an array into smaller sub-arrays. A large array is partitioned into two arrays, one of which holds values smaller than the specified value, say pivot, based on which the partition is made, and another array holds values greater than the pivot value.

### Steps

1. **Choose a Pivot**: Select an element from the array as the pivot.
2. **Partition the Array**: Rearrange the elements so that all elements less than the pivot are on the left, and all elements greater than the pivot are on the right.
3. **Recursively Apply**: Recursively apply the above steps to the sub-arrays formed by partitioning.

### Explanation
![Quick Sort Diagram](../../assets/Quick%20Sort.png)

### Code

```js
function quickSort(arr, low, high) {

	if (low >= high) return;

	low = low || 0;
	high = high || arr.length - 1;

	let pivotIndex = findPivot(arr, low, high);
	quickSort(arr, low, pivotIndex - 1)
	quickSort(arr, pivotIndex + 1, high);
	return arr;
}

function findPivot(arr, low, high) {
	let i = low + 1;
	let j = high;
	let pivot = low;

	while (i <= j) {
		while (i <= high && arr[i] <= arr[pivot]) {
			i++
		}
		while (arr[j] > arr[pivot]) {
			j--;
		}
		if (i < j) {
			[arr[i], arr[j]] = [arr[j], arr[i]]
		}
	}
	[arr[low], arr[j]] = [arr[j], arr[low]]
	return j;
}
```

## Insertion Sort

### Steps
 - loop over array from index 1 to n
 	- for each element, loop backwards from current index to 0
 	- if current element is less than previous element, swap them
 	- continue until current element is greater than previous element
 - return sorted array

### Code

```js
	function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		let val = arr[i];
		while (j >= 0 && arr[j] >= val) {
			arr[j + 1] = arr[j];
			j--
		}
		arr[j+1] = val;
	}
	return arr;
}
```
## Selection Sort

### Overview

Selection Sort is a simple comparison-based sorting algorithm. It works by dividing the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty, and the unsorted sublist is the entire input list.

The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element from the unsorted sublist, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

### Steps

1. **Initialize**: Start with the first element as the minimum.
2. **Find Minimum**: Scan the entire list to find the smallest element.
3. **Swap**: Swap the smallest element found with the first element.
4. **Repeat**: Move the boundary of the sorted sublist one element to the right and repeat the process for the remaining unsorted elements.

### Code

```js
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
```

## Bubble Sort

### Overview

Bubble Sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list.

### Steps

1. **Initialize**: Start from the beginning of the list.
2. **Compare and Swap**: Compare each pair of adjacent elements. If the elements are in the wrong order, swap them.
3. **Repeat**: Continue the process for each element in the list. After each pass, the next largest element is in its correct position.
4. **Optimize**: Optionally, stop the algorithm if no swaps are made during a pass, indicating that the list is already sorted.

### Code

```js
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
        }
        n--; // Reduce the range of comparison as the largest element is in its correct position
    } while (swapped);
    return arr;
}
```

## Merge Sort

### Overview

Merge Sort is a divide-and-conquer algorithm that was invented by John von Neumann in 1945. It works by recursively dividing the unsorted list into smaller sublists until each sublist contains a single element, and then merging those sublists to produce a sorted list. Merge Sort is known for its efficiency and stability, making it a popular choice for sorting large datasets.

### Steps

1. **Divide**: Split the list into two halves until each sublist contains a single element.
2. **Conquer**: Recursively sort each sublist.
3. **Merge**: Merge the sorted sublists to produce new sorted sublists until there is only one sorted list remaining.

### Code

```js
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
```

## Radix Sort

### Overview

Radix Sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits. It works by sorting the numbers digit by digit, starting from the least significant digit to the most significant digit. Radix Sort is efficient for sorting large lists of numbers, especially when the range of the numbers is limited.

### Steps

1. **Initialize**: Determine the maximum number of digits in the largest number.
2. **Sort by Each Digit**: Starting from the least significant digit, sort the numbers using a stable sorting algorithm (e.g., Counting Sort).
3. **Repeat**: Repeat the process for each digit until all digits have been processed.

### Code

```js
function radixSort(arr) {
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;

    while (divisor < maxNum) {
        let buckets = [...Array(10)].map(() => []);

        for (let num of arr) {
            buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
        }

        arr = [].concat(...buckets);
        divisor *= 10;
    }

    return arr;
}
