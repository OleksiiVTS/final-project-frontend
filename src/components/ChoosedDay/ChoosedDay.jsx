import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/task/taskSelectors';

import { StyledChoosedDay } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
// import { format } from 'date-fns';

const ChoosedDay = () => {
  const { currentDate } = useParams();
  console.log('currentDate', currentDate);
  const day = currentDate.slice(-2);
  // const day = new Date(currentDate).getDate();
  // const day = format(currentDate, 'dd');
  console.log(day);

  const emptymonthTasks = useSelector(selectTasks);

  const monthTasks = [
    {
      _id: '65294bc4924f405b17970a7e',
      title: 'first',
      start: '14:15',
      end: '03:00',
      priority: 'medium',
      date: '2023-12-31',
      category: 'done',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      _id: '65294cf6924f405b17970a82',
      title: 'second',
      start: '14:15',
      end: '03:00',
      priority: 'low',
      date: '2023-12-31',
      category: 'to-do',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      _id: '65294d04924f405b17970a85',
      title: 'third',
      start: '14:15',
      end: '03:00',
      priority: 'high',
      date: '2023-12-31',
      category: 'to-do',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      _id: '6529508bbbaee1c2770c5ba9',
      title: 'fourth',
      start: '14:15',
      end: '03:00',
      priority: 'low',
      date: '2023-12-31',
      category: 'done',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      _id: '652ad610673d4d226e29333e',
      title: 'fifth',
      start: '15:30',
      end: '12:12',
      priority: 'high',
      date: '2023-12-31',
      category: 'done',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
    {
      _id: '652ad7a68911da03b5124190',
      title: 'sixth',
      start: '15:30',
      end: '12:12',
      priority: 'medium',
      date: '2023-12-31',
      category: 'to-do',
      owner: {
        $oid: '6529476a97b7633982504c1e',
      },
    },
  ];

  const dayTasks = monthTasks.filter(task => task.date.slice(-2) === day);
  const categoryList = ['to-do', 'in-progress', 'done'];
  // const priorityList = ['low', 'medium', 'high'];

  const currentTasks = [[], [], []];

  dayTasks.forEach(task => {
    if (task.category === categoryList[0]) currentTasks[0].push(task);
    if (task.category === categoryList[1]) currentTasks[1].push(task);
    if (task.category === categoryList[2]) currentTasks[2].push(task);
  });

  // const currentTasks = tasksForCurrentDay.reduce((acc, task) => {
  //   console.log(task.category);
  //   acc[task.category] = [...acc[task.category], task];
  //   return acc;
  // }, {});
  // console.log(currentTasks);

  return (
    <StyledChoosedDay>
      {/* <DayCalendarHead /> */}
      <TasksColumnsList currentTasks={currentTasks} />
    </StyledChoosedDay>
    //
  );
};

export default ChoosedDay;
