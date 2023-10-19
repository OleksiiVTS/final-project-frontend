import styled, { createGlobalStyle } from 'styled-components';

export const DateBtn = styled.div`
	padding: 6px 12px;
	border-radius: 8px;
	background-color: #3e85f3;
	color: #ffffff;
	font-size: 14px;
	font-weight: 700;
	line-height: calc(18 / 14);
	text-align: center;
	text-transform: uppercase;

	@media screen and (min-width: 768px) {
		margin-block: 33px;
		padding: 8px 12px;
		font-size: 16px;
	}
`;

export const CalendarGlobalStyles = createGlobalStyle`
	.react-datepicker__wrapper {
		position: relative;
	}

	.react-datepicker {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-1%, 0%);
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 327px;
		height: 354px;
		padding: 9px 18px;
		border-radius: 16px;
		background-color: #3E85F3;
		font-family: Inter;
	}
	
	.react-datepicker__month-container {
		float: inherit;
		box-sizing: border-box;
	}

	.react-datepicker__header {
		position: relative;
		background-color: #3E85F3;
	}

	.react-datepicker__day-names {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 19px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	}

	.react-datepicker__header:not(.react-datepicker__header--has-time-select) {
		padding: 0;
		border-bottom: 0px;
	}

	.react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today {
		outline: none;
		border: none;
	}

	.react-datepicker__current-month {
		font-family: Inter;
		font-size: 20px;
		font-weight: 600;
		line-height: calc(24 / 20);
		text-align: center;
		color: #ffffff;
	}

	.react-datepicker__day-name {
		margin: 0;
		padding: 12px 19px;
		font-family: Inter;
		font-size: 14px;
		font-weight: 600;
		line-height: calc(18 / 14);
		text-align: center;
		color: #ffffff;
	}

	.react-datepicker__navigation {
		margin-top: 24px;
		color: #ffffff;
	}

	.react-datepicker__navigation--previous {
		left: 7px;
		width: 18px;
		height: 18px;
	}

	.react-datepicker__navigation--next {
		right: 7px;
		width: 18px;
		height: 18px;
	}

	.react-datepicker__navigation-icon::before:hover:focus {
		border-color: #ffffff;
	}

	.react-datepicker__week {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ffffff;
	}

	.react-datepicker__day {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
		width: 32px;
		height: 32px;
		margin: 0;
		border-radius: 50%;
		color: #ffffff;
		font-family: Inter;
		font-size: 14px;
		font-weight: 400;
		line-height: calc(18 / 14);
		text-align: center;
	}

	.react-datepicker__month {
		display: flex;
		gap: 7px;
		flex-direction: column;
		justify-content: space-between;
		margin: 0;
		padding-top: 16px;
	}

	.react-datepicker__day--selected {
		background-color: #ffffff;
		color: #3e85f3;
		font-size: 14px;
	}

	.react-datepicker__day--selected:hover {
		border-radius: 50%;
		background-color: #ffffff;
	}

	.react-datepicker__day:hover {
		border-radius: 50%;
		background-color: #ffffff;
		color: #3e85f3;
	}

	.react-datepicker__day--keyboard-selected {
		border-radius: 50%;
		background-color: #ffffff;
		color: #3e85f3;
	}

	.react-datepicker__day--weekend {
		opacity: 50%;
	}

	.react-datepicker__day--outside-month {
		background-color: transparent;
		pointer-events: none;
		opacity: 0;
	}

	.react-datepicker__view-calendar-icon input {
		padding: 6px 10px 5px 13px;
	}

	.react-datepicker__triangle {
		visibility: hidden;
	}
`;
