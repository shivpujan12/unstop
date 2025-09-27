import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                {/* Redirect root to login */}
                <Route path="/" element={<Navigate to="/auth/login" replace />} />

                <Route path="/auth/login" element={<Login />} />

                <Route path="/home" element={<Profile />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;


