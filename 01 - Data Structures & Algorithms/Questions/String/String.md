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

### Encode & Decode String

#### Question
Design an algorithm to encode a list of strings to a single string.

#### Approach
1.  Adding count of each substring at start of string
	Idea here is to encode a given array of string into one single string and also decode the same, general thought is to place something in between each string while adding it to a result string.  but problem is whatever we are adding as delimiter can be a part of original string as well so might end up dividing original string. 
	so solution is put the count of string at start and put some kind of delimiter as well so we know the length of string and then also have a delimiter. 
```
-- encode part
create a local str variable
loop over each put the count of each string and a delimiter (#)
return resulted string

-- decode part
	create a array to put result
	take a pointer loop over till the end of list 
	we are targeting the length of each string so we might need to look for multiple number 
	slice the string push it to result.
```
 - [I] Time complexity - o(n)
 - [I] Space Complexity - O(1)  
 
#### Solution
1. some
```js
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str='';
        for (let s of strs){
            str+=`${s.length}#${s}`
        }
        return str;
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let output=[];
       let ptr=0;
       while(ptr<str.length){
        let len='';
        while(str[ptr]!=='#'){
            len+=str[ptr];
            ptr++;
        }
        len=Number(len);
        output.push(str.slice(ptr+1,ptr+1+len));
        ptr= ptr+1+len;
       }
       return output
    }
}
```

----
