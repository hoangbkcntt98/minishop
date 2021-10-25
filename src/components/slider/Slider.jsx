import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'



// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Autoplay]);


export default function Slider() {

  const SliderItem = () =>{
    return (
      <div className="slider-item">
        <div className="slider-item__info">
          <div className="slider-item__info__title"></div>
          <div className="slider-item__info__description"></div>
          <div className="slider-item__info__btn"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Swiper
        navigation={true}
        className="my-slider"
        // slidesPerView={'auto'}
        pagination={{
          "clickable": true
        }}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        loop={true}
      >
        <SwiperSlide><SliderItem/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </>
  )
}