import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Films from './pages/Films';
import Tests from './pages/Tests';
import ProjectDetails from './pages/ProjectDetails';
import { Routes, Route } from 'react-router-dom';

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
    </div>
  );
}
