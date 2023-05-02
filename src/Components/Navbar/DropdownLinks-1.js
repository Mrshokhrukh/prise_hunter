import { Select } from "antd";
import React from "react";

const dropdownOne = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue="Магазины"
      bordered={false}
      size="small"
  
      onChange={handleChange}
      options={[
        {
          value: "alifshop",
          label: "alifshop",
        },
        {
          value: "mediapark",
          label: "Mediapark",
        },
        {
          value: "alishop",
          label: "alishop",
        },
        {
          value: "market",
          label: "market",
        },
      ]}
    />
  );
};

export default dropdownOne;
