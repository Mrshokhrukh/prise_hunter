import { Select } from "antd";
import React from "react";

const DropdownTwo = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue="Все категории"
      bordered={false}
      onChange={handleChange}
    
      options={[
        {
          value: "electronics",
          label: "electronics",
        },
        {
          value: "electronics",
          label: "electronics",
        },
        {
          value: "electronics",
          label: "electronics",
        },
        {
          value: "electronics",
          label: "electronics",
        },
      ]}
    />
  );
};

export default DropdownTwo;
