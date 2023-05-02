import React, { useEffect, useState } from "react";
import "./About.scss";
import { Container } from "@mui/system";
import Top from "../../Components/AboutTopOverview/Top";
import Foo from "../../Components/separe-file/Foo";
import AboutBottom from "../../Components/aboutbottom/AboutBottom";
import AboutInputs from "../../Components/aboutInputs/AboutInputs";

const About = () => {
  const [details, setDetails] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <div className={"about-page"}>
        <Top />

        <Foo />

        <div className={"filters"}>
          <div className={"about-btns"}>
            <button
              className={"button btn1"}
              onClick={() => setDetails(false)}
              style={{
                background: details ? "" : "#dd0e1d",
                color: details ? "" : "white",
              }}
            >
              Отслеживание цен
            </button>
            <button
              className={"button btn2"}
              onClick={() => setDetails(true)}
              style={{
                background: details ? "#dd0e1d" : "",
                color: details ? "white" : "",
              }}
            >
              Детали товара
            </button>
          </div>

          <AboutInputs details={details} />

          <AboutBottom details={details} />

          <div
            className={"details"}
            style={{ display: details ? "block" : "none" }}
          >
            <h3>Детали товара</h3>
            <div className={"list"}>
              <ul>
                <li>Категория</li>
                <li>Производитель</li>
                <li>Модель</li>
                <li>Цена</li>
                <li>Последнее сканирование</li>
              </ul>
              <ul>
                <li>Ноутбуки</li>
                <li>Asus</li>
                <li>AP-1515H</li>
                <li>3.620.000 сум</li>
                <li>2 часа назад</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
