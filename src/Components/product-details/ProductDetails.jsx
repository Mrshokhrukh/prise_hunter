import React from "react";
import "./ProductDedails.scss";
const ProductDetails = () => {
  return (
    <div>
      <p className="title-p text-detail">Детали товара</p>
      <div className="details">
        <div className="left-detail">
          <p>Категория</p>
          <p>Производитель</p>
          <p>Модель</p>
          <p>Цена</p>
          <p>Последнее сканирование</p>
        </div>
        <div className="right-detail">
          <p>Ноутбуки</p>
          <p>Asus</p>
          <p>AP-1515H</p>
          <p>3.620.000 сум</p>
          <p>2 часа назад</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
