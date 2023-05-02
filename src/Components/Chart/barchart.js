import { Column } from "@ant-design/plots";
import React from "react";
const BarChart = () => {
  const data = [
    {
      type: "a",
      sales: 147,
    },
    {
      type: "b",
      sales: 120,
    },
    {
      type: "c",
      sales: 120,
    },
    {
      type: "d",
      sales: 115,
    },
    {
      type: "e",
      sales: 105,
    },
    {
      type: "f",
      sales: 90,
    },
    {
      type: "g",
      sales: 60,
    },
    {
      type: "h",
      sales: 60,
    },
    {
      type: "i",
      sales: 59,
    },
    {
      type: "j",
      sales: 62,
    },
    {
      type: "k",
      sales: 61,
    },
    {
      type: "l",
      sales: 55,
    },
    {
      type: "m",
      sales: 54,
    },

    {
      type: "n",
      sales: 40,
    },
    {
      type: "o",
      sales: 50,
    },
    {
      type: "p",
      sales: 55,
    },
    {
      type: "q",
      sales: 65,
    },
    {
      type: "r",
      sales: 75,
    },
    {
      type: "s",
      sales: 80,
    },
    {
      type: "t",
      sales: 95,
    },
    {
      type: "u",
      sales: 98,
    },
    {
      type: "v",
      sales: 102,
    },
    {
      type: "w",
      sales: 110,
    },
    {
      type: "x",
      sales: 105,
    },
    {
      type: "y",
      sales: 100,
    },
    {
      type: "z",
      sales: 95,
    },
    {
      type: "a-1",
      sales: 87,
    },
    {
      type: "1-2",
      sales: 73,
    },
    {
      type: "a-3",
      sales: 68,
    },
    {
      type: "a-4",
      sales: 56,
    },
    {
      type: "a-5",
      sales: 55,
    },
    {
      type: "a-6",
      sales: 65,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    columnStyle: {
      radius: [7, 7, 0, 0],
    },
    maxColumnWidth: 15,
    color: ({ type }) => {
      if (type === "a" || type === "n") {
        return "dark";
      }
      return "#D9D9D9";
    },
    
    label: {
      style: {
        fill: "white",
        opacity: 0,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },

    meta: {
      type: {
        alias: "Tel",
      },
      sales: {
        alias: "Bazar",
      },
    },
  };

  return <Column {...config} />;
};

export default BarChart;
