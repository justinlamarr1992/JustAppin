import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// replaced use history
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContent";

import { Menu, Image, Layout, Badge } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Search from "../forms/Search";

// ERROR MAY COME FROM HERE
import firebase from "firebase/compat";

import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  SkinOutlined,
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const { user } = useUserAuth();
  // console.log(user);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  // let { user, cart } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };

  const handleToggleClick = () => {
    console.log("Clciked");
    const toggleButton = document.getElementsByClassName("toggle-button")[0];

    const navBarLinksM = document.getElementsByClassName(
      "navbar-links-middle"
    )[0];
    const navBarLinksR =
      document.getElementsByClassName("navbar-links-right")[0];

    toggleButton.addEventListener("click", () => {
      navBarLinksM.classList.toggle("active");
    });
    toggleButton.addEventListener("click", () => {
      navBarLinksR.classList.toggle("active");
    });
  };

  return (
    // find out if there is a div here
    <header className="" id="myNavBar">
      <div className="header-container navbar">
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
        </Link>
        <nav className="navbar-links-middle navbar-links">
          <ul className="nav-links">
            <li>
              <Link to="/store">E-Commerce Page</Link>
            </li>
            <li>
              <Link to="/shop">Products Page</Link>
            </li>
            <li>
              <Link to="/cart">
                {/* <Badge count={cart.length} offset={[9, 0]}> */}
                Shopping Cart
                {/* </Badge> */}
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-links-right navbar-links">
          <ul className="nav-links">
            {/* <li>
              {!user && (
                <Link key="login" className="" to="/login">
                  Login
                </Link>
              )}
              {user && user.role === "lead" && (
                <Link to="/user/history">
                  {user.email && user.email.split("@")[0]}
                </Link>
              )}
              {user && user.role === "admin" && (
                <Link to="/admin/dashboard">Dashboard</Link>
              )}
            </li>

            <li>
              {!user && (
                <Link key="register" className="" to="/register">
                  Register
                </Link>
              )}

              {user && (
                <Link key="logout" className="" onClick={logout} to="/">
                  LogOut
                </Link>
              )}
            </li> */}
            <li>
              {!user && (
                <Link key="login" className="" to="/login">
                  Login
                </Link>
              )}
              {user && user.role === "lead" && (
                <Link to="/user/history">
                  {user.email && user.email.split("@")[0]}
                </Link>
              )}
              {user && user.role === "admin" && (
                <Link to="/admin/dashboard">Dashboard</Link>
              )}
            </li>

            <li>
              {!user && (
                <Link key="register" className="" to="/register">
                  Register
                </Link>
              )}

              {user && (
                <Link key="logout" className="" onClick={logout} to="/">
                  LogOut, {user.name}
                </Link>
              )}
            </li>
          </ul>
        </nav>
        {/* <a class="header-cta-button" href="#cta">
          <button>Contact Us</button>
        </a> */}
        <a href="#" onClick={handleToggleClick} className="toggle-button .icon">
          <i class="fa fa-bars fa-2x"></i>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
