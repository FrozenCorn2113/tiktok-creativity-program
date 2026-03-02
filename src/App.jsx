import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import StartHerePage from './pages/StartHerePage';
import GuidesIndexPage from './pages/GuidesIndexPage';
import GuidePage from './pages/GuidePage';
import ToolsPage from './pages/ToolsPage';
import CalculatorPage from './pages/CalculatorPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/start-here" element={<StartHerePage />} />
          <Route path="/guides" element={<GuidesIndexPage />} />
          <Route path="/guides/:slug" element={<GuidePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
