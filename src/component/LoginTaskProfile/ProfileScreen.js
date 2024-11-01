import { Typography, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import LoginTaskContext from "../../Context/LoginTaskContext";
import { useNavigate } from "react-router-dom";

export const ProfileScreen = () => {
  const { loginState, LogoutFunc } = useContext(LoginTaskContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginState.isLoggedIn === false) {
      navigate("/");
    }
  }, [LogoutFunc]);
  return (
    <div>
      <Typography>Profile Name is : {loginState.username} </Typography>
      <Button onClick={LogoutFunc}>Logout</Button>
    </div>
  );
};
