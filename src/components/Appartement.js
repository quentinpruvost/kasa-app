// Appartement.js
import React from 'react';
import { useParams } from 'react-router-dom';
import appartementsData from '../data/appartements.json';

function Appartement() {
  const { appartementId } = useParams();

  const appartement = appartementsData.find(appartement => appartement.id === appartementId);

  if (!appartement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <h1>{appartement.title}</h1>
      <img src={appartement.cover} alt={appartement.title} />
      <p>{appartement.location}</p>
    </div>
  );
}

export default Appartement;
