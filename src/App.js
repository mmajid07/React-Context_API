import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LoginScreen } from "./component/LoginTaskProfile/LoginScreen";
import { ProfileScreen } from "./component/LoginTaskProfile/ProfileScreen";
import { LoginTaskContextProvider } from "./Context/LoginTaskContext";

function App() {
  return (
    <>
      <Router>
        <LoginTaskContextProvider>
          <Routes>
            <Route path="/" element={<LoginScreen />} />{" "}
            <Route path="/profileScreen" element={<ProfileScreen />} />{" "}
          </Routes>
        </LoginTaskContextProvider>
      </Router>
    </>
  );
}

export default App;
