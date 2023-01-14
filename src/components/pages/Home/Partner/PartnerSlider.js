import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './partner.css'

const PartnerSlider = ({partners}) => {
    return (
        <>
      <Swiper
      // slidesPerView={3}
        
        breakpoints={{
          // when window width is >= 640px
          320: {
            // width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        // slidesPerGroup={1}
        grabCursor={true}
        loop={true}
 
        centeredSlides={true}
        modules={[Autoplay]}
        className="partnerSlider"
      >
       
          <>
          {
            partners.map((partner,i)=><SwiperSlide key={i}>
              <img src={partner} alt="" />
            </SwiperSlide>)
          }
          </>
      </Swiper>
    </>
    );
};

export default PartnerSlider;