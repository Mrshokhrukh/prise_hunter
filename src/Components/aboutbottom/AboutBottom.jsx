import React from "react";
import BarChart from "../Chart/barchart";
import SliderIndex from "../slider/Slider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./aboutbottom.scss";

function AboutBottom(props) {
  const [value, setValue] = React.useState("alishop.uz");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className={"aboutBottom"}
      style={{ display: props.details ? "none" : "flex"}}
    >
      <h3 className={"aboutBottom-title"}>История цены</h3>
      <div className={"aboutBottom-container"}>
        <div className={"aboutBottom-chart"}>
          <BarChart />
        </div>
        <div className={"aboutBottom-range"}>
          <h3>Временной диапазон</h3>
          <SliderIndex />
          <div className={"aboutBottom-price"}>
            <div className={"aboutBottom-checkbox"}>
              <h3>Цены</h3>
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
            </div>
          </div>
          <button className="button">Смотреть на alifshop</button>
        </div>
      </div>
    </div>
  );
}

export default AboutBottom;
