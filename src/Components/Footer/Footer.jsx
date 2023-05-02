import { Container } from "@mui/system";
import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <Container className="footer">
      <div className={"inner"}>
        <div className={"documents"}>
          <h3>Документы</h3>
          <ul>
            <li>Политика конфиденциальности</li>
            <li>Публичная оферта</li>
          </ul>
        </div>
        <div className={"documents"}>
          <h3>Сервис</h3>
          <ul>
            <li>О нас</li>
            <li>Сотрудничество</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
