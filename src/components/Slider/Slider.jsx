import SliderItem from 'components/SliderItem/SliderItem';
import {
  MissedReviewsMessage,
  NextIcon,
  PrevIcon,
  SliderMainSection,
  SliderHeader,
} from './Slider.styled';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';

import { getReviews } from '../../redux/review/review-api';
import defaultReviews from './DefaultReviews';

const Slider = () => {
  const [reviews, setreviews] = useState(defaultReviews);

  useEffect(() => {
    (async () => {
      try {
        const data = await getReviews();
        setreviews(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const swiperInstance = useRef(null);

  const slideNext = () => {
    if (swiperInstance.current) {
      swiperInstance.current.slidePrev();
    }
  };

  const slidePrev = () => {
    if (swiperInstance.current) {
      swiperInstance.current.slideNext();
    }
  };

  return (
    <SliderMainSection>
      <SliderHeader>Reviews</SliderHeader>
      {reviews.length ? (
        <>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1440: {
                slidesPerView: 2,
              },
            }}
            onSwiper={swiper => {
              swiperInstance.current = swiper;
            }}
          >
            {reviews.map(review => (
              <SwiperSlide key={reviews.indexOf(review)}>
                <SliderItem
                  name={review.owner ? review.owner.username : 'Anonymous'}
                  comment={review.comment}
                  rating={review.rating}
                  avatar={
                    review.owner
                      ? review.owner.avatarURL
                      : 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <PrevIcon onClick={slidePrev} alt="previous slide" />
            <NextIcon onClick={slideNext} alt="next slide" />
          </div>
        </>
      ) : (
        <MissedReviewsMessage>Your review</MissedReviewsMessage>
      )}
    </SliderMainSection>
  );
};

export default Slider;
