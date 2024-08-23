Date - 2024-08-23  |  Time - 15:15
Tags: #typescript  \

----

> [!warning] Experimental feature
> We must need to enable experimentalDecorators compiler option in tsconfig.json file.

- [I] Decorator is a special type of function which can be attached to class, function, method or parameter.
- [I] Decorator **must** result in a function which will be the called at **runtime** with information about decorated declarations. 

```ts
	function sealed(){
		console.log(something)
	}
	// Usage
	@sealed
```

- [I] Decorators can be created using decorator factories where a higher order function will return a decorator function
- [I] Multiple decorators can be applied to one Item which will be then evaluated based on order, last decorator will run first
```ts
	@f
	@g
	// here the evluation will happen as below
	f(g(x)) // where x is value 
```

- [I] Decorators are like higher order function which can change the behavior of the class or function we are applying. 

