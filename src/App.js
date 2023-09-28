import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Appartement from './components/Appartement';
import APropos from './components/APropos'; 
import PageErreur from './components/PageErreur';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/styles/globalStyles.css';

function App() {
  return (
    <Router>
            <Navbar /> 
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/appartement/:appartementId" element={<Appartement />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/*" element={<PageErreur />} /> {/* Route pour les chemins inexistants */}
      </Routes>
      <div className="footer-container">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
