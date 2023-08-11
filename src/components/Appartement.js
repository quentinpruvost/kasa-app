import React from 'react';
import { useParams } from 'react-router-dom';
import appartementsData from '../data/appartements.json';

function Appartement() {
  const { id } = useParams();
  const appartement = appartementsData.find((appartement) => appartement.id === id);

  if (!appartement) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <h2>{appartement.title}</h2>
      <img src={appartement.cover} alt={appartement.title} />
      <p>{appartement.description}</p>
      <p>{appartement.location}</p>
    </div>
  );
}

export default Appartement;
