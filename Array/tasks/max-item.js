let numbers = [1, 6, 100, 300, 8];

let min = Math.min.apply(null, numbers)
// console.log(min)

let max = Math.max.apply(null, numbers)
// console.log(max)


function getMaxOfArray(numArray) {
	return Math.max.apply(null, numArray);
}

// console.log(getMaxOfArray(numbers))
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))