let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set)
console.log(set.delete(john)) // true
console.log(set.has(pete)) // true
console.log(set.size) //2
set.clear()
console.log(set)

//Перебор Set
let fruit = new Set(["апельсин", "яблоко", "банан"]);

for (let value of fruit) console.log(value);

// то же самое с forEach:
fruit.forEach((value, valueAgain, set) => {
	console.log(value);
});


let recipeSet = new Set([
	["огурец"],
	["помидор"],
	["лук"]
]);

// перебор по ключам (овощи)
for (let vegetable of recipeSet.keys()) {
	console.log(vegetable);
}

// перебор по значениям (числа)
for (let amount of recipeSet.values()) {
	console.log(amount);
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeSet) { // то же самое, что и recipeMap.entries()
	console.log(entry);
}


function unique(arr) {
	return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare,Krishna,:-O