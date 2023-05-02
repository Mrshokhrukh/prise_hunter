import React from "react";
import BarChart from "./barchart";
import "./Chart.scss";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import SliderIndex from "../slider/Slider";


function Chart() {
  const [value, setValue] = React.useState("alishop.uz");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="chart">
      <div className="bar-chart-right">
        <p className="title-p chart-title">История цены</p>
        <BarChart />
      </div>
      <div className="slider-left">
        <p className="title-p slider-text">Временной диапазон</p>
        <SliderIndex/>
        <div className="checkbox">
          <p className="title-p price">Цены</p>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="alishop.uz"
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="alishop.uz"
                labelPlacement="end"
              />
              <FormControlLabel
                value="mediapark"
                control={
                  <Radio
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="mediapark"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>

          {/* <form>
            <input
              type="checkbox"
              name="shop"
              id="first-shop"
              value="first-shop"
            />
            <label>alifshop.uz</label>
            <br />
            <input
              type="checkbox"
              name="shop"
              id="second-shop"
              value="second-shop"
            />
            <label>alifshop.uz</label>
          </form> */}
        </div>
        <button className="btn-alishop">Смотреть на alifshop</button>
      </div>
    </div>
  );
}

export default Chart;
