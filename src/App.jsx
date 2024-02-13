import React from 'react';
import MedicineForm from "./components/Form/form";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { createTheme } from '@mui/material/styles'; // Import createTheme

const theme = createTheme(); // Create a theme instance

function App() {
  let routes;
  routes = (
    <Routes>
      <Route path="/form" element={<MedicineForm />} /> 
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<Navigate to="/SignUp" replace={true} />} />
    </Routes>
  );

  return (
    <ThemeProvider theme={theme}> {/* Wrap your entire application with ThemeProvider */}
      <div>{routes}</div>
    </ThemeProvider>
  );
}

export default App;
