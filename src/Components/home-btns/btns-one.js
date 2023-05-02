import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterCategorySelect from "../Filter-and-sort/filterCategorySelect";

const HomeBtnsOne = () => {
  let navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const clickedBtn = (item) => {
    setIsClicked(!true);
    if (item === "Всетовары") {
      navigate("/pupular-goods");
    }
    console.log("Получшейцене");
  };
  return (
    <div className="home-btns">
      <h3 className="product-title">Популярные товары</h3>
      <div className="btns">
        <div className="btn">
          <button
            id="btn1"
            onClick={() => clickedBtn("Всетовары")}
            style={{
              background: isClicked ? "#dd0e1d" : "",
              color: isClicked ? "white" : "",
            }}
          >
            Все товары
          </button>
          <button
            id="btn2"
            onClick={() => setIsClicked(false)}
            style={{
              background: isClicked ? "" : "#dd0e1d",
              color: isClicked ? "" : "white",
            }}
          >
            По лучшей цене
          </button>
        </div>

        <select name="productselect">
          <option defaultValue>Все категории</option>
          <option value="телефон">Телефон</option>
          <option value="ноутбук">Ноутбук</option>
          <option value="телевизор">Телевизор</option>
          <option value="смартфон">Смартфон</option>
        </select>
      </div>
    </div>
  );
};

export default HomeBtnsOne;
