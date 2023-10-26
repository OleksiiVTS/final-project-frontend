import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';

const { createGlobalStyle } = require('styled-components');

const trackColor = {
  dark: '#2D3037',
  light: '#F2F2F2',
};

const thumbColor = {
  dark: '#171820',
  light: '#E7E5E5',
};

const ScrollBar = createGlobalStyle`
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 12px;
  background-color:  ${({ theme }) => trackColor[theme]};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;


}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 12px;
  background-color:  ${({ theme }) => thumbColor[theme]};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #2B78EF;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
}
`;

const ScrollBarStyles = () => {
  const theme = useSelector(selectTheme);

  return <ScrollBar theme={theme} />;
};

export default ScrollBarStyles;
