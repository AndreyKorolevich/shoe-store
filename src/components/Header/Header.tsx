import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Search from "./Search/Search";
import logo from "../../img/header-logo.png";
import HeaderIcons from "./CartIcon/HeaderIcons";

const Header = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Bosa Noga" />
            </NavLink>
            <div className="collapase navbar-collapse" id="navbarMain">
              <Navbar />
              <div>
                <HeaderIcons />
                <Search />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
