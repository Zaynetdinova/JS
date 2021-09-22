obj = {
	name: 'Ильмира',
	age: 22,
	[Symbol.toPrimitive](hint) {
		alert(`hint: ${hint}`)
		return hint === 'string' ? `{name: "${this.name}"}` : this.age
	}
}


alert(obj);
alert(+obj);
alert(obj + 500);

user = {
	name: 'Вася',
	money: 1000,
	toString() {
		return user.name
	},
	valueOf() {
		return user.money
	}
}

alert(user);
alert(+user);
alert(user + 500);



