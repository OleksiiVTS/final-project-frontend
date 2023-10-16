import React from 'react';
// import { useState, useEffect } from 'react';
import {
	Route,
	Routes,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';

import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';

// import { Circles } from 'react-loader-spinner'; //! Спинер

import { CalendarToolbar } from 'components/Calendar/common';

// import { getCurrentDate } from 'utils/calendar';
import { Container } from 'components/Calendar/common';
import ChoosedMonth from 'components/Calendar/month/ChoosedMonth';

const CalendarPage = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const currentDate = Object.values(useParams())[0].slice(-10);
	// const { currentDate } = useParams();

	console.log(currentDate);

	const handlePrev = () => {
		if (pathname.includes('day')) {
			const newDate = subDays(new Date(currentDate), 1);
			navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
			return;
		}

		const newDate = subMonths(new Date(currentDate, 1));
		navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
	};

	const handleNext = () => {
		if (pathname.includes('day')) {
			const newDate = addDays(new Date(currentDate), 1);
			navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
			return;
		}

		const newDate = addMonths(new Date(currentDate, 1));
		navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
	};

	// const [currentDate, setCurrentDate] = useState(getCurrentDate());

	// useEffect(() => {
	// 	if (!currentDate) setCurrentDate(getCurrentDate());

	// 	navigate(`calendar/month/${currentDate}`, { replace: true });
	// }, [navigate, currentDate]);

	return (
		<section>
			<h1> CalendarPage</h1>
			<Container>
				<CalendarToolbar
					onClickPrev={handlePrev}
					onClickNext={handleNext}
					today={currentDate}
				/>
				<Routes>
					<Route path="month/:currentDate" element={<ChoosedMonth />} />
					{/* <Route path="day/:currentDate" element={<ChoosedDay />} /> */}
				</Routes>
			</Container>
		</section>
		// {isLoading && !error && (
		//     <Circles
		//       height="80"
		//       width="80"
		//       color="#4d78a9"
		//!       wrapperClass={css.loader}
		//     />
		//   )}
	);
};

export default CalendarPage;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
