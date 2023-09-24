import React from 'react';
import { Link } from 'react-router-dom';
import appartementsData from '../data/appartements.json';
import './styles/accueil/accueil.css';

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
      <div className="appartements-container">
        {appartementsData.map((appartement) => (
          <div className="appartementcard" key={appartement.id}>
            <Link to={`/appartement/${appartement.id}`}>
              <div className="image-overlay">
                <img src={appartement.cover} alt={appartement.title} />
                <div className="card-text">
                  <h2>{appartement.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accueil;
