import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/task/taskSelectors';

import { StyledChoosedDay } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
// import { format } from 'date-fns';

const ChoosedDay = () => {
  const { currentDate } = useParams();
  // console.log('currentDate', currentDate);
  const day = currentDate.slice(-2);
  // const day = new Date(currentDate).getDate();
  // const day = format(currentDate, 'dd');
  // console.log('day', day);

  const monthTasks = useSelector(selectTasks);

  const filterDayTasks = (monthTasks, day) => {
    return monthTasks.filter(task => task.date.slice(-2) === day);
  };

  const dayTasks = filterDayTasks(monthTasks, day);
  const categoryList = ['to-do', 'in-progress', 'done'];
  // const priorityList = ['low', 'medium', 'high'];

  const CreateSortedTasks = (categories, tasks) => {
    const obj = {};
    categories.forEach(cat => (obj[cat] = []));
    tasks.forEach(task => obj[task.category].push(task));
    return obj;
  };
  const sortedTasks = CreateSortedTasks(categoryList, dayTasks);

  return (
    <StyledChoosedDay>
      {/* <DayCalendarHead /> */}
      <TasksColumnsList
        // currentTasks={currentTasks}
        sortedTasks={sortedTasks}
        categoryList={categoryList}
      />
    </StyledChoosedDay>
    //
  );
};

export default ChoosedDay;
