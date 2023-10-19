import { DeleteBtn, CancelBtn, BtnWrapper, TextDiv } from './DeleteForm.styled';
import { useDispatch } from 'react-redux';
import sprite from '../Pictures/sprite.svg';
import { deleteTask } from 'redux/task/taskOperations';
import Checkmark from 'components/TaskForm/Checkmark/Checkmark';
import { useState } from 'react';

const DeleteForm = ({ task, closeModal }) => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const removeTask = () => {
    dispatch(deleteTask(task._id));
    setIsSubmitted(true);
    setTimeout(() => closeModal(), 1500);
  };
  return (
    <>
      {isSubmitted ? (
        <Checkmark />
      ) : (
        <>
          <TextDiv>Do you want to delete the task?</TextDiv>
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
      )}{' '}
    </>
  );
};

export default DeleteForm;
