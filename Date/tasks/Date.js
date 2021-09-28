let dateD = new Date(2012, 1, 20, 3, 12)



let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );
console.log( getWeekDay(dateD) );

function getWeekDay(date) {
	if(date.getDay() === 0) {
		return 'ВС'
	} else if (date.getDay() === 1) {
		return 'ПН'
	} else if (date.getDay() === 2) {
		return 'ВТ'
	} else if (date.getDay() === 1) {
		return 'СР'
	} else if (date.getDay() === 1) {
		return 'ЧТ'
	} else if (date.getDay() === 1) {
		return 'ПТ'
	} else if (date.getDay() === 1) {
		return 'СБ'
	}
}
