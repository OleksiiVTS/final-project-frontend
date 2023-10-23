import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import {
  ModalBackdrop,
  ModalContainer,
  CloseBtnContainer,
  CloseBtn,
} from './Modal.styled';
import sprite from '../Pictures/sprite.svg';

import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/header/headerSlice';

const Modal = ({ closeModal, children }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, closeModal]);

  return (
    <ModalBackdrop
      onClick={() => {
        closeModal();
      }}
    >
      <ModalContainer
        onClick={e => e.stopPropagation()}
        bg={theme !== 'dark' ? '#fff' : 'var(--color-theme-dark)'}
      >
        <CloseBtnContainer onClick={closeModal}>
          <CloseBtn bg={theme !== 'dark' ? '#fff' : 'var(--color-theme-dark)'}>
            <svg
              width="24"
              height="24"
              stroke={theme === 'dark' ? '#fff' : '#000'}
            >
              <use href={sprite + '#close-btn'}></use>
            </svg>
          </CloseBtn>
        </CloseBtnContainer>
        {children}
      </ModalContainer>
    </ModalBackdrop>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
