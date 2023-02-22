import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';

import Home from './components/views/home/Home';


import Login from "./components/views/Login";
import Product from "./components/views/Product";

function App() {
  return (
    <>
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product" element={<Product/>} />
        </Routes>


      </Router>


    </>
  );
}

export default App;
