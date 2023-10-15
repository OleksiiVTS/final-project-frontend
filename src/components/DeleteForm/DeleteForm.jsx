import { DeleteBtn, CancelBtn, BtnWrapper, TextDiv } from './DeleteForm.styled';

import sprite from '../Pictures/sprite.svg';

const DeleteForm = ({ task, closeModal }) => {
  const deleteTask = () => {
    console.log('this function should delete the task.');
  };
  return (
    <>
      <TextDiv>Do you want to delete the task?</TextDiv>
      <BtnWrapper>
        <DeleteBtn onClick={deleteTask}>
          <svg width="18" height="18" style={{ marginRight: 8 }}>
            <use href={sprite + '#trashbin'}></use>
          </svg>
          Delete
        </DeleteBtn>
        <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
      </BtnWrapper>
    </>
  );
};

export default DeleteForm;
