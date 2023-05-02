import React from 'react'
import { Select } from "antd";
const FilterCategorySelect = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  return (
    <Select
    defaultValue="Электроника"
    bordered={false}
    size="small"
    className="select"
    onChange={handleChange}
    options={[
      {
        value: "iphones",
        label: "iphones",
      },
      {
        value: "watches",
        label: "watches",
      },
      {
        value: "heaphones",
        label: "heaphones",
      },
      {
        value: "macbooks",
        label: "macbooks",
      },
    ]}
  />
  )
}

export default FilterCategorySelect