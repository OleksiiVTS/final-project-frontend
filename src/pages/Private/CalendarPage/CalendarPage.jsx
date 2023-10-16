import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

import { CalendarToolbar } from 'components/Calendar/common';

import { getCurrentDate } from 'utils/calendar';
import { Container } from 'components/Calendar/common';
import ChoosedMonth from 'components/Calendar/month/ChoosedMonth';

const CalendarPage = () => {
	const navigate = useNavigate();
	const [currentDate, setCurrentDate] = useState(null);

	useEffect(() => {
		const { year, month, date, day } = getCurrentDate();
		const currentDateText =
			year.toString() + (month + 1).toString() + date.toString();

		setCurrentDate(currentDateText);

		navigate(`month/${currentDate}`, { replace: true });
	}, [navigate, currentDate]);

	return (
		<section>
			<h1> CalendarPage</h1>
			<Container>
				<CalendarToolbar />
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
