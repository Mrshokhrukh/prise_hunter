import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./Components/Home-component";
import About from "./Pages/about/About";
import BestPriceDrop from "./Pages/bestPriceDrop/BestPriceDrop";
import ProductOverview from "./Pages/OverviewProduct/ProductOverview";
import PopularGoods from "./Pages/Popular-goods/Popular-goods";
import SearchProducts from "./Pages/Searched/SearchProducts";
import Layout from "./Routes/Layout";
import "./style/App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MainComponent />}></Route>
            <Route path="pupular-goods" element={<PopularGoods />}></Route>
            <Route path="best-price-drop" element={<BestPriceDrop />}></Route>
            <Route path="product-overview" element={<About />}></Route>
            <Route path="search/:value" element={<SearchProducts />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
