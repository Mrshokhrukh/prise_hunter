import React, { useState } from "react";
import "./sidebar.scss";
import { GrClose } from "react-icons/gr";
import { Drawer, Space } from "antd";
import { CloseOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const placement = "left";
  let navigate = useNavigate();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (text) => {
    if (text === "Выгодние Предложения") {
      navigate("/product-overview");
      setOpen(false);
    } else if (text === "Предложения") {
      navigate("/pupular-goods");
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <Space>
        <div className="hamburger" onClick={showDrawer}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Space>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="links">
          <span className="closer" onClick={onClose}>
            <CloseOutlined />
          </span>
          <div className="link">
            {[
              "Магазины",
              "Предложения",
              "Выгодние Предложения",
              "Все категории",
              "Расширение браузера",
            ].map((text, index) => {
              return (
                <p key={index} onClick={() => handleClick(text)}>
                  {text}
                </p>
              );
            })}
          </div>

          <div className="btn-group">
            <button className="btn-1">Зарегистрироваться</button>
            <button className="btn-2">Войти</button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
