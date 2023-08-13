import React from 'react';
import { Link } from 'react-router-dom';
import appartementsData from '../data/appartements.json';
import './styles/accueil/accueil.css'; // Importez le fichier CSS

function Accueil() {
  return (
    <div>
      <div className="accueil-image-container">
        <img
          src="https://zupimages.net/up/23/32/xz1k.png"
          alt="accueil"
        />
        <div className="image-text">
          Chez vous, partout et ailleurs
        </div>
      </div>
      <ul>
        {appartementsData.map((appartement) => (
          <li key={appartement.id}>
            <Link to={`/appartement/${appartement.id}`}>
              <img src={appartement.cover} alt={appartement.title} />
              <h2>{appartement.title}</h2>
              <p>{appartement.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accueil;
