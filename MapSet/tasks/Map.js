let map = new Map()

let user = {name: 'Ilmira'}

map.set(user, 1000)
map.set('Ainur', 2000)

console.log(map.get(user))
console.log(map.get('Ainur'))

console.log(map.has(user))
console.log(map.has('Ainur'))
console.log(map.has('Aylina'))

map.delete('Ainur')
console.log(map.size)

map.clear()
console.log(map)



let recipeMap = new Map([
	["огурец", 500],
	["помидор", 350],
	["лук",    50]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
	console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
	console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
	console.log(entry); // огурец,500 (и так далее)
}


//Object.entries - Из Object в Map
let obj = {
	name: "John",
	age: 30
};

let userMap = new Map(Object.entries(obj));
console.log(userMap)

//Object.fromEntries - Из Map в Object
let vegetableMap = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let vegetableObj = Object.fromEntries(vegetableMap.entries());
console.log(vegetableObj)

