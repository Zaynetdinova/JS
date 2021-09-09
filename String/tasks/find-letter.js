let str = 'Widget with id';
console.log(str.length)

console.log( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
console.log( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
console.log( str.indexOf('id') ); //1
console.log(str.lastIndexOf('id')) //12


console.log(str.includes('with'))
console.log(str.includes('ilmira'))

console.log(str.startsWith('Widget'))
console.log(str.endsWith('id'))