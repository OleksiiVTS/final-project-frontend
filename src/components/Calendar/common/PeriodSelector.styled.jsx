import styled from 'styled-components';

export const Wrapper = styled.div`
	/* position: relative; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* width: 100%; */

	@media screen and (min-width: 768px) {
		justify-content: left;
		/* align-items: center; */
	}
`;

export const TitleWrapper = styled.button`
	width: 195px;
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
		justify-content: space-around;
		align-items: center;
		padding: 8px 12px;
		font-size: 16px;
	}
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 8px;
`;

export const ButtonLeft = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 7px 10px;
	border: 1px solid red;
	border-radius: 8px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	background-color: red;
	color: rgba(220, 227, 229, 0.8);
	font-size: 20px;
	cursor: pointer;
	transition: color 250ms;

	&:hover {
		color: #565759;
	}

	@media screen and (min-width: 768px) {
		padding: 8px 10px;
	}
`;

export const ButtonRight = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 7px 10px;
	border: 1px solid red;
	border-radius: 8px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	background-color: red;
	color: rgba(220, 227, 229, 0.8);
	font-size: 20px;
	cursor: pointer;
	transition: color 250ms;

	&:hover {
		color: #565759;
	}

	@media screen and (min-width: 768px) {
		padding: 8px 10px;
	}
`;
