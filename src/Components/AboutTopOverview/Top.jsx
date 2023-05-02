import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

import "./top.scss";
function Top() {
  const Img =
    "https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=2000";
  return (
    <div className={"about-top"}>
      <div className={"aboutTop-card"}>
        <img src={Img} alt="404" />
        <div className={"aboutTop-wrapper"}>
          <div className={"aboutTop-info"}>
            <h3>Название товара</h3>
            <div className={"aboutTop-about"}>
              <div className={"aboutTop-category"}>
                <p>Главная</p>
                <p>Категория</p>
                <p>Модель</p>
              </div>
              <h4 className={"aboutTop-text"}>
                Подпишитесь на уведомления о снижении цен и начните отслеживать
                этот продукт, заполнив форму ниже.
              </h4>
            </div>
          </div>

          <div className={"aboutTop-inner"}>
            <div className={"aboutTop-price"}>
              <span>
                <AiOutlineHeart />
              </span>
              <h4>3.620.000 сум</h4>
              <p>alifshop.uz</p>
              <p>16.08.2022 13:43</p>
            </div>
            <button className="button">Перейти в товар</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
