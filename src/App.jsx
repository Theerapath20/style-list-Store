import React from 'react'
import './App.css'
import Home from './pages/Home'
import Store from './pages/Store';
import { BrowserRouter ,  Routes, Route } from "react-router-dom";

// cardItem
import Item1 from './compomemt-store/cardItem/Item1';
import Navbar from './component-home/Navbar';
import Footer from './component-home/Footer';
// import  './compomemt-store/data.json'

// import {slides} from  "./dataCorosol.json"
function App() {
   
 return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/item1" element={<Item1  />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}

export default App