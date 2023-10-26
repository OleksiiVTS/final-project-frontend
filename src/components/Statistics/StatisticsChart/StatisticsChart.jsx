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
import { StatsContainer, StatsPageBox } from './StatisticsChart.styled';
import { useState } from 'react';
import { selectTheme } from 'redux/header/headerSlice';

const StatisticsChart = ({ date, onClickPrev, onClickNext, setDate }) => {
  const isTasks = useSelector(selectTasks);
  const theme = useSelector(selectTheme);

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

  const [width, setWidth] = useState(window.innerWidth / 1.7);
  window.addEventListener(
    'resize',
    event => {
      setWidth(event.target.innerWidth / 1.7);
    },
    false
  );

  const size = width >= 307 ? width : 307;

  return (
    <StatsPageBox
      bg={theme === 'dark' ? 'var(--color-choice-dark-no-active)' : '#fff'}
      color={theme === 'dark' ? '#fff' : '#000'}
    >
      <div>
        <PeriodPaginator
          onClickPrev={onClickPrev}
          onClickNext={onClickNext}
          setDate={setDate}
          date={date}
        />
        <StatsContainer>
          <BarChart
            width={size <= 1065 ? size : 1065}
            height={440}
            data={data}
            margin={{ top: 77, right: 32, left: 32, bottom: 60 }}
          >
            <CartesianGrid vertical={false} stroke="#a5a5a5" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              fontSize={14}
              fontFamily="Inter"
              tickMargin={width <= 335 ? 8 : 20}
            />
            {theme === 'light' ? (
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
            ) : (
              <YAxis
                domain={[0, 100]}
                tickCount={6}
                axisLine={false}
                tickLine={false}
                label={{
                  value: 'Tasks',
                  position: 'top',
                  dx: -22,
                  dy: -24,
                  fontFamily: 'Inter',
                  fontSize: 14,
                  fontWeight: 600,
                  fill: '#666',
                }}
                tickMargin={32}
                fontFamily="Inter"
                fontSize={18}
              />
            )}
            <Legend
              wrapperStyle={{
                width: 'auto',
                position: 'absolute',
                top: width * 1.7 > 768 ? -105 : -60,
                right: 0,
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
                <stop offset="50%" stopColor="#ffd2dd" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="rgb(255, 210, 221)"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="colorXv" x1="0" y1="1" x2="0" y2="0.2">
                <stop offset="50%" stopColor="#3E85F3" stopOpacity={1} />
                <stop
                  offset="100%"
                  stopColor="rgb(62, 133, 243)"
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <Bar dataKey="By Day" fill="url(#colorUv)" barSize={22} radius={10}>
              <LabelList
                barCategoryGap={50}
                dataKey="By Day"
                position="top"
                fill={theme === 'light' ? '#343434' : '#ffffff'}
                style={{ fontWeight: 400, fontFamily: 'Inter', fontSize: 14 }}
              />
            </Bar>
            <Bar
              dataKey="By Month"
              fill="url(#colorXv)"
              barSize={22}
              radius={10}
            >
              <LabelList
                dataKey="By Month"
                position="top"
                fill={theme === 'light' ? '#343434' : '#ffffff'}
                style={{ fontWeight: 400, fontFamily: 'Inter', fontSize: 14 }}
              />
            </Bar>
          </BarChart>
        </StatsContainer>
      </div>
    </StatsPageBox>
  );
};

export default StatisticsChart;
