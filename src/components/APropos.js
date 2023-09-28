import React from 'react';
import Collapse from './Collapse';
import './styles/apropos/apropos.css';

function APropos() {
  return (
    <div>
      <div className="accueil-image-container">
        <img
          src="https://zupimages.net/up/23/38/k6oa.png"
          alt="accueil"
        />
      </div>
      <div className="collap">
        <Collapse title="Fiabilité">
          <p>Description 1</p>
        </Collapse>
        <br></br>
        <Collapse title="Respect">
          <p>Description 2</p>
        </Collapse>
        <br></br>
        <Collapse title="Service">
          <p>Description 3</p>
        </Collapse>
        <br></br>
        <Collapse title="Sécurité">
          <p>Description 4</p>
        </Collapse>
      </div>
    </div>
  );
}

export default APropos;
