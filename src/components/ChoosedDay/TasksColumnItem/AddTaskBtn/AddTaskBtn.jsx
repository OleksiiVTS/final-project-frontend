import { useState } from 'react';
import { useParams } from 'react-router';

import { StyledAddTaskBtn } from './AddTaskBtn.styled';
import TaskModal from 'components/TaskModal/TaskModal';
import sprite from 'components/Pictures/sprite.svg';
import { useTheme } from 'styled-components';

const AddTaskBtn = ({ category }) => {
  const [showModal, setShowModal] = useState(false);
  const { currentDate } = useParams();

  const handleClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const { theme } = useTheme();
  return (
    <>
      <StyledAddTaskBtn
        aria-label="add task"
        onClick={handleClick}
        theme={theme}
      >
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
