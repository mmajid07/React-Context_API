import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ProfileScreen } from "../component/LoginTaskProfile/ProfileScreen";

const LoginTaskContext = createContext();

export const LoginTaskContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    username: "Affan",
    isLoggedIn: false,
  });

  const LoginFunc = (username) => {
    setLoginState({
      username: username,
      isLoggedIn: true,
    });
    console.log("User Name ::", loginState.username);
    navigate("/profileScreen");
  };

  const LogoutFunc = () => {
    setLoginState({
      username: "",
      isLoggedIn: false,
    });
  };

  return (
    <LoginTaskContext.Provider value={{ loginState, LoginFunc, LogoutFunc }}>
      {children}
    </LoginTaskContext.Provider>
  );
};

export default LoginTaskContext;
