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
