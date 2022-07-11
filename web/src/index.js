import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/js/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './pages/js/Signup';
import './utils/utils.css'
import './utils/colors.css'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Signup" element={<Signup />} />
    </Routes>
  </Router>
);
