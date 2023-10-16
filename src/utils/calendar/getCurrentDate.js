const getCurrentDate = () => {
	const date = new Date();
	return {
		day: date.getDay(),
		date: date.getDate(),
		month: date.getMonth(),
		year: date.getFullYear(),
	};
};

export default getCurrentDate;
