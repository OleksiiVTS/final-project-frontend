import styled, { createGlobalStyle } from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
`;

export const DatePickerButton = styled.button`
  width: 165px;
  height: 34px;
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background-color: #3e85f3;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: calc(18 / 16);
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (min-width: 768px) {
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
		left: 0;
		top: 42px;
		z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 373px;
    height: 354px; */
    padding-block: 15px;
		border-radius: 16px;
    background-color: #3e85f3;
  }

  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }

  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  /* .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
} */

  .react-datepicker__current-month {
		color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    line-height: calc(24 / 20);
    text-align: center;

		@media screen and (min-width: 768px) {
			font-size: 24px;
			line-height: calc(28 / 24);
		}
  }

  .react-datepicker__day-name {
		width: 42px;
    margin: 0;
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    line-height: calc(18 / 14);
		text-align: center;

		@media screen and (min-width: 768px) {
			width: 48px;
			font-size: 18px;
    	line-height: calc(24 / 18);
		}
  }

  .react-datepicker__navigation {
    margin-top: 17px;

    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    height: 32px;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-align: center;
    text-indent: -999em;
    top: 2px;
    width: 32px;
    z-index: 1;
  }

	.react-datepicker__aria-live {
		display: none;
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
  
	.react-datepicker__navigation-icon {
    position: relative;
		/* visibility: hidden; */
		top: -1px;
		width: 0;
		font-size: 20px;
    
	}
  
  .react-datepicker__navigation-icon::before {
    &:hover, &:focus {
      border-color: #ffffff;
		}
  }
  .react-datepicker__navigation-icon--previous {
    right: -2px;
  }
  .react-datepicker__navigation-icon--next {
    right: -2px;
  }

  .react-datepicker__navigation-icon--previous::before  {
    right: -7px;
    transform: rotate(225deg);

    border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
  }

  .react-datepicker__navigation-icon--next::before  {
    left: -7px;
    transform: rotate(45deg);

    border-color: #ccc;
    border-style: solid;
    border-width: 3px 3px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
  }
  











  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
  }

  .react-datepicker__day {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    /* gap: 8px;
    flex-shrink: 0;
    margin: 0; */
    width: 42px;
    /* height: 32px; */
		padding-block: 12px;
    border-radius: 50%;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    line-height: calc(18 / 14);
    text-align: center;
		cursor: pointer;

		@media screen and (min-width: 768px) {
			width: 48px;
  	  font-size: 18px;
	    line-height: calc(24 / 18);
		}
  }

  .react-datepicker__month {
    display: flex;
    /* gap: 7px; */
    flex-direction: column;
    justify-content: space-between;
    /* margin: 0; */
    padding-inline: 18px;

  }

  .react-datepicker__day--selected {
    background-color: #ffffff;
    color: #3e85f3;
    font-size: 14px;

		@media screen and (min-width: 768px) {
  	  font-size: 18px;
		}
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
