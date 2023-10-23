import { StyledTasksColumnsList } from './TasksColumnsList.styled';
import TasksColumnItem from '../TasksColumnItem/TasksColumnItem';

import { parseCategoryTitle } from 'helpers/helpers';
import { CATEGORY_LIST } from 'constants/categoryList';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const TasksColumnsList = ({ sortedTasks }) => {
  return (
    <StyledTasksColumnsList className="TasksColumnsList">
      <Swiper
        // spaceBetween={10}
        // slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          // 375: {
          //   width: 375,
          //   slidesPerView: 1,
          // },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1440: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        // slidesPerView={true}
        width={375}
      >
        {CATEGORY_LIST.map(category => (
          <SwiperSlide key={category}>
            <TasksColumnItem
              title={parseCategoryTitle(category)}
              category={category}
              tasks={sortedTasks[category]}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </StyledTasksColumnsList>
  );
};

export default TasksColumnsList;
