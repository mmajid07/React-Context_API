import React, { Children, createContext, useState } from "react";

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const FetchApiData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      throw new Error("Api request Failded");
    }
    console.log("Data Value ::", data);
  };
  return (
    <ApiContext.Provider value={{ data, FetchApiData }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
