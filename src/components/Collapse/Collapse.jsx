import { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse ${isOpen ? 'open' : ''}`}>
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className="collapse-icon">
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;