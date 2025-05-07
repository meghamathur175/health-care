import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/Landing';
import EmergencyRequestForm from '../components/EmergencyRequestForm';  // Ensure this import is correct

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/emergency" element={<EmergencyRequestForm />} />  Ensure this is correct
    </Routes>
  );
};

export default AllRoutes;
