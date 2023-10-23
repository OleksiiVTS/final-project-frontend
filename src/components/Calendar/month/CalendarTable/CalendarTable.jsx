// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoading, selectTasks } from 'redux/task/taskSelectors';

import Loader from 'components/Loader';
// import TaskModal from 'components/TaskModal/TaskModal';
import { renderCalendar } from 'utils/calendar';

import { GridWrapper } from './CalendarTable.styled';

const CalendarTable = ({ theme }) => {
  const { currentDate } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const tasksList = useSelector(selectTasks);

  // let taskToEdit = null;

  const handleClick = task => {
    // taskToEdit = task;
    // console.log(taskToEdit);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <GridWrapper
      bordercolor={
        theme === 'dark'
          ? 'rgba(255, 255, 255, 0.15)'
          : 'rgba(220, 227, 229, 0.80)'
      }
      bgcolor={theme === 'dark' ? '#21222c' : '#ffffff'}
    >
      {renderCalendar({
        isLoading,
        currentDate,
        tasksList,
        theme,
        handleClick,
      })}

      {/* {showModal && (
        <TaskModal
          task={taskToEdit}
          closeModal={closeModal}
          deleteTask={deleteTask}
        />
      )} */}
    </GridWrapper>
  );
};

export default CalendarTable;
