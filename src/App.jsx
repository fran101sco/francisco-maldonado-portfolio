import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contacto from './pages/contacto/contacto';
import AppLayout from './components/AppLayout';

const App = () => {
  return (
    <HashRouter>
      <AppLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
