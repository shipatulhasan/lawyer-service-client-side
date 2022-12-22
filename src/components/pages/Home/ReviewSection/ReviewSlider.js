import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./review.css";

// import required modules
import {EffectCoverflow, Navigation } from "swiper";
import Reviews from "../../shared/Reviews/Reviews";
import SliderSkeleton from "./SliderSkeleton";

function ReviewSlider ({reviews,isLoading}){
return (
  <>
      <Swiper
      // slidesPerView={3}
        
        breakpoints={{
          // when window width is >= 640px
          640: {
            // width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            // width: 768,
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        slidesPerGroup={1}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        effect={"coverflow"}
        
        // centeredSlides={true}
        modules={[EffectCoverflow,Navigation]}
        className="mySwiper"
      >
        {
          isLoading ?
          <>
          {
            Array(3).fill(0).map(( item, i)=><SwiperSlide key={i}>
              <div className=" p-2">
              <SliderSkeleton/>
              </div>
            </SwiperSlide>)
          }
          </>
          :
          <>
          {
            reviews.map(review=><SwiperSlide key={review._id}>
              <Reviews review={review} index={1}/>
             
            </SwiperSlide>)
          }
          </>
        }
         
     
        
   
      </Swiper>
    </>
)
}
export default ReviewSlider