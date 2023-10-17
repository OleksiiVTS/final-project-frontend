import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
	display: flex;
	margin-top: 18px;
	/* margin-bottom: 24px; */

	@media screen and (min-width: 768px) {
		margin-top: 0;
		margin-bottom: 0;
	}
`;

export const ListItem = styled.li`
	display: flex;
	font-size: 14px;
	font-weight: 500;
	line-height: calc(18 / 14);
`;

export const StyledNavLink = styled(NavLink)`
	width: 82px;
	padding: 8px 0;
	background-color: #e3f3ff;
	color: #3e85f3;
	text-align: center;

	&.active {
		background: #cae8ff;
		color: #3e85f3;
	}

	&.month {
		border-right: 1px solid rgba(62, 133, 243, 0.2);
		border-radius: 8px 0 0 8px;
	}

	&.day {
		border-radius: 0 8px 8px 0;
	}

	transition: background 250ms linear, color 250ms linear;

	&:hover,
	&:focus {
		background: #cae8ff;
		color: #3e85f3;
	}

	@media screen and (min-width: 768px) {
		font-size: 16px;

		&.day {
			padding: 8px 26px;
		}
	}

	/* @media screen and (min-width: 768px) {
		font-size: 16px;
	} */
`;
