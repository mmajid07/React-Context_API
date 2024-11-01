import React, { useState, useContext } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import UserContext from "../Context/UserContext";

export const Login = () => {
  const initialValue = { userName: "", password: "" };
  const [inputValue, setInputValue] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState(initialValue);
  const handleSetValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const Validate = () => {
    const errors = {};
    if (inputValue.userName.trim() === "") {
      errors.userName = "Please Enter User Name";
    }
    // if (inputValue.userName.split("").some((char) => !isNaN(char))) {
    //   errors.userName = "Name does not contain Digit";
    // }
    if (/\d/.test(inputValue.userName)) {
      errors.userName = "Name does not contain Digit";
    }

    if (inputValue.password.trim() === "") {
      errors.password = "Please Enter Password";
    } else if (inputValue.password.length < 6) {
      errors.password = "Password length must be above to 6";
    }

    setErrorMessage(errors);
    return Object.keys(errors).length === 0;
  };
  const { setUser } = useContext(UserContext);
  const handleSubmit = () => {
    const value = Validate();
    if (value) {
      setUser(inputValue);
    } else {
      console.log("Validation Error");
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Typography variant="h2">Welcome to Context Api</Typography>
      <TextField
        type="text"
        placeholder="User Name"
        value={inputValue.userName}
        onChange={handleSetValue}
        name="userName"
      />
      <Typography sx={{ color: "red" }}>{errorMessage.userName}</Typography>
      <TextField
        type="password"
        placeholder="Password"
        value={inputValue.password}
        onChange={handleSetValue}
        name="password"
      />
      <Typography sx={{ color: "red" }}>{errorMessage.password}</Typography>
      <Button onClick={handleSubmit} variant="outlined">
        {" "}
        Submit
      </Button>
    </Box>
  );
};
