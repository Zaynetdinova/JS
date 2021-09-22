let id = Symbol('id');
let id2 = Symbol('id')

console.log(id === id2) //false

let obj = {
	name: 'ИЛЬМИРА',
	[id]: 7
}

obj[id2] = 7

console.log(obj[id])
console.log(obj[id2])


let symbol = Symbol.for('symbol')
let symbolAgain = Symbol.for('symbol')
console.log(symbol === symbolAgain) //true


console.log(Symbol.keyFor(symbol)) //symbol
console.log(Symbol.keyFor(id)) //undefined
console.log(id.description) //id


