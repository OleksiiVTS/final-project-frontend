import { useParams } from 'react-router';
import { StyledAddTaskBtn } from './AddTaskBtn.styled';

import sprite from '../../../Pictures/sprite.svg';
import { useState } from 'react';
import TaskModal from 'components/TaskModal/TaskModal';

const AddTaskBtn = ({ category }) => {
  const [showModal, setShowModal] = useState(false);
  const { currentDate } = useParams();

  const handleClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <StyledAddTaskBtn aria-label="add task" onClick={handleClick}>
        <span>
          <svg>
            <use href={sprite + '#icon-plus'}></use>
          </svg>
        </span>
        Add task
      </StyledAddTaskBtn>
      {showModal && (
        <TaskModal
          task={{ category, date: currentDate }}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default AddTaskBtn;
