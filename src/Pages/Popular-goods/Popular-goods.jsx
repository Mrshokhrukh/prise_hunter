import { Container } from "@mui/system";
import React from "react";
import "./popular-goods.scss";
import { products } from "../../assets/products-data";
import Pagination from "../../Components/pagination/Pagination";
import { useNavigate } from "react-router-dom";
import HomeBtnsOne from "../../Components/home-btns/btns-one";

const PopularGoods = () => {
  let navigate = useNavigate();
  return (
    <Container className="popular-goods-container">
      <HomeBtnsOne />
      <div className="All-products">
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
        <Pagination />
      </div>
    </Container>
  );
};

export default PopularGoods;
