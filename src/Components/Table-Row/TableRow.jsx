import React from "react";
import "./TableRow.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";


const TableRow = () => {
  const items = [
    {
      label: <a href="/">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="/">2nd menu item</a>,
      key: "1",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <div className="row-table">
      <p className="title-p table-text">4 других предложения</p>
      <div className="titles">
        <p>Продавец</p>
        <p>Категория</p>
        <p>Цена</p>
        <p>Дата обновления</p>
      </div>
      <div className="table">
        <div className="first-row">
          <p>Mediapark</p>
          <p>Электроника</p>
          <p>3.834.000 сум</p>
          <p>21.08.2022</p>
          <button className="goto-btn">Перейти в Mediapark</button>
        </div>
        <div className="second-row">
          <p>Mediapark</p>
          <p>Электроника</p>
          <p>3.717.000 сум</p>
          <p>20.08.2022</p>
          <button className="goto-btn">Перейти в Mediapark</button>
        </div>
        <div className="third-row">
          <p>Mediapark</p>
          <p>Электроника</p>
          <p>3.717.000 сум</p>
          <p>20.08.2022</p>
          <button className="goto-btn">Перейти в Mediapark</button>
        </div>
      </div>

      
      <div className="show-more">
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <p>
          
            Показать ещё
            <DownOutlined style={{ marginLeft: "10px" }} />
        
          </p>
        </Dropdown>
      </div>
    </div>
  );
};

export default TableRow;
