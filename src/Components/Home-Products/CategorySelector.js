import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
const CategorySelector = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              <span>1st menu item</span>
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              <span>1st menu item</span>
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a target="_blank" rel="noopener noreferrer" href="">
              <span>1st menu item</span>
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <Dropdown overlay={menu}>
      
    </Dropdown>
  );
};

export default CategorySelector;
