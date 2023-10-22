import { DeleteBtn, CancelBtn, BtnWrapper, TextDiv } from './DeleteForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../Pictures/sprite.svg';
import { deleteTask } from 'redux/task/taskOperations';
import Checkmark from 'components/TaskForm/Checkmark/Checkmark';
import { useState } from 'react';
import { selectTheme } from 'redux/header/headerSlice';

const DeleteForm = ({ task, closeModal }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const removeTask = () => {
    setIsSubmitted(true);
    setTimeout(() => closeModal(), 1500);
    setTimeout(() => dispatch(deleteTask(task._id)), 1500);
  };
  return (
    <>
      {isSubmitted ? (
        <Checkmark />
      ) : (
        <>
          <TextDiv
            style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}
          >
            Do you want to delete the task?
          </TextDiv>
          <BtnWrapper>
            <DeleteBtn onClick={removeTask}>
              <svg width="18" height="18" style={{ marginRight: 8 }}>
                <use href={sprite + '#trashbin'}></use>
              </svg>
              Delete
            </DeleteBtn>
            <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
          </BtnWrapper>
        </>
      )}
    </>
  );
};

export default DeleteForm;
