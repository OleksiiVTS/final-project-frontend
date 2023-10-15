import React from 'react';
import { StyledAddTaskBtn } from './AddTaskBtn.styled';

import sptite from '../../../Pictures/sprite.svg';

const AddTaskBtn = () => {
  return (
    <StyledAddTaskBtn>
      <span>
        <svg>
          <use href={sptite + '#icon-plus'}></use>
        </svg>
      </span>
      Add task
    </StyledAddTaskBtn>
  );
};

export default AddTaskBtn;
