import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

import { getCurrentDate } from 'utils/calendar';

const MainPage = () => {
	const navigate = useNavigate();
	const [currentDate, setCurrentDate] = useState(getCurrentDate());

	useEffect(() => {
		if (!currentDate) setCurrentDate(getCurrentDate());

		navigate(`calendar/month/${currentDate}`, { replace: true });
	}, [navigate, currentDate]);

	return (
		<div>
			<h1> MainPage</h1>
		</div>
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

export default MainPage;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
