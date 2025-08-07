import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing pages
import Home from './pages/Home/Home';
import Restaurant from './pages/Restaurant/Restaurant';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

// Importing styles
import './App.css'; 

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;