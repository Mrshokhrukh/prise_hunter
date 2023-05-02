import React from "react";

import "./Products.scss";
import SwiperCards from "../swiper/Swiper";
import Discounts from "../swiper/Discounts";
import HomeBtnsOne from "../home-btns/btns-one";
import HomeBtnsTwo from "../home-btns/btns-two";
import "../home-btns/home-link-buttons.scss";
const Products = () => {
  return (
    <div className="home-products">
      <HomeBtnsOne />
      <div className="swiper-cards">
        <SwiperCards />
      </div>
      <div className="CallbackSwiperBar">
        <HomeBtnsTwo />
        <div className="swiper-cards">
          <SwiperCards />
        </div>
      </div>
      <div className="discounts-swiper">
        <Discounts />
      </div>
    </div>
  );
};

export default Products;
