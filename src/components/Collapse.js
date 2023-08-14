import React, { useState } from 'react';
import './styles/collapse.css';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src="https://zupimages.net/up/23/32/dwck.png"
          alt="Toggle"
          className={`arrow ${isOpen ? 'down' : ''}`}
        />
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
