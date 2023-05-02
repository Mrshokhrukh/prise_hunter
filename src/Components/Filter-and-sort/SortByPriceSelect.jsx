import React from "react";
import { Select } from "antd";
const SortByPriceSelect = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue="Цены: сначала низкие"
      bordered={false}
      size="small"
      style={{
        width: 190,
      }}
      className="select"
      onChange={handleChange}
      options={[
        {
          value: "lowest to  highest",
          label: "lowest to  highest",
        },
        {
          value: "highest to lowest",
          label: "highest to lowest",
        },
        {
          value: "the cheapest",
          label: "the cheapest",
        },
        {
          value: "the highest",
          label: "the highest",
        },
      ]}
    />
  );
};

export default SortByPriceSelect;
