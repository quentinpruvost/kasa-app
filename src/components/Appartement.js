import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from './appartcomponents/Slideshow';
import appartementsData from '../data/appartements.json';
import Collapse from './Collapse';

function Appartement() {
  const { appartementId } = useParams();
  const appartement = appartementsData.find(appart => appart.id === appartementId);

  if (!appartement) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <h1>{appartement.title}</h1>
      <p>{appartement.location}</p>
      <Slideshow images={appartement.pictures} />
      <p>{appartement.description}</p>
      <Collapse title="test" content="ouverture collapse" />
    </div>
  );
}

export default Appartement;
