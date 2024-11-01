import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import LoginTaskContext from "../../Context/LoginTaskContext";
import { Link } from "react-router-dom";
import { ProfileScreen } from "./ProfileScreen";

export const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const { LoginFunc, setLoginState } = useContext(LoginTaskContext);
  return (
    <div>
      <Typography>LoginScreen</Typography>
      <TextField
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <Button onClick={() => LoginFunc(userName)}>Login </Button>
    </div>
  );
};
