import React from 'react';
import { StyledAddTaskBtn } from './AddTaskBtn.styled';

import sprite from '../../../Pictures/sprite.svg';

const AddTaskBtn = ({ category }) => {
  const handleClick = e => {
    console.log(`add task to ${category}`);
    //
    // onClick={dispatch(addTask)}
  };

  return (
    <StyledAddTaskBtn onClick={handleClick}>
      <span>
        <svg>
          <use href={sprite + '#icon-plus'}></use>
        </svg>
      </span>
      Add task
    </StyledAddTaskBtn>
  );
};

export default AddTaskBtn;
