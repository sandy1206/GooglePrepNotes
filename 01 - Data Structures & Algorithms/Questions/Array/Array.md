Date - 2024-08-26  |  Time - 03:23
Tags: #Array

----

### Contains Duplicate
#### Question
Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

#### Approach
1. Using cache
```
	take cache to store the count of each number
	loop over entire array
		if item is already found that means count is 2 return true
		else store the number 
	return false
```

2. Using sort and two pointer
```
	sort the array
	loop over array till second last item 
		check if i and i+1 items are same
			return true
	return false
```

#### Solution

1. using cache
```js
let cache={}
for(let i=0;i<nums.length-1;i++){
	if(cache[nums[i]]) return true;
	cache[nums[i]]=1;
}
return false;
```

2. using two pointers
```js
var containsDuplicate = function(nums) {
nums.sort((a,b)=>a-b);
for(let i=0;i<nums.length-1;i++){
	if(nums[i]==nums[i+1])return true;
}
return false;
}
```

----


###  Two Sum

#### Question
Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

#### Approach
1.  Cache
```
create a cache to store	values
loop over each item in array
	check if current item can complete the target
		return index from cache and curr index
	store the target-curr in cache;
return false
```

#### Solution
1. Cache
```js
var twoSum = function(nums, target) {
let cache=new Map();
	for(let i=0;i<nums.length;i++){
		let currTarget= target-nums[i];
		if(cache.has(nums[i])) return [cache.get(nums[i]),i];
		cache.set(currTarget,i)
	}
}
```

----

### Group Anagram

#### Question
Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

#### Approach
1.  Sorting each String
```
create a new map to store the index of existing anagram group
create a array to store result
loop over array for each item
		sort the string
		check if string is available in map
			if available get the index and push the str to index of result
		if not set the str in map
		and push into result

return result array
```
 - [I] Time complexity - o(n)
 - [I] Space Complexity - O(1)   

#### Solution
1. Sorting each String
```js
var groupAnagrams = function (strs) {
    const map = new Map();
	let result = [];
    for (let str of strs) {
      const sortedStr= str.split('').sort().join('');
      if (map.has(sortedStr)) {
          result[map.get(sortedStr)].push(str)
      } else {
           map.set(sortedStr, result.length);
           result.push([str]);
       }
     }
  return result;
};
```

----

### Top k elements

#### Question
Given an integer array `nums` and an integer `k`, return _the_ `k` _most frequent elements_.

#### Approach
1.  Map and Sort
```
create a map to store the count of occurances
loop over array and store occurances in map
create an array from and sort it
slice top k elements and return
```
 - [I] Time complexity - o(n + k log n)
 - [I] Space Complexity - O(n + k)  
 
#### Solution
1. Map and sort
```js
	var topKFrequent = function (nums, k) {
    let map= new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    let sorted= Array.from(map.entries()).sort((a,b)=>b[1]-a[1]);
    return sorted.slice(0,k).map(a=>a[0])
};
```

----


### Product of array except self

#### Question
Given an integer array `nums`, return _an array_ `answer` _such that_ `answer[i]` _is equal to the product of all the elements of_ `nums` _except_ `nums[i]`.

#### Approach
1.  Left Pass and Right Pass
```
create an result arrya
do a left pass by taking initial product as 1
do a right pass by taking right product as 1;
```
 - [I] Time complexity - o(n)
 - [I] Space Complexity - O(n)  
 
#### Solution
1. Left Pass and Right Pass
```js
var productExceptSelf = function (nums) {
    let result=[];
    let product=1;
    let leftInd=0;
    let rightInd=nums.length-1;
    while(leftInd<nums.length){
        result[leftInd]=product;
        product*=nums[leftInd];
        leftInd++;
    }
    product=1;
    while(rightInd>=0){
        result[rightInd]*=product;
        product*=nums[rightInd];
        rightInd--;
    }
    return result;
};
```

----
