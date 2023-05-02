import React from "react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Container } from "@mui/material";
const Discounts = () => {
  const sliderSettings = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // 1201: {
    //   slidesPerView: 4,
    //   spaceBetween: 10,
    // },
  };
  return (
    <div>
      <p className="discounts-text">Лучшие акции</p>
     
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          breakpoints={sliderSettings}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // slidesPerGroup={1}
          loop={true}
          // loopFillGroupWithBlank={true}
          pagination={true}
          navigation={false}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="discounts">
              <img
                src="https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=2000"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discounts">
              <img
                src="https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=2000"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discounts">
              <img
                src="https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=2000"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discounts">
              <img
                src="https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=2000"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
  
    </div>
  );
};

{
  /*  */
}
export default Discounts;
//
