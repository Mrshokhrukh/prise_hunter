import React from "react";
import "./ChartFilters.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { Container } from "@mui/material";
import Chart from "../Chart/Chart";
const ChartFilters = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <p>1st menu item</p>,
        },
        {
          key: "2",
          label: <p>2st menu item</p>,
        },
        {
          key: "3",
          label: <p>3st menu item</p>,
        },
      ]}
    />
  );
  return (
    <div>
      <div className="Chart-Filters">
        <div className="email-input">
          <p>Мы отправим уведомление на почту: </p>
          <div className="box box-1">
            <input type="text" name="" id="" />
          </div>
        </div>
        <div className="shop-selector">
          <p>Магазин</p>
          <div className="box box-2">
            <Dropdown overlay={menu} trigger={["click"]}>
              <p>
                alifshop
                <DownOutlined className="downOutlined" />
              </p>
            </Dropdown>
          </div>
        </div>
        <div className="price-input">
          <p>Снизиться до</p>
          <div className="box box-3">
            <span>сум</span>
            <input type="number" name="" id="" />
            <button>Отслеживать</button>
          </div>
        </div>
      </div>
      <Chart />
    </div>
  );
};

export default ChartFilters;

// columnStyle: {
//     radius: [20, 20, 0, 0],
//   },
