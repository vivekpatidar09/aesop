import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "./logoBlack.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="head-container">
      <div className="head-row1">
        <h3>
          Receive a complimentary sample of Karst Eau de Parfum and a hand-dyed
          cotton bag with a purchase of Eleos Aromatique Hand Balm. Discover
          Eleos
        </h3>
      </div>
      <div className="head-row2">
        <h3>
          Enjoy complimentary shipping on orders over $400. Click and Collect is
          now available in Hong Kong. +
        </h3>
      </div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <hr />
            <li>
              <a href="#">New & Notable</a>
            </li>
            <hr />
            <li>
              <a href="#">Skin Care</a>
            </li>
            <hr />
            <li>
              <a href="#">Hand & Body</a>
            </li>
            <hr />
            <li>
              <a href="#">Home</a>
            </li>
            <hr />
            <li>
              <a href="#">Hair</a>
            </li>
            <hr />
            <li>
              <a href="#">Fragrance</a>
            </li>
            <hr />
            <li>
              <a href="#">Kits & Travel</a>
            </li>
            <hr />
            <li>
              <a href="#">Gifts</a>
              <hr />
            </li>
            <hr />
            <li>
              <a href="#">Read</a>
            </li>
            <hr />
            <li>
              <a href="#">Stores</a>
            </li>
            <hr />
            <li>
              <a href="#">Facial Appointments</a>
            </li>
            <li>
              <a href="#">
                <SearchIcon />
              </a>
            </li>
          </ul>
        </nav>
        <div className="user-actions">
          {/* <a href="#">
            <SearchIcon />
          </a>
          <a href="#">
            <FavoriteBorderIcon />
          </a> */}
          <a href="#">Log in</a>
          <a href="#">Cabinet</a>
          <a href="#">Cart</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <SearchIcon />
          <FavoriteBorderIcon style={{ margin: "0 10px" }} />
          <i
            className={` ${isMenuOpen ? <MenuIcon /> : <CloseIcon />}`}
          ></i>{" "}
          <MenuIcon />
        </div>
      </header>
    </div>
  );
};

export default Header;
