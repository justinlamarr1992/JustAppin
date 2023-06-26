import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// replaced use history
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContent";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Search from "../forms/Search";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const NavBar = () => {
  const [error, setError] = useState("");

  const { user, logOut } = useUserAuth();

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { active, cart } = useSelector((state) => ({ ...state }));

  const handleLogOut = async (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        // console.log("The user signed out");
        toast.success(`User Signed Out`);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errMessage = err.message;
        setError(err.message);
        toast.error(`There was an error of ${err.message}`);
      });
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };
  // onAuthStateChanged(auth, (user) => {
  //   console.log("User Status Changed:", user);
  // });

  // const logout = () => {
  //   auth().signOut();
  //   dispatch({
  //     type: "LOGOUT",
  //     payload: null,
  //   });
  //   navigate("/login");
  // };

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

        {/* <nav className="navbar-links-right navbar-links">
          <ul className="nav-links"> */}

        {/* Attept udmy */}
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
        {/* attept 2 */}
        {/* <li>
              {!active && (
                <Link key="login" className="" to="/login">
                  Login
                </Link>
              )}
              {active && active.role === "lead" && (
                <Link to="/user/history">
                  {user.email && user.email.split("@")[0]}
                </Link>
              )}
              {active && active.role === "admin" && (
                <Link to="/admin/dashboard">Dashboard</Link>
              )}
            </li>

            <li>
              {!active && (
                <Link key="register" className="" to="/register">
                  Register
                </Link>
              )}

              {active && (
                <Link key="logout" className="" onClick={logout} to="/">
                  LogOut, {active.name}
                </Link>
              )}
            </li> */}
        {/* attept 3 */}
        {/* <li>
              <Link key="login" className="" to="/login">
                Login
              </Link>
            </li>

            <li>
              <button onClick={handleLogOut}>LogOut</button>
            </li>
            <Link key="register" className="" to="/register">
              Register
            </Link>
          </ul>
        </nav> */}

        {/* <a className="header-cta-button" href="#cta">
          <button>Contact Us</button>
        </a> */}
        <a href="#" onClick={handleToggleClick} className="toggle-button .icon">
          <i className="fa fa-bars fa-2x"></i>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
