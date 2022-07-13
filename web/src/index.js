import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/js/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './pages/js/Signup';
import Newreport from './pages/js/Newreport';
import Viewreport from './pages/js/Viewreport';
import Newtask from './pages/js/Newtask';
import './utils/utils.css'
import './utils/colors.css'
import './index.css'
import {Web3ReactProvider} from "@web3-react/core"
import {Web3Provider} from "@ethersproject/providers";

function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Web3ReactProvider getLibrary={getLibrary}>
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/newreport" element={<Newreport />} />
      <Route exact path="/viewreport" element={<Viewreport />} />
      <Route exact path="/newtask" element={<Newtask />} />
    </Routes>
  </Router>
  </Web3ReactProvider>
);
