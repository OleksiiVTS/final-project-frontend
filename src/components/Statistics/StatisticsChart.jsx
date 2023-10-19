import React from 'react';
import { useSelector } from 'react-redux';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { selectTasks } from 'redux/task/taskSelectors';
// import { getTasks } from 'redux/task/tasksAPI';

const StatisticsChart = () => {
  const isTasks = useSelector(selectTasks);

  const dataCurrentDay = {
    categoryTask: isTasks.map(task => task.category),
  };
  const todoByDay = dataCurrentDay.categoryTask.filter(el =>
    el.includes('to-do')
  ).length;
  const inprogressByDay = dataCurrentDay.categoryTask.filter(el =>
    el.includes('in-progress')
  ).length;
  const doneByDay = dataCurrentDay.categoryTask.filter(el =>
    el.includes('done')
  ).length;
  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;
  const todoByDayPercentages = (todoByDay / allTasksByDay) * 100;
  const inprogressByDayPercentages = (inprogressByDay / allTasksByDay) * 100;
  const doneByDayPercentages = (doneByDay / allTasksByDay) * 100;

  const data = [
    {
      name: 'To-Do',
      uv: 50,
      pv: todoByDayPercentages,
      amt: 100,
    },
    {
      name: 'In-Progress',
      uv: 50,
      pv: inprogressByDayPercentages,
      amt: 100,
    },
    {
      name: 'Done',
      uv: 50,
      pv: doneByDayPercentages,
      amt: 100,
    },
  ];
  return (
    <BarChart
      width={1400}
      height={860}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="amt" />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="pv"
        fill="#82ca9d"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      />
    </BarChart>
  );
};

export default StatisticsChart;
