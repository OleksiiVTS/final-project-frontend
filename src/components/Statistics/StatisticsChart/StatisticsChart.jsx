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

const StatisticsChart = ({ today }) => {
  const isTasks = useSelector(selectTasks);

  const dateTask = isTasks.map(el => {
    return el.date;
  });
  console.log('dateTask: ', dateTask);

  const dataCurrentMonth = {
    categoryTask: isTasks.map(task => task.category),
  };
  const todoByMonth = dataCurrentMonth.categoryTask.filter(el =>
    el.includes('to-do')
  ).length;
  const inprogressByMonth = dataCurrentMonth.categoryTask.filter(el =>
    el.includes('in-progress')
  ).length;
  const doneByMonth = dataCurrentMonth.categoryTask.filter(el =>
    el.includes('done')
  ).length;

  const allTasksByMonth = todoByMonth + inprogressByMonth + doneByMonth;
  const todoByMonthPercentages = (
    (todoByMonth / allTasksByMonth) *
    100
  ).toFixed(0);
  const inprogressByMonthPercentages = (
    (inprogressByMonth / allTasksByMonth) *
    100
  ).toFixed(0);
  const doneByMonthPercentages = (
    (doneByMonth / allTasksByMonth) *
    100
  ).toFixed(0);

  const data = [
    {
      name: 'To-Do',
      uv: 50,
      pv: todoByMonthPercentages,
      amt: 100,
    },
    {
      name: 'In-Progress',
      uv: 50,
      pv: inprogressByMonthPercentages,
      amt: 100,
    },
    {
      name: 'Done',
      uv: 50,
      pv: doneByMonthPercentages,
      amt: 100,
    },
  ];

  const renderCustomBarLabelDay = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#343434"
        textAnchor="middle"
        dy={-6}
      >{`${todoByMonthPercentages}%`}</text>
    );
  };
  const renderCustomBarLabelMonth = ({
    payload,
    x,
    y,
    width,
    height,
    value,
  }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#343434"
        textAnchor="middle"
        dy={-6}
      >{`${todoByMonthPercentages}%`}</text>
    );
  };

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
        label={renderCustomBarLabelMonth}
      />
      <Bar
        dataKey="uv"
        fill="#8884d8"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
        label={renderCustomBarLabelDay}
      />
    </BarChart>
  );
};

export default StatisticsChart;
