import React from 'react';
import { useSelector } from 'react-redux';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { selectTasks } from 'redux/task/taskSelectors';
// import { getTasks } from 'redux/task/tasksAPI';

const StatisticsChart = () => {
  const isTasks = useSelector(selectTasks);
  console.log('isTasks: ', isTasks);
  const categoryTask = isTasks.map(task => {
    return task.category;
  });
  console.log('categoryTask: ', categoryTask);

  // const getTasksResp = async interval => {
  //   const tasksMonth = await getTasks(interval);
  //   console.log('tasksMonth: ', tasksMonth);

  //   console.log('lengts: ', tasksMonth.length);
  //   tasksMonth.map(task => console.log(task.category));
  // };
  // getTasksResp(2023);
  // // const mapTask = () => {
  //   getTasksResp(2023-10).map(task => console.log(task.category));

  // }
  // mapTask()
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <BarChart width={900} height={600} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#82ca9d" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
};

export default StatisticsChart;
