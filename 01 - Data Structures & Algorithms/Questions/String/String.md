Date - 2024-08-26  |  Time - 04:09
Tags: #String

----
###  Valid Anagram

#### Question
Given two strings `s` and `t`, return `true` _if_ `t` _is an anagram of_ `s`_, and_ `false` _otherwise_.

#### Approach
1.  Cache Method
```txt
	create a cache and stor the count of each char of one string
	loop over another string and see if char is present in cache
		reduce the count if present
		return false if not present
	return  true
```

#### Solution
1. Cache Method
```js
if (s.length !== t.length) return false;
let cache = {};
for (let i = 0; i < s.length; i++) {
	cache[s[i]] = (cache[s[i]] || 0) + 1;
	}
for (let i = 0; i < t.length; i++) {
	if (cache[t[i]] > 0) {
	cache[t[i]]--;
	} else {
	return false;
	}
}

return true;
```

----
