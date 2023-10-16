import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { ToolbarWrapper } from '.';

const CalendarToolbar = () => {
	const [type, setType] = useState('month');
	const pathname = useLocation().pathname;

	useEffect(() => {
		if (pathname.includes('day')) {
			setType('day');
			return;
		}

		setType('month');
	}, [pathname]);

	console.log(type);

	return <p>CalendarToolbar</p>;
};

export default CalendarToolbar;
