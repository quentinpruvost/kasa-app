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
      {/* Utilisez un conteneur pour aligner les éléments en colonne */}
      <div className="content-container">
        {/* Partie gauche avec le titre, la localisation et les tags */}
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

        {/* Partie droite avec les informations de l'hôte et la note */}
        <div className="right-column">
          {/* Affichez le nom de l'hôte et sa photo à gauche de la photo */}
          <div className="host-info">
            <p>{appartement.host.name}</p>
            <img src={appartement.host.picture} alt={appartement.host.name} />
          </div>
          {/* Affichez la note sous forme d'étoiles */}
          <div className="etoiles-container">
            <Etoiles note={parseInt(appartement.rating)} />
          </div>
        </div>
      </div>

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
