import React from "react";
import "./Home.scss";
import './home-media-quaries.scss'
import vectorIcon from "../../assets/images/Vector-2.png";
import { FaUser } from "react-icons/fa";
import { Container } from "@mui/material";
function Home() {
  const img =
    "https://img.freepik.com/free-photo/red-black-brush-stroke-banner-background-perfect-canva_1361-3597.jpg?w=2000";
  return (
    <Container sm={540} md={720} lg={960} xl={1140} xxl={1320}>
      <div className="home">
        <div className="center-text">
          <p>Мы помогаем сохранить ваши деньги</p>
        </div>
        <div className="center-cards">
          <div className="right-box">
            <img src={img} alt="" />
          </div>
          <div className="center-box">
            <div className="box-1">
              <img src={img} alt="" />
            </div>
            <div className="box-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="left-box">
            <div className="card-box">
              <span className="circle-span">
                <FaUser className="userIcon" />
              </span>
              <div className="text">
                Чтобы получать уведомления о снижении цен на все категории
                товаров, вам необходимо зарегистрироваться
              </div>
            </div>
            <button>Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
