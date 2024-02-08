import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  let routes;
  routes = (
    <Routes>
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<Navigate to="/SignUp" replace={true} />} />
    </Routes>
  );
  return (
    <>
      <div>{routes}</div>
    </>
  );
}

export default App;
