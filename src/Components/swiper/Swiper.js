import React, { useEffect, useRef, useState } from "react";
import { FreeMode, Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { data } from "../../assets/data/data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
const SwiperCards = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [numberOfSlides, setnumberOfSlides] = useState(4);
  let navigate = useNavigate();

  useEffect(() => {
    const windowWidth = () => setSize(window.innerWidth);
    if (size <= 975 && size > 740) {
      setnumberOfSlides(3);
    } else if (size <= 740 && size > 552) {
      setnumberOfSlides(2);
    } else if (size <= 552) {
      setnumberOfSlides(1);
    } else {
      setnumberOfSlides(4);
    }
    window.addEventListener("resize", windowWidth);
    return () => {
      window.removeEventListener("resize", windowWidth);
    };
  }, [size]);

  const sliderSettings = {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    901: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <Container>
      <Swiper
        slidesPerView={numberOfSlides}
        spaceBetween={20}
        centeredSlides={false}
        breakpoints={sliderSettings}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        freeMode={size <= 768 ? false : true}
        navigation={size <= 768 ? false : true}
        pagination={size <= 975 ? true : false}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-navigation-color": "#DD0E1D",
          "--swiper-navigation-size": "30px",
        }}
      >
        {data.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="product-card">
                <span className="product-img">
                  <img src={card.Img} alt="" />
                </span>
                <div className="infp">
                  <p className="text">{card.text}</p>
                  <p className="price">3.620.000 сум</p>
                </div>
                <button
                  className="button"
                  onClick={() => navigate("/product-overview")}
                >
                  Cмотреть детали
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SwiperCards;
