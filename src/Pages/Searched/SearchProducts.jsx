import { DownOutlined } from "@mui/icons-material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FilterCategorySelect from "../../Components/Filter-and-sort/filterCategorySelect";
import SortByPriceSelect from "../../Components/Filter-and-sort/SortByPriceSelect";
import "./SearchProducts.scss";
import { products } from "../../assets/products-data";
import Pagination from "../../Components/pagination/Pagination";
import SearchpageBtns from "../../Components/searchpage-btns/Sarchpage-btns";

const SearchProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="goto-searched-search">
      <Container>
        <SearchpageBtns />
        <div className="goto-products">
          {products.map((product, index) => {
            return (
              <div>
                <div className="goto-card" key={index}>
                  <div className="goto-wrapper">
                    <img src={product.src} alt="404" />
                    <div className="goto-info">
                      <h3>{product.text}</h3>

                      <div className="goto-about">
                        <p>Модель:</p>
                        <Link to={"/product-overview"}>
                          <button className="button" onClick={()=> <Link to='/product-overview'></Link>}>Перейти в товар</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="goto-inner">
                    <div className="goto-shop">
                      <h4>Магазин</h4>
                      <ul>
                        <li>alishop.uz</li>
                        <li>alishop.uz</li>
                        <li>alishop.uz</li>
                        <li>ещё</li>
                      </ul>
                    </div>

                    <div className="goto-shop">
                      <h4>Текущая цена:</h4>
                      <ul>
                        <li>{product.price} сум</li>
                        <li>Нет в наличии</li>
                        <li>{product.price} сум</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bottomline"></div>
              </div>
            );
          })}
        </div>
        <div className="page-pagination">
          <Pagination />
        </div>
      </Container>
    </div>
  );
};

export default SearchProducts;
