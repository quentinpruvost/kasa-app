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
      <Slideshow images={appartement.pictures} />
      <h1>{appartement.title}</h1>
      <p>{appartement.location}</p>

      <Collapse title="Description">
        <p>{appartement.description}</p>
      </Collapse>
      <Collapse title="Équipements">
        <ul>
          {appartement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>

      <p>Note : {appartement.rating}/5</p>
      <p>Hôte : {appartement.host.name}</p>

      <h2>Tags :</h2>
      <ul>
        {appartement.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default Appartement;
