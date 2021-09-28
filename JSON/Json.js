let student = {
	name: 'John',
	age: 30,
	isAdmin: false,
	courses: ['html', 'css', 'js'],
	wife: null
};

let json = JSON.stringify(student);
console.log(json)
console.log(typeof json) //string

let user = {
	name: "Василий Иванович",
	age: 35
};

let userJson = JSON.stringify(user);
console.log(userJson)

let userObj = JSON.parse(userJson);
console.log(userObj)