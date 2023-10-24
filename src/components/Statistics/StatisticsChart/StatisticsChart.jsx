import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';

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
import {
  StatsContainer,
  StatsPageBox,
  // WrapperDiagram,
} from './StatisticsChart.styled';
import { useState } from 'react';

const StatisticsChart = ({ date, onClickPrev, onClickNext, setDate }) => {
  const isTasks = useSelector(selectTasks);

  const parsedDate = format(date, 'yyyy-MM-dd');

  const dateTask = isTasks
    .filter(el => el.date === parsedDate)
    .map(task => task.category);

  const todoByDay = dateTask.filter(el => el.includes('to-do')).length;

  const inprogressByDay = dateTask.filter(el =>
    el.includes('in-progress')
  ).length;

  const doneByDay = dateTask.filter(el => el.includes('done')).length;

  const allTasksByDay = todoByDay + inprogressByDay + doneByDay;

  const todoByDayPercentages = Number(
    ((todoByDay / allTasksByDay) * 100).toFixed(0)
  );

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
      name: 'To Do',
      'By Day': isNaN(todoByDayPercentages) === true ? 0 : todoByDayPercentages,
      'By Month':
        isNaN(todoByMonthPercentages) === true ? 0 : todoByMonthPercentages,
    },
    {
      name: 'In Progress',
      'By Day':
        isNaN(inprogressByDayPercentages) === true
          ? 0
          : inprogressByDayPercentages,
      'By Month':
        isNaN(inprogressByMonthPercentages) === true
          ? 0
          : inprogressByMonthPercentages,
    },
    {
      name: 'Done',
      'By Day': isNaN(doneByDayPercentages) === true ? 0 : doneByDayPercentages,
      'By Month':
        isNaN(doneByMonthPercentages) === true ? 0 : doneByMonthPercentages,
    },
  ];

  // function screenWidth() {
  //   if (window.screen.width < 768) {
  //     width: "307";
  //   } else if (768 < window.screen.width < 1440) {
  //     width: "640";
  //   } else {
  //     width: "860";
  //   }
  // }
  const [width, setWidth] = useState(window.innerWidth / 2);
  window.addEventListener(
    'resize',
    event => {
      setWidth(event.target.outerWidth / 2);
    },
    false
  );

  return (
    <StatsPageBox>
      <PeriodPaginator
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
        setDate={setDate}
        date={date}
      />
      <StatsContainer>
        <BarChart
          width={width}
          height={440}
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
            wrapperStyle={{
              position: 'absolute',
              top: -60,
              right: 135,
            }}
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
          <Bar dataKey="By Day" fill="url(#colorUv)" barSize={22} radius={10}>
            <LabelList
              barCategoryGap={50}
              dataKey="By Day"
              position="insideTop"
              fill="#343434"
              style={{ fontWeight: 500 }}
            />
          </Bar>
          <Bar dataKey="By Month" fill="url(#colorXv)" barSize={22} radius={10}>
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
