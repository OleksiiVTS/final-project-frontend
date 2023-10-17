import { StyledTaskToolbar } from './TaskToolbar.styled';

import sprite from '../../../../../Pictures/sprite.svg';
import { useState } from 'react';
import TaskModal from 'components/TaskModal/TaskModal';
// import { useSelector } from 'react-redux';

const TaskToolbar = ({ priority, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);

  // const user = useSelector('user')
  const user = {
    _id: { $oid: '6529476a97b7633982504c1e' },
    email: 'vlad4@mail.com',
    password: '$2a$10$/LQqZa97FIpqrzsuN0fhi.yzcowlVFbq5TpxWaV5iitOMgexu.lVi',
    subscription: 'starter',
    avatarURL:
      'http://res.cloudinary.com/dnd9pw6nh/image/upload/v1697204074/avatarUser/scymdkr4ztejgfzcj8qh.jpg',
    public_id: 'avatarUser/scymdkr4ztejgfzcj8qh',
    verify: true,
    name: 'vlad',
    verificationToken: ' ',
    createdAt: { $date: { $numberLong: '1697204074420' } },
    updatedAt: { $date: { $numberLong: '1697315175368' } },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mjk0NzZhOTdiNzYzMzk4MjUwNGMxZSIsImlhdCI6MTY5NzMxNTE3NSwiZXhwIjoxNjk3Mzk3OTc1fQ.c3V0oMP1jeWgx4RiyHPD5pJot0DdtNl2Eus3B-juXOw',
  };

  const taskFromTheProps = {
    _id: '2222222',
    title: 'my task',
    start: '09:00',
    end: '13:00',
    priority: 'medium',
    category: 'to-do',
  };
  const { avatarURL, name } = user;

  const priorityColors = {
    low: '#72C2F8',
    medium: '#F3B249',
    high: '#EA3D65',
  };

  const onCategoryChange = e => {
    console.log(`change category for id ${id}`);
  };

  const onEditClick = e => {
    setShowModal(true);
  };

  const onDeleteClick = e => {
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
          task={taskFromTheProps}
          closeModal={closeModal}
          deleteTask={deleteTask}
        />
      )}
    </StyledTaskToolbar>
    //
  );
};

export default TaskToolbar;
