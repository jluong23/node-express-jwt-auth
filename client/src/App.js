import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Smoothies from './pages/Smoothies';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/styles.css';
function App() {
  const navBar = (
    <nav>
      <a href="/">Home</a> <br/>
      <a href="/log-in">Log In</a> <br/>
      <a href="/sign-up">Sign Up</a> <br/>
    </nav>
  )

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/smoothies" element={<Smoothies/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
