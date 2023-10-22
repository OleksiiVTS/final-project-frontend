import React, { useState } from 'react';
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
import { getCurrentDate } from 'utils/calendar';
// import { getTasks } from 'redux/task/tasksAPI';

const StatisticsChart = ({ today }) => {
  const isTasks = useSelector(selectTasks);
  const currentDate = getCurrentDate();

  const dateTask = isTasks
    .map(task => task.date)
    .filter(el => {
      el.includes(currentDate);
      return el;
    });

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

  // const renderLabelMonth = () => {
  //   if (todoByMonth[0] === 'to-do') return todoByMonthPercentages;

  //   if (inprogressByMonth[0] === 'in-progress')
  //     return inprogressByMonthPercentages;
  //   if (doneByMonth[0] === 'done') return doneByMonthPercentages;
  // };
  const data = [
    {
      name: 'To-Do',
      uv: todoByMonthPercentages,
      pv: 0,
      amt: 100,
    },
    {
      name: 'In-Progress',
      uv: inprogressByMonthPercentages,
      pv: 0,
      amt: 100,
    },
    {
      name: 'Done',
      uv: doneByMonthPercentages,
      pv: 0,
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
