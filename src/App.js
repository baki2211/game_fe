import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/PlayerDashboard/PlayerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/player-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
