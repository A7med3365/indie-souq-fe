import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Films from './pages/Films';
import Tests from './pages/Tests';
import ProjectDetails from './pages/ProjectDetails';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/details" element={<ProjectDetails />} />
        <Route path="/t" element={<Tests />} />
      </Routes>
      <div className="bg-footerBg w-full mt-20">
        <div className="max-w-[1150px] m-auto text-white px-10 py-28 xl:px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
