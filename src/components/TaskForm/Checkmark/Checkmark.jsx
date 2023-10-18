const { Path, Circle, Svg, CheckmarkWrap } = require('./Checkmark.styled');

const Checkmark = () => {
  return (
    <CheckmarkWrap>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104 104"
        width="104"
        height="104"
      >
        <Circle cx="52" cy="52" r="50" fill="none" />
        <Path fill="none" d="M28.2 54.2l14.2 14.4 33.4-33.6" />
      </Svg>
    </CheckmarkWrap>
  );
};

export default Checkmark;
