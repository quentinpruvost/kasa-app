import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Page404/page404.css';

function Page404() {
  return (
    <div className="page-404-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <p className="return-link">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
}

export default Page404;
