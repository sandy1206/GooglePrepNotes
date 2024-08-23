Date - 2024-08-22  |  Time - 12:41
Tags: #typescript 

Generics is a class or function type that can take a type parameter as input and use that to do stuff. 

```ts
	function Test<T>(arg:T):T{
		return arg
	}
```
Here we are taking **T** as a type parameter and assign it to input argument as well as return type

```ts
	const Usage= Test<number>(10);
```
here when we use **test** function we added type in **<>** brackets so that makes parameter type as **Number** as well.

### Function generics

whatever we used above is a function generics but we can also have multiple types as a input type parameter like below

```ts
	function test<T,U>(arg:T):U{
		return arg as unknown as U;
	}
```

Here we added multiple types to a function. 

> [!hint] Function Definition
> We can now also create a function type using generics

here is how can we do

```ts
	Interface SomeFuncDef<T,U>{
		(arg:T):U
	}
	// Usage
	const tes:SomeFuncDef<number, string= actualFunc(1)
	//notice here that the actual func params are defined in interface as arg, so even though we needed to pass two types , we just needed to pass one actual func param
```


### class Generics

similar to function based generics class based generics can also take **Type** parameter

```ts
	class Test<T>{
		private _value:T;
		constructor(arg:T){
		this._value=arg;
		}
	}
	// usage
	const some= new Test<number>(10);
```

### Generics Constraints

It is not always useful to accept all types of input from user, as if lets say we built some method in class generics and then there we are looking for some key and it is not there or lets say we are checking for length and someone passed number as type, this will fail our use case.

so here we will introduce constraints using function based generics.
lets go step by step
1. lets create a interface which is our base case
```ts
	interface Letters{
		a:string,
		b:string,
		c:string
	}
```
2. lets create a function definitions
```ts
	function test<T extends keysof Letters>(arg:T):T{
		return arg;
	}
```
3. now lets implement this 
```ts
	const usage = test<string>('a)
```
Now here this function will not accept anything else other than keys of **Letters** . 

### Default Parameters
In some use case it is better that we can assign some default parameter for input type so that when user does not send still we can use. 

```ts 
	funtion Test<T=string>(arg:T):T{
		return arg
	}
```

