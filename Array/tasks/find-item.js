let fruits = [
	'Ананас',
	'Апельсин',
	'Арбуз',
	'Бананы',
	'Гранат',
	'Груша',
	'Дыня',
	'Киви',
	'Кокос',
	'Лимон',
	'Мандарин',
	'Маракуйя',
	'Персик',
];

console.log(fruits.indexOf('Ананас')) //0 (возвращает индекс)
console.log(fruits.indexOf('Кокос', 7)) //8 (возвращает индекс)
console.log(fruits.lastIndexOf('Персик')) //12 (возвращает индекс)
console.log(fruits.lastIndexOf('Авакадо')) //-1 (не существует)
console.log(fruits.includes('Лимон')) //true
console.log(fruits.includes('Авакадо')) //false

let users = [
	{id: 1, name: "Вася"},
	{id: 2, name: "Петя"},
	{id: 3, name: "Маша"}
];

let user = fruits.find(item => item == 'Персик')
console.log(user.name) // Вася

let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);

console.log(users.findIndex(item => item.name == 'Маша')) // индекс 2
console.log(users.findIndex(item => item.name == 'Ильмира')); // -1 не существует
