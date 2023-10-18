import styled, { keyframes } from 'styled-components';

export const CheckmarkWrap = styled.div`
  box-sizing: border-box;
  height: 258.39px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const strokeAnimation = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const scaleAnimation = keyframes`
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const fillAnimation = keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 30px #fff;
  }
`;

export const Circle = styled.circle`
  stroke-dasharray: 332;
  stroke-dashoffset: 332;
  stroke-width: 4;
  stroke-miterlimit: 10;
  stroke: green;
  fill: none;
  animation: ${strokeAnimation} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

export const Svg = styled.svg`
  display: block;
  width: 112px;
  height: 112px;
  border-radius: 50%;
  display: block;
  stroke-width: 4;
  stroke: green;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: ${fillAnimation} 0.4s ease-in-out 0.4s forwards,
    ${scaleAnimation} 0.3s ease-in-out 0.9s both;
`;

export const Path = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 96;
  stroke-dashoffset: 96;
  animation: ${strokeAnimation} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s
    forwards;
`;
