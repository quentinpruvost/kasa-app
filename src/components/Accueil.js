import React from 'react';
import { Link } from 'react-router-dom';
import appartementsData from '../data/appartements.json';

function Accueil() {
  return (
    <div>
      <Link to="/a-propos">À Propos</Link>
      <h1>Appartements de vacances</h1>
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
