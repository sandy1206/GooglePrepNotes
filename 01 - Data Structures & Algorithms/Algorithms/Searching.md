Date - 2024-08-25  |  Time - 12:42
Tags: #searching #algorithms

---
## Table of contents

1. [Binary Search](#binary-search)

----
### Searching

#### Binary Search

Idea is to look for a position between to pointers on **sorted array**
if if current is greater then increase lower and if higher then lower the end point. 

define `left =0` & `right=length-1`
loop over array till `left<=right`
	get a `mid=left+right/2`
	if `mid` is equal to `target` return `mid`
	if arr(mid) is greater then `right--`
	else `left++`
return `false`

```js
function binarySearch(arr, target){
	let start=0;
	let end= arr.length-1;

	while(start<=end){
		let mid= Math.floor((start+end)/2);
		if(target==arr[mid]) return true;
		if(arr[mid]<target){
			start=mid+1
		}else{
			end=mid-1;
		}
	}
	return false;
}
```
