import React, { useState } from "react";
import "./Navbar.scss";
import logo2 from "../../assets/images/pricehunter logo 1.png";
import logo1 from "../../assets/images/pricehunter logo 2.png";
import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/Vector.png";
import { FiSearch } from "react-icons/fi";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import DropdownTwo from "./DropdownLinks-2";
import DropdownOne from "./DropdownLinks-1";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  let navigate = useNavigate();
  let russian = /[А-з]/gi;
  let english = /[A-z]/gi;
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.match(english) || searchValue.match(russian)) {
      navigate(`/search/${searchValue}`, { state: searchValue });
    }
    setSearchValue("");
  };
  return (
    <header className="Navbar">
      <Container className="nav-container">
        <div className="nav-sidebar">
          <Sidebar />
        </div>
        <div className="nav-logo">
          <span className="nav-logo1" onClick={() => navigate("/")}>
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
          </span>
          <img
            src={logo}
            alt=""
            className="nav-logo2"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="nav-search-field">
          <form onSubmit={handleSubmit}>
            <input type="text" value={searchValue} onChange={handleChange} />
          </form>
          <span>
            <FiSearch className="nav-search-icon" />
          </span>
        </div>
        {/* </div> */}
        <div className="nav-navbar-right">
          <DropdownOne />
          <DropdownTwo />
          <p>Предложения</p>
          <span className="nav-user-icon">
            <img src={userIcon} alt="" />
          </span>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
