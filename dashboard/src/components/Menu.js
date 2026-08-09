import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Menu = ({ username }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (idx) => {
    setSelectedMenu(idx);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = async () => {
    await api.post("/logout");
    window.location.href =
      process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu active";

  return (
    <div className="menu-container">
      <img src="logo.svg" style={{ width: "3em" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to={"/"} onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/orders"} onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/holdings"} onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/positions"} onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/funds"} onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/apps"} onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">
            {username ? username.slice(0, 2).toUpperCase() : "ZU"}
          </div>
          <p className="username">{username || "USERID"}</p>
        </div>
        {isProfileDropdownOpen && (
          <p
            className="menu"
            style={{ cursor: "pointer", textAlign: "center" }}
            onClick={handleLogout}
          >
            Logout
          </p>
        )}
      </div>
    </div>
  );
};

export default Menu;
