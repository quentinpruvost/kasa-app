import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/navbar/navbar.css';

function Navbar() {
    const location = useLocation();
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="https://zupimages.net/up/23/18/mrzb.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'current-page' : ''}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/a-propos"
              className={location.pathname === '/a-propos' ? 'current-page' : ''}
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
