import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,  
  XAxis,
  YAxis,
} from 'recharts';
import { selectTasks } from 'redux/task/taskSelectors';
import { StatsContainer, StatsPageBox } from './StatisticsChart.styled';
import { getCurrentDate } from 'utils/calendar';
import { useEffect } from 'react';
import { getTasks } from 'redux/task/taskOperations';

const StatisticsChart = ({ currentDateData }) => {
  const dispatch = useDispatch();
  const today = getCurrentDate();

  const byMonth = currentDateData.slice(0, 7);
  
  useEffect(() => {
    try {
      if (byMonth) {
        dispatch(getTasks(byMonth));
      } else {
        dispatch(getTasks(today.slice(0, 7)));
      }
    } catch (error) {}
  }, [dispatch, byMonth, today]);
  
  const isTasks = useSelector(selectTasks);

  const dateTask = isTasks
    .filter(el => el.date === currentDateData)
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

  // const renderLabelMonth = () => {
  //   if (todoByMonth[0] === 'to-do') return todoByMonthPercentages;

  //   if (inprogressByMonth[0] === 'in-progress')
  //     return inprogressByMonthPercentages;
  //   if (doneByMonth[0] === 'done') return doneByMonthPercentages;
  // };
  const data = [
    {
      name: 'To Do',
      'By Day': todoByDayPercentages,
      'By Month': todoByMonthPercentages,
    },
    {
      name: 'In Progress',
      'By Day': inprogressByDayPercentages,
      'By Month': inprogressByMonthPercentages,
    },
    {
      name: 'Done',
      'By Day': doneByDayPercentages,
      'By Month': doneByMonthPercentages,
    },
  ];

  return (
    <StatsPageBox>
      <StatsContainer>
        <BarChart
          width={640}
          height={424}
          data={data}
          margin={{ top: 77, right: 32, left: 32, bottom: 60 }}
        >
          <CartesianGrid vertical={false} stroke="#E3F3FF" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            fontSize={14}
            fontFamily="Inter"
            tickMargin={20}
          />
          <YAxis
            domain={[0, 100]}
            tickCount={6}
            axisLine={false}
            tickLine={false}
            label={{
              value: 'Tasks',
              position: 'top',
              dx: -14,
              dy: -24,
              fontFamily: 'Inter',
              fontSize: 14,
              fontWeight: 600,
              fill: '#343434',
            }}
            tickMargin={32}
            fontFamily="Inter"
            fontSize={14}
          />
          <Legend
            wrapperStyle={{ position: 'absolute', top: -50 }}
            layout="horizontal"
            verticalAlign="top"
            align="end"
            iconSize={8}
            iconType="circle"
            markerWidth={5}
            fontSize={16}
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0.2">
              <stop offset="30%" stopColor="#FFD2DD" stopOpacity={1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="colorXv" x1="0" y1="1" x2="0" y2="0.2">
              <stop offset="30%" stopColor="#3E85F3" stopOpacity={1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Bar dataKey="By Day" fill="url(#colorUv)" barSize={27} radius={10}>
            <LabelList
              dataKey="By Day"
              position="insideTop"
              fill="#343434"
              style={{ fontWeight: 500 }}
            />
          </Bar>
          <Bar dataKey="By Month" fill="url(#colorXv)" barSize={27} radius={10}>
            <LabelList
              dataKey="By Month"
              position="insideTop"
              fill="#343434"
              style={{ fontWeight: 500 }}
            />
          </Bar>
        </BarChart>
      </StatsContainer>
    </StatsPageBox>
  );
};

export default StatisticsChart;
