import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import MedicineForm from "./components/Form/MedicineForm"; // Import MedicineForm component
import { Routes, Route, Navigate } from "react-router-dom";
import { CNavbar, CContainer, CNavbarBrand } from "@coreui/react";

function App() {
  let routes;
  routes = (
    <Routes>
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Form" element={<MedicineForm />} /> {/* Add a route for the MedicineForm component */}
      <Route path="/" element={<Navigate to="/SignUp" replace={true} />} />
    </Routes>
  );
  return (
    <>
      <div>
        <CNavbar colorScheme="light" className="bg-light">
          <CContainer fluid>
            <CNavbarBrand href="#">Navbar</CNavbarBrand>
          </CContainer>
        </CNavbar>
        {routes}
      </div>
    </>
  );
}

export default App;
