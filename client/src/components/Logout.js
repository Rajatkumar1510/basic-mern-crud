import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout);
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Logout;
