import React, { useState } from "react";
import { LeftOutlined,RightOutlined } from "@ant-design/icons";
import "./Pagination.scss";
const Pagination = () => {
  const arr = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(1);
  return (
    <div className="pagination">
      <LeftOutlined onClick={() => num !== 1 && setNum(num - 1)} />
      {arr.map((number, index) => {
        return (
          <span
            key={index}
            style={{
              background: num === number && "red",
              color: num === number && "white",
            }}
            onClick={() => setNum(number)}
          >
            {number}
          </span>
        );
      })}
       <RightOutlined onClick={() => num !== 5 && setNum(num + 1)} />
    </div>
  );
};

export default Pagination;
