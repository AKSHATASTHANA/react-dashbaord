import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard'; // Import Dashboard component
import LoginPage from './components/login/login'; // Import LoginPage component
import './App.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './components/about/about';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
