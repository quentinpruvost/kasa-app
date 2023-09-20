import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from './appartcomponents/Slideshow';
import appartementsData from '../data/appartements.json';
import Collapse from './Collapse';
import Etoiles from './appartcomponents/Etoiles';
import './appartcomponents/tag.css';

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

      <Etoiles note={parseInt(appartement.rating)} />

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
      
      <p>Hôte : {appartement.host.name}</p>

      <div className="tags-container">
        {appartement.tags.map((tag, index) => (
          <li key={index} className="tag">{tag}</li>
        ))}
      </div>
    </div>
  );
}

export default Appartement;
