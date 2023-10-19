
import SliderItem from 'components/SliderItem/SliderItem';
import {
  // MissedReviewsMessage,
  NextIcon, PrevIcon, SliderMainSection, SliderHeader
} from './Slider.styled';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  // useEffect,
  useRef,
  // useState
} from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import './swiper.css';
// import { getAll } from 'api/reviews';


const Slider = () => { 

  const reviews = [{
    name: "Artem",
    comment: "Best coment",
    rating: 4,
    avatar: "https://gravatar.com/avatar/e0b8c75db831df037272a78970c97dec?s=400&d=robohash&r=x",
  },
  {
    name: "Donald",
    comment: "Good job",
    rating: 3,
    avatar: "https://robohash.org/fe7be8ed9c9b7b22368c98f2959a6bee?set=set4&bgset=&size=400x400",
    },
  {
    name: "Anton",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae maiores nulla obcaecati molestias ipsa deleniti praesentium eum porro explicabo! Obcaecati, unde iure. Pariatur dolore, dolores a iusto at ipsa!",
    rating: 2,
    avatar: "https://i.pravatar.cc/150?img=3"
  },{
    name: "Frenk",
    comment: "Lorem ipsum dolor a iusto at ipsa!",
    rating: 1,
    avatar: "https://i.pravatar.cc/150?img=66"
  },{
    name: "Anton",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae maiores nulla obcaecati molestias ipsa deleniti praesentium eum porro explicabo! Obcaecati, unde iure. Pariatur dolore, dolores a iusto at ipsa!",
    rating: 2,
    avatar: ""
  },{
    name: "Anton",
    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quae maiores nulla obcaecati molestias ipsa deleniti praesentium eum porro explicabo! Obcaecati, unde iure. Pariatur dolore, dolores a iusto at ipsa!",
    rating: 2,
    avatar: "https://i.pravatar.cc/150?img=50"
  }]
   
  // const [reviews, setreviews] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //         const data = await getAll();
  //         setreviews(data);
  //       }
  //      catch (e){
  //       console.log(e);
  //     }
  //   })();
  // }, [])
  
  const swiperInstance = useRef(null);

  const slideNext  = () => {
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
      {/* {reviews.length ? <>
      </> : <MissedReviewsMessage>Your review</MissedReviewsMessage>
      } */}
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
          onSwiper={(swiper) => {
            swiperInstance.current = swiper;
          }}
        >
          {reviews.map(review => <SwiperSlide key={reviews.indexOf(review)}><SliderItem name={review.name} comment={review.comment} rating={review.rating} avatar={review.avatar} /></SwiperSlide>)}
        </Swiper>
        <div>
          <PrevIcon onClick={slidePrev} alt="previous slide" />
          <NextIcon onClick={slideNext} alt="next slide" />
        </div>
    </SliderMainSection>
  )
}

export default Slider;