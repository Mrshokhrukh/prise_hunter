import React from "react";
import { data } from "../../assets/data/data";
import "./Brands.scss";

const Brands = () => {
  return (
    <div className="Brands">
      <p className="brand-text">Топ магазины</p>
      <div className="logo-boxes">
        {data.map((item, index) => {
          return (
            <div className="logo-brands" key={index}>
              <img
                src={item.Img}
                alt=""
              />
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
