import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import WIEChapter from './components/WieChapter';

function App() {
  console.log('App is rendering'); // Debugging log
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/wie-chapter" element={<WIEChapter />} />
      </Routes>
    </Router>
  );
}
export default App;
