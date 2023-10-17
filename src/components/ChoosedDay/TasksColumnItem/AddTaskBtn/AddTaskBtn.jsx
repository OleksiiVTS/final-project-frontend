import React from 'react';
import { StyledAddTaskBtn } from './AddTaskBtn.styled';

import sprite from '../../../Pictures/sprite.svg';
import { useState } from 'react';
import TaskModal from 'components/TaskModal/TaskModal';

const AddTaskBtn = ({ category }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = e => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <StyledAddTaskBtn aria-label="add task" onClick={handleClick}>
      <span>
        <svg>
          <use href={sprite + '#icon-plus'}></use>
        </svg>
      </span>
      Add task
      {showModal && (
        <TaskModal
          task={{ category, date: '12-12-2023' }}
          closeModal={closeModal}
        />
      )}
    </StyledAddTaskBtn>
  );
};

export default AddTaskBtn;
