import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Category Redirects */}
        <Route path="/startup" element={<Navigate to="/startup/proprietorship" replace />} />
        <Route path="/registrations" element={<Navigate to="/registrations/trade-license" replace />} />
        <Route path="/trademark" element={<Navigate to="/trademark/registration" replace />} />
        <Route path="/gst" element={<Navigate to="/gst/gst_registration" replace />} />
        <Route path="/incometax" element={<Navigate to="/incometax/e-filing" replace />} />
        <Route path="/mca" element={<Navigate to="/mca/company" replace />} />
        <Route path="/compliance" element={<Navigate to="/compliance/business" replace />} />
        <Route path="/global" element={<Navigate to="/global/uae" replace />} />

        <Route path="/:category/:serviceSlug" element={<ServicePage />} />
        
        {/* Placeholder for future routes */}
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        
        {/* Catch all to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
