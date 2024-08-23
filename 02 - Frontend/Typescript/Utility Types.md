Date - 2024-08-23  |  Time - 14:28
Tags: #test \

----

> [!NOTE] Why
> Utility types are special types that used to transform existing type to map to a new type by modifying existing type

### Partial

Makes all properties of a type optional.
```ts
	type Test={
		name:string,
		value:number
	}
	const person:Partial<Test> = {name:'Sandip'}
```

### Required

Makes all properties of a type required.
```ts
	type Test={
		name?:string,
		value?:number
	}
	const person:required<Test> = {name:'Sandip', value:10}
```

### Readonly

Makes all properties of a type read-only so you can not modify the values.
```ts
	type Test={
		name:string,
		value:number
	}
	const person:Readonly<Test> = {name:'Sandip'}
```

### Record <Keys, Type>

This can take keys object or or interface and keys object or type and can construct new Type
```ts
type CatName = "miffy" | "boris" | "mordred";
interface CatInfo {
	age: number;
	breed: string;
}

const cats: Record<CatName, CatInfo> = {
	miffy: { age: 10, breed: "Persian" },
	boris: { age: 5, breed: "Maine Coon" },
	mordred: { age: 16, breed: "British Shorthair" }
};
```

### Pick <Type, Keys>

Constructs a type by picking the set of properties `Keys` (string literal or union of string literals) from `Type`.

```ts
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
const todo: TodoPreview = {
	title: "Clean room",
	completed: false,
};
```

### Omit <Type, Keys >

Construct a type by picking all properties from Type and then omitting mentioned 