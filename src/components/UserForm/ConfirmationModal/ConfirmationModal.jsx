import {
  BtnWrapper,
  CancelBtn,
  DeleteBtn,
  TextDiv,
} from 'components/DeleteForm/DeleteForm.styled';
import Modal from 'components/Modal/Modal';
import Checkmark from 'components/TaskForm/Checkmark/Checkmark';
import { useState } from 'react';

import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/auth/authOperations';
import { selectTheme } from 'redux/header/headerSlice';

const ConfirmationModal = ({ values, closeModal }) => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const theme = useSelector(selectTheme);

  const submitForm = () => {
    setIsSubmitted(true);
    dispatch(update(values));
    setTimeout(() => closeModal(), 1500);
  };

  return createPortal(
    <Modal closeModal={closeModal}>
      {isSubmitted ? (
        <Checkmark />
      ) : (
        <>
          <TextDiv
            style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}
          >
            Do you want to save the changes?
          </TextDiv>
          <BtnWrapper>
            <DeleteBtn onClick={submitForm}>Save</DeleteBtn>
            <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
          </BtnWrapper>
        </>
      )}
    </Modal>,
    document.body
  );
};

export default ConfirmationModal;
