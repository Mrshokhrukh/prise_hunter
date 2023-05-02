import { Container } from "@mui/material";
import React from "react";
import "./bestprice.scss";
import { products } from "../../assets/products-data";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/pagination/Pagination";
import HomeBtnsTwo from "../../Components/home-btns/btns-two";
const BestPriceDrop = () => {
  let navigate = useNavigate();
  return (
    <Container className="bestPriceDrop-container">
      <HomeBtnsTwo/>
      <div className="page-products">
        {products.map((product, index) => {
          return (
            <div className="product-card" key={index}>
              <span className="product-img">
                <img src={product.src} alt="" />
              </span>
              <p className="text">{product.text}</p>
              <p className="price">{product.price}</p>
              <button
                className="button"
                onClick={() => navigate("/product-overview")}
              >
                Cмотреть детали
              </button>
            </div>
          );
        })}
      </div>
      <div className="page-pagination">
        <Pagination/>
      </div>
    </Container>
  );
};

export default BestPriceDrop;
