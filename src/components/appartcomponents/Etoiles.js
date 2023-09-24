import React from 'react';
import './etoiles.css';

function Etoiles({ note }) {
  const etoilesRemplies = Math.round(note);
  const etoilesVides = 5 - etoilesRemplies;

  const etoilesRempliesArray = Array.from({ length: etoilesRemplies });
  const etoilesVidesArray = Array.from({ length: etoilesVides });

  return (
    <div className="etoiles"> 
      {etoilesRempliesArray.map((_, index) => (
        <img
          key={index}
          src="https://zupimages.net/up/23/33/b8k1.png"
          alt="Étoile remplie"
        />
      ))}
      {etoilesVidesArray.map((_, index) => (
        <img
          key={index}
          src="https://zupimages.net/up/23/33/8q6o.png"
          alt="Étoile vide"
        />
      ))}
    </div>
  );
}

export default Etoiles;