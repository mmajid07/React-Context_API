import React, { useContext, useEffect } from "react";
import ApiContext from "../Context/ApiContext";
import { Typography } from "@mui/material";

export const ApiContextData = () => {
  const { data, FetchApiData } = useContext(ApiContext);

  useEffect(() => {
    FetchApiData();
  }, []);

  console.log("Data >>>>>>", data);
  return (
    <div>
      <h1>Hello Api Data</h1>
      {data ? (
        data.map((item) => {
          return (
            <Typography key={item.id}>
              {item.id} {item.name}
            </Typography>
          );
        })
      ) : (
        <Typography>Data Loading...</Typography>
      )}
    </div>
  );
};
