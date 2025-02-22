import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageGallery from './components/Gallery';
import Header from './components/header';
import SignUp from './components/signUp';
import Homepage from './components/Homepage';
import Tours from './components/Tours/Tours';
import SnorkelingTourDetail from './components/Tours/SnorkelingTourDetail';
import BicycleTourDetail from './components/Tours/BicycleTourDetail';
import LoginPage from './components/loginPage';
import './App.css'
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container-fluid">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='login' element={<LoginPage/>} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours/snorkeling-diving" element={<SnorkelingTourDetail />} />
            <Route path="/tours/tour-de-galle" element={<BicycleTourDetail />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;