import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "./Logout";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="navbar">
      {user.existingUser ? (
        <>
          <div className="logo">
            <Typography component={Link} to="/" variant='body'>
              eCommerce
            </Typography>
          </div>
          <div className="options">
            <div className="options_link">
              <Logout />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="logo">
            <Typography component={Link} to="/" variant="button">
              eCommerce
            </Typography>
          </div>
          <div className="options">
            <div className="options_link">
              <Typography component={Link} to="/register">
                Register
              </Typography>
            </div>
            <div className="options_link">
              <Typography component={Link} to="/login">
                Login
              </Typography>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
