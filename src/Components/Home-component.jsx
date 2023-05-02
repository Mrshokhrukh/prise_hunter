import { Container } from "@mui/system";
import React from "react";

import Products from "./Home-Products/Products";
import Brands from "./brands/Brands";
import Check from "./FootercheckLink/Check";
import Home from "../Pages/Home/Home";


function MainComponent() {

  return (
    <Container sm={540} md={720} lg={960} xl={1140} xxl={1320}>
      <Home />
      <Products />
      <Brands/>
      <Check/>
    </Container>
  );
}

export default MainComponent;
