import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
function Layout() {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
