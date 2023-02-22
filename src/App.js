import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';

import Home from "./components/views/Home/Home";
import Login from "./components/views/Login";
import Product from "./components/views/Product";

function App() {
  return (
    <>
      <Router>
        <NavBar />

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
