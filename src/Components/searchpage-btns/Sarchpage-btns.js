import React from 'react'
import {  useLocation } from "react-router-dom";
import './searchpage-btns.scss'
const SearchpageBtns = () => {
    let location = useLocation();
  return (
    <div>
         <div className="searchpage-top">
          <div className="result">
            <h3>Результаты поиска:</h3>
            <p>{location.state}</p>
          </div>
          <div className="selects">
            <div className="select">
              <div className="category">
                <p>Категории</p>
              </div>
              <select name="product">
                <option defaultValue> Электроника</option>
                <option value="телефон">Телефон</option>
                <option value="ноутбук">Ноутбук</option>
                <option value="телевизор">Телевизор</option>
                <option value="смартфон">Смартфон</option>
              </select>
            </div>

            <div className="select" id="two">
              <div className="category">
                {" "}
                <p>Сортировать по</p>
              </div>

              <div className="price">
                <span>Цены:</span>
                <select name="product">
                  <option defaultValue>низкие</option>
                  <option value="телефон"> высокие</option>
                </select>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SearchpageBtns