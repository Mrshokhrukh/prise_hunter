import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./foo.scss";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { data } from "../../assets/data/data";
const Foo = () => {
  const [isChart, setIsChart] = useState(true);
  const [isDetails, setIsDetails] = useState(false);

  const [show, setShow] = useState(false);
  const priceChart = () => {
    setIsChart(true);
    setIsDetails(false);
  };
  const details = () => {
    setIsChart(false);
    setIsDetails(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"foo-offer"}>
      <div className={"foo-catalogue"}>
        <h3>4 других предложения</h3>

        <div className={"foo-params"}>
          <p>Продавец</p>
          <p>Категория</p>
          <p>Цена</p>
          <p>Дата обновления</p>
        </div>
      </div>

      <div className={"foo-items"}>
        {show
          ? data.map((item, index) => {
              return (
                <div
                  className={"foo-maincard"}
                  key={index}
                  style={{ width:"100%" }}
                >
                  <div className={"foo-card"}>
                    <div className={"foo-left"}>
                      <p>Продавец</p>
                      <p>Категория</p>
                      <p>Цена</p>
                      <p>Дата обновления</p>
                    </div>

                    <div className={"foo-right"}>
                      <p>Mediapark</p>
                      <p>Электроника</p>
                      <p>3.834.000 сум</p>
                      <p>21.08.2022</p>
                    </div>
                    <button>Перейти в Mediapark</button>
                  </div>
                  <div className={"foo-item"}>
                    <div className={"foo-text"}>
                      <p>Mediapark</p>

                      <p>Электроника</p>

                      <p>3.834.000 сум</p>

                      <p>21.08.2022</p>
                    </div>

                    <button>Перейти в Mediapark</button>
                  </div>
                </div>
              );
            })
          : data.slice(0, 3).map((item, index) => {
              return (
                <div
                  className={"foo-maincard"}
                  key={index}
                  style={{ width: "100%" }}
                >
                  <div className={"foo-card"}>
                    <div className={"foo-left"}>
                      <p>Продавец</p>
                      <p>Категория</p>
                      <p>Цена</p>
                      <p>Дата обновления</p>
                    </div>

                    <div className={"foo-right"}>
                      <p>Продавец</p>
                      <p>Электроника</p>
                      <p>3.834.000 сум</p>
                      <p>21.08.2022</p>
                    </div>
                    <button>Перейти в Mediapark</button>
                  </div>

                  <div className={"foo-item"}>
                    <div className={"foo-text"}>
                      <p>Mediapark</p>

                      <p>Электроника</p>

                      <p>3.834.000 сум</p>

                      <p>21.08.2022</p>
                    </div>

                    <button>Перейти в Mediapark</button>
                  </div>
                </div>
              );
            })}
      </div>

      <div className={"foo-btn"}>
        <button id={"foo-btn"} onClick={() => setShow(!show)}>
          {show ? "Скрыть" : "Показать ещё"}
        </button>
      </div>

      <div className={"foo-show"} onClick={() => setShow(!show)}>
        {show ? (
          <h4>
            Скрыть{" "}
            <span>
              <IoIosArrowUp />
            </span>
          </h4>
        ) : (
          <h4>
            Показать ещё{" "}
            <span>
              <IoIosArrowDown />
            </span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Foo;
