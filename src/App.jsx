import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import MedicineForm from "./components/Form/MedicineForm"; // Import MedicineForm component
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  let routes;
  routes = (
    <Routes>
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Form" element={<MedicineForm />} /> Include MedicineForm in the routes
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
