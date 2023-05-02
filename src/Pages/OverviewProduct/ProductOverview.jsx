import { Container } from "@mui/system";
import React, { useState } from "react";
import "./ProductOverview.scss";
import { AiOutlineHeart } from "react-icons/ai";
import TableRow from "../../Components/Table-Row/TableRow";
import ProductDetails from "../../Components/product-details/ProductDetails";
import ChartFilters from "../../Components/ChartSide/ChartFilters";

const ProductOverview = () => {
  const [isChart, setIsChart] = useState(true);
  const [isDetails, setIsDetails] = useState(false);

  const priceChart = () => {
    setIsChart(true);
    setIsDetails(false);
  };
  const details = () => {
    setIsChart(false);
    setIsDetails(true);
  };
  return (
    <Container>
      <div className="product-page">
        <div className="product-img">
          <img
            src="https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=2000"
            alt=""
          />
        </div>

        <div className="center-info">
          <p className="product-title">Название товара</p>
          <div className="product-preview">
            <div className="product-texts">
              <p>Главная</p>
              <p>Категория</p>
              <p>Модель</p>
            </div>
            <span className="product-description">
              Подпишитесь на уведомления о снижении цен и начните отслеживать
              этот продукт, заполнив форму ниже.
            </span>
          </div>
        </div>

        <div className="checkShop">
          <div className="price-and-date">
            <span className="heartIcon">
              <AiOutlineHeart />
            </span>
            <p className="product-price">3.620.000 сум</p>
            <span className="shop-name">alifshop.uz</span> <br />
            <span className="date">16.08.2022 13:43</span>
          </div>

          <button className="button checkShop-btn">Смотреть на alifshop</button>
        </div>
      </div>
      <div>
        <TableRow />
      </div>
      <div className="Product-details">
        <button className="detail-btn-1" onClick={priceChart}>
          Отслеживание цен
        </button>
        <button className="detail-btn-2" onClick={details}>
          Детали товара
        </button>
        {isDetails ? <ProductDetails /> : <ChartFilters/>}
      </div>
    </Container>
  );
};

export default ProductOverview;
