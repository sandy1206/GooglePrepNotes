Date - 2024-08-22  |  Time - 12:33
Tags: #test #flashcards

## Table Of Contents

1. [void](#void)
2. [unknown](#unknown)
3. [undefined](#undefined)
4. [string](string)
5. [object](#object)
6. [number](#number)
7. [null](#null)
8. [never](#never)
9. [boolean](#boolean)
10. [any](#any)

----

> [!info] spelling for types
> Note that all types are in small case and not with other. this is to avoid the javascript constructors like Number, String which are using create primitively values


> [!attention] strictNullChecks
> when we unable strict null check in tsconfig.json <font color="#ff0000">null</font> and <font color="#ff0000">undefined</font> are not assignable to anyone unless they are in union


### Void
this is used when some function will not return anything .
```ts
	function test(arg:string):void{};
```

### unknown 
this is special type where all values can be assigned to it but this can not be assigned to anyone 
so this is illegal
```ts
	let test:unknown;
	let val:string= test;
```
so to achieve this we need to assert the **unknown** to some values first and then assign.
```ts
	let val:string= test as string;
```

### string
as name suggest 
```ts
	const name:string= 'sandip';
```

### number
as name suggest 
```ts
	const age:number= 31;
```

### object 
this is **not a type or interface** but simple definition of object this does not define how keys and values of object will look like but just let user know that value is some kind of object.
```ts
	let obj:object;
```

### null
This value represent deliberate absence of value. if **strict null check** is not enabled then this can be assigned to anyone but if enabled then this will not be assignable to anyone unless they are in union
```ts
	//strict is enabled
	let value= null;
	let test:string= value // this is not allowed
	//strict is disabled
	let value= null;
	let test:string= value // this is allowed
```
we can also do a Nullish check to identify if value is null.
```ts
	console.log(value ?? 'default Value'); // if value is null  
```

### never

It is used to represent the value will never have anything other than **never**. this is used to define a type of function that will through error or goes in infinite loop. or a value that will never be reached. 

**Void** is intentional absence of return but never is a programmatic choice which result in no values. or not reaching code block.

### any
this value represent all values, should never be used. 