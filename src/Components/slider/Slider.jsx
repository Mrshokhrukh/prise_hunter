import React from 'react'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { red } from "@mui/material/colors";
const SliderIndex = () => {
    const marks = [
        {
          value: 0,
          label: "1м",
        },
        {
          value: 20,
          label: "3м",
        },
        {
          value: 37,
          label: "6м",
        },
        {
          value: 100,
          label: "всё время",
        },
      ];
      const valuetext = (value) => {
        return value;
      };
    
      const valueLabelFormat = (value) => {
        return marks.findIndex((mark) => mark.value === value) + 1;
      };
  return (
    <Box sx={{ width: 326 }}>
    <Slider
      aria-label="Restricted values"
      defaultValue={20}
      valueLabelFormat={valueLabelFormat}
      getAriaValueText={valuetext}
      step={null}
      valueLabelDisplay="auto"
      marks={marks}
      sx={{
        color: red[600],
        height: 5,
      }}
    />
  </Box>  )
}

export default SliderIndex