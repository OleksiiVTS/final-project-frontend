import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
	display: flex;
`;

export const StyledNavLink = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 76px;
	height: 34px;
	background-color: #e3f3ff;
	color: #3e85f3;
	font-size: 14px;
	font-weight: 500;
	line-height: calc(18 / 14);
	transition: background-color 250ms;

	&.active,
	&:hover,
	&:focus {
		background: #cae8ff;
	}

	&.month {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
		border-right: 1px solid rgba(62, 133, 243, 0.2);
	}

	&.day {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`;
