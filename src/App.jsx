import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Component/Navbar';
import Welcome from './Component/Welcome';
import Signup from './Component/Signup';
import Login from './Component/Login'; 

const AppContent = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/signup', '/login']; 
  

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
