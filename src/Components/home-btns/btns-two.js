import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeBtnsTwo = () => {
  const [isClickedOn, setIsClickedOn] = useState(0);
  let navigate = useNavigate();

  const clickedBtn = (item, num) => {
    if (item === "Всетовары") {
      setIsClickedOn(1);
      navigate("/best-price-drop");
    }
    if (num === 2) {
      setIsClickedOn(2);
    }
    if (num === 3) {
      setIsClickedOn(3);
    }
    console.log(item);
  };
  return (
    <div className="home-btns">
    <h3 className="product-title">Лучшее падение цен</h3>

    <div className="btns">
      <div className="btn flexing-box">
        <button
          className="button btn1"
          style={{
            background: isClickedOn === 1 ? "#dd0e1d" : "",
            color: isClickedOn === 1 ? "white" : "",
          }}
          onClick={() => clickedBtn("Всетовары",1)}
        >
          Самые последние
        </button>
        <button
          className="button btn2"
          style={{
            background: isClickedOn === 2 ? "#dd0e1d" : "",
            color: isClickedOn === 2 ? "white" : "",
          }}
          onClick={() => clickedBtn(2)}
        >
          Лучшие ежедневные
        </button>
        <button
          className="button btn3"
          style={{
            background: isClickedOn === 3 ? "#dd0e1d" : "",
            color: isClickedOn === 3 ? "white" : "",
          }}
          onClick={() => clickedBtn(3)}
        >
          Лучшие еженедельные
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

export default HomeBtnsTwo;
