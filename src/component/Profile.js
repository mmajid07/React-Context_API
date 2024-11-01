import React, { useContext } from "react";
import UserContext from "../Context/UserContext";
import { Box, Typography } from "@mui/material";

export const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user)
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
        <Typography>Not Logged In</Typography>
      </Box>
    );
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
      <Typography>
        <strong>Profile UserName:</strong> {user.userName} <br />
        <strong>Profile Password:</strong> {user.password}
      </Typography>
    </Box>
  );
};
