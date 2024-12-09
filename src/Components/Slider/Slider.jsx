import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';
// import required modules
import { Autoplay } from 'swiper/modules';
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={p1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p2} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
