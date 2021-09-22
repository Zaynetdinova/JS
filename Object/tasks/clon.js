//Клонирование и объединение объектов, Object.assign

let user = {
	name: 'Иван',
	age: 30
};

console.log(Object.length)

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
	clone[key] = user[key];
}

// теперь в переменной clone находится абсолютно независимый клон объекта
clone.name = 'Ильмира'
clone.age = 22
console.log(clone)
console.log(user)


let cloneUser = Object.assign({}, user)

cloneUser.name = 'Айнур'
cloneUser.age = 27

console.log(cloneUser)