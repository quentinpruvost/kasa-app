import React from 'react';
import { useParams } from 'react-router-dom';
import Slideshow from './appartcomponents/Slideshow';
import appartementsData from '../data/appartements.json';
import Collapse from './Collapse';
import Etoiles from './appartcomponents/Etoiles';
import './appartcomponents/tag.css';
import './styles/appart.css';

function Appartement() {
  const { appartementId } = useParams();
  const appartement = appartementsData.find((appart) => appart.id === appartementId);

  if (!appartement) {
    return <div>Appartement non trouvé</div>;
  }

  return (
    <div>
      <Slideshow images={appartement.pictures} />
      <div className="title-container">
        <h1>{appartement.title}</h1>
        <div className="host-info">  <p>{appartement.host.name}</p>
          <img src={appartement.host.picture} alt={appartement.host.name} />
        
        </div>
      </div>
      <p>{appartement.location}</p>
      <div className="tags-container">
        {appartement.tags.map((tag, index) => (
          <li key={index} className="tag">
            {tag}
          </li>
        ))}
      </div>
      <Etoiles note={parseInt(appartement.rating)} />
      <div className="descript-container">
      <Collapse title="Description">
        <p>{appartement.description}</p>
      </Collapse>
      
    </div>
      <div className="equipment-container">
        <Collapse title="Équipements">
          <ul>
            {appartement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Appartement;
