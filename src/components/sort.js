const regexDate = new RegExp("([0-9]{4}[.](0[1-9]|1[0-2])[.]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[.](0[1-9]|1[0-2])[.][0-9]{4})");
const regexDistance = new RegExp(/^(0|-?[1-9]\d{0,5})$/);

export const sortByDate = (a, b) => {
	if (a.date < b.date) {
		return 1;
	}
	if (a.date > b.date) {
		return -1;
	}
	return 0;
}

export const isValidDate = (date) => {
	const datas = regexDate.test(date);
	return datas
}

export const isValidDistance = (distance) => {
	const dist = regexDistance.test(distance);
	return dist
}