import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import LipidProfileAnalyzer from './pages/LipidProfileAnalyzer';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptom-checker" element={<SymptomChecker />} />
          <Route path="/lipid-profile" element={<LipidProfileAnalyzer />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
