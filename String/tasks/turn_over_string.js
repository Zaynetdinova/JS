//1 вариант
function reverseString1(str) {
	return str.split('').reverse().join('')
}
console.log(reverseString1('Hello'))

// 2 вариант
function reverseString2(str) {
	let newString = ''
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i]
	}
	return newString
}
console.log(reverseString2('Hello'))
// 3 вариант
function reverseString3(str) {
	return (str === '') ? '' : reverseString3(str.substr(1)) + str.charAt(0)
}
console.log(reverseString3('Hello'))
