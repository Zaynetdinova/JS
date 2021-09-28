let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

console.log( sumSalaries(salaries) ); // 650


function sumSalaries(obj) {
	let sum = 0
	for (let value of Object.values(obj)) {
		sum += value
	}
	return sum
}

let user = {
	name: 'John',
	age: 30
};

console.log( count(user) ); // 2

function count(user) {
	return Object.keys(user).length
}

