import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil';
import Appartement from './components/Appartement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/appartement/:appartementId" element={<Appartement />} />
        {/* Autres routes */}
      </Routes>
    </Router>
  );
}

export default App;

