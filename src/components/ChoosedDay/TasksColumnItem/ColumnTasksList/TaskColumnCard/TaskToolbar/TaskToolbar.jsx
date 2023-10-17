import { useState } from 'react';
import { useSelector } from 'react-redux';

import TaskModal from 'components/TaskModal/TaskModal';
import { StyledTaskToolbar } from './TaskToolbar.styled';

import { selectUser } from 'redux/auth/authSelectors';

import sprite from '../../../../../Pictures/sprite.svg';

const TaskToolbar = ({ task }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const user = useSelector(selectUser);
  const { avatarURL, name } = user;
  const { priority } = task;

  const priorityColors = {
    low: '#72C2F8',
    medium: '#F3B249',
    high: '#EA3D65',
  };

  const onCategoryChange = () => {
    console.log(`change category for id ${task._id}`);
  };

  const onEditClick = () => {
    setShowModal(true);
  };

  const onDeleteClick = () => {
    setShowModal(true);
    setDeleteTask(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setDeleteTask(false);
  };
  return (
    <StyledTaskToolbar
      className="taskToolbar"
      priority={priorityColors[priority]}
    >
      <div className="infoWrapper">
        <div className="imgWrapper">
          <img src={avatarURL} alt={name} />
        </div>
        <span>{priority}</span>
      </div>
      <div className="controlsWrapper">
        <button
          onClick={onCategoryChange}
          aria-label="change task category"
          type="button"
        >
          <svg>
            <use href={sprite + '#arrow-circle-broken-right'}></use>
          </svg>
        </button>
        <button onClick={onEditClick} aria-label="edit task" type="button">
          <svg>
            <use href={sprite + '#icon-pencil'}></use>
          </svg>
        </button>
        <button onClick={onDeleteClick} aria-label="delete task" type="button">
          <svg>
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </div>
      {showModal && (
        <TaskModal
          task={task}
          closeModal={closeModal}
          deleteTask={deleteTask}
        />
      )}
    </StyledTaskToolbar>
    //
  );
};

export default TaskToolbar;
