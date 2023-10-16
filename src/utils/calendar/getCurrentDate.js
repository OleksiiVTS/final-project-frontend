import { format } from 'date-fns';

const getCurrentDate = () => {
	const date = new Date();
	return format(date, 'yyyy-MM-dd');
};

export default getCurrentDate;
