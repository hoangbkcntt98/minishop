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
SwiperCore.use([Navigation, Autoplay]);


export default function ImageSlider(props) {
    React.useEffect(() => {
        console.log(props.images);
    }, [])
    const SliderItem = (url) => {
        return (
            <img src={url}></img>
            //   <div className="slider-item">
            //     <div className="slider-item__info">
            //       <div className="slider-item__info__title"></div>
            //       <div className="slider-item__info__description"></div>
            //       <div className="slider-item__info__btn"></div>
            //     </div>
            //   </div>
        )
    }

    return (
        <>
            <div className="product__images__slide">
                <Swiper
                    navigation={true}

                    // slidesPerView={'auto'}
                    // pagination={{
                    //     "clickable": true
                    // }}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                >
                    {props.images && props.images.map(img =>
                        <SwiperSlide>
                            <div className="product__images__slide__item">
                                <img src={img.url}></img>
                                <p>{img.code}</p>
                            </div>

                        </SwiperSlide>)}
                </Swiper>
            </div>

        </>
    )
}