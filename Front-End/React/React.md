
## Table of Contents

1. [[Synthetic Events]]


### Links

| Url | About |
| --- | ----- |
|     |       |



### **Questions**

1. Can we use native event handlers in react like onclick rather than onClick ?
		Yes we can use but we will loose some of reacts performance optimization by doing so see [[Synthetic Events]] for details.
		to use native browser events we can wither use addEventHandler or html attribute
		
**addEventHandler**
```js
	let ref= useRef(null);
	useEffect(()=>{
	let button= ref.current;
	button.addEventHandler=()=>{}
	},[])
```

html attribute
```js
<div onclick={}/>
```
