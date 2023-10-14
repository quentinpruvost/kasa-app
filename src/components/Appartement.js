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

      <div className="content-container">
        <div className="left-column">
          <h1>{appartement.title}</h1>
          <p>{appartement.location}</p>
          <div className="tags-container">
            {appartement.tags.map((tag, index) => (
              <li key={index} className="tag">
                {tag}
              </li>
            ))}
          </div>
        </div>

        <div className="right-column">
          <div className="host-info">
            <p>{appartement.host.name}</p>
            <img src={appartement.host.picture} alt={appartement.host.name} />
          </div>
          <div className="etoiles-container">
            <Etoiles note={parseInt(appartement.rating)} />
          </div>
        </div>
      </div>

      <div className="column-container">
        <div className="column">
          <Collapse title="Description">
            <p>{appartement.description}</p>
          </Collapse>
        </div>
        <div className="column">
          <Collapse title="Équipements">
            <ul>
              {appartement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}


export default Appartement;
