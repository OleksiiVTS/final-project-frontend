import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
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

const StatisticsChart = ({ currentDate }) => {
  const isTasks = useSelector(selectTasks);
  // const [currentDay] = useState(currentDate);

  // useEffect(() => {
  //   setCurrentDay(currentDate);
  // }, [currentDate]);

  const dateTask = isTasks
    .filter(el => el.date === currentDate)
    .map(task => task.category);

  const todoByDay = dateTask.filter(el => el.includes('to-do')).length;

  const inprogressByDay = dateTask.filter(el =>
    el.includes('in-progress')
  ).length;

  const doneByDay = dateTask.filter(el => el.includes('done')).length;

  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;

  const todoByDayPercentages = ((todoByDay / allTasksByDay) * 100).toFixed(0);

  const inprogressByDayPercentages = (
    (inprogressByDay / allTasksByDay) *
    100
  ).toFixed(0);

  const doneByDayPercentages = ((doneByDay / allTasksByDay) * 100).toFixed(0);

  const dataCurrentMonth = {
    categoryTask: isTasks.map(task => task.category),
  };

  const todoByMonth = dataCurrentMonth.categoryTask.filter(el =>
    el.includes('to-do')
  );

  const inprogressByMonth = dataCurrentMonth.categoryTask.filter(el =>
    el.includes('in-progress')
  );

  const doneByMonth = dataCurrentMonth.categoryTask.filter(el =>
    el.includes('done')
  );

  const allTasksByMonth =
    todoByMonth.length + inprogressByMonth.length + doneByMonth.length;

  const todoByMonthPercentages = (
    (todoByMonth.length / allTasksByMonth) *
    100
  ).toFixed(0);

  const inprogressByMonthPercentages = (
    (inprogressByMonth.length / allTasksByMonth) *
    100
  ).toFixed(0);

  const doneByMonthPercentages = (
    (doneByMonth.length / allTasksByMonth) *
    100
  ).toFixed(0);

  const data = [
    {
      name: 'To-Do',
      uv: todoByMonthPercentages,
      pv: todoByDayPercentages,
      amt: 100,
    },
    {
      name: 'In-Progress',
      uv: inprogressByMonthPercentages,
      pv: inprogressByDayPercentages,
      amt: 100,
    },
    {
      name: 'Done',
      uv: doneByMonthPercentages,
      pv: doneByDayPercentages,
      amt: 100,
    },
  ];

  return (
    <BarChart
      width={1100}
      height={800}
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
