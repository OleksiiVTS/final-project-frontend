import { ConfirmBtn, BtnWrapper, TextDiv } from './InfoModal.styled';
// import Checkmark from 'components/TaskForm/Checkmark/Checkmark';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';

const InfoModal = ({ message, closeModal }) => {
  const theme = useSelector(selectTheme);

  const handleClick = () => {
    closeModal();
  };

  return (
    <>
      <>
        <TextDiv
          style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}
        >
          {message}
        </TextDiv>
        <BtnWrapper>
          <ConfirmBtn onClick={handleClick}>OK</ConfirmBtn>
        </BtnWrapper>
      </>
    </>
  );
};

export default InfoModal;
