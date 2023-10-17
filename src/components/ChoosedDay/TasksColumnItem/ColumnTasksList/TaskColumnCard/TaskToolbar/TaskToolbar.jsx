import { useState } from 'react';
import { useSelector } from 'react-redux';

import TaskModal from 'components/TaskModal/TaskModal';
import { StyledTaskToolbar } from './TaskToolbar.styled';

import { selectUser } from 'redux/auth/authSelectors';

import sprite from 'components/Pictures/sprite.svg';
import CategoryModal from './CategoryModal/CategoryModal';

const TaskToolbar = ({ task }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  const [categoryModal, setCategoryModal] = useState({
    isOpen: false,
    coords: null,
  });

  const user = useSelector(selectUser);
  const { avatarURL, name } = user;
  const { priority } = task;

  const priorityColors = {
    low: '#72C2F8',
    medium: '#F3B249',
    high: '#EA3D65',
  };

  const onCategoryChange = ({ clientX, clientY }) => {
    setCategoryModal({
      isOpen: true,
      coords: { clientX, clientY },
    });
  };

  const closeCategoryModal = () => {
    setCategoryModal({
      isOpen: false,
      coords: null,
    });
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

      {categoryModal.isOpen && (
        <CategoryModal
          task={task}
          coords={categoryModal.coords}
          onClose={closeCategoryModal}
        />
      )}
    </StyledTaskToolbar>
    //
  );
};

export default TaskToolbar;
