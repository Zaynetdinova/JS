let users = [
	{id: 1, name: "Вася"},
	{id: 2, name: "Петя"},
	{id: 3, name: "Маша"}
];

let anotherUsers = [
	{id: 4, name: "Ильмира"},
	{id: 5, name: "Айнур"},
	{id: 6, name: "Виктор"}
]

console.log(users.slice())

console.log(users.concat(anotherUsers,[{id: 7, name: "Мирослава"},{id: 8, name: "Павел"}]))

let user = users.concat()
console.log(user)

console.log(users === user) //false