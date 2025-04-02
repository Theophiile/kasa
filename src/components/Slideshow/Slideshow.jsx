import { useState } from 'react';
import './Slideshow.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!pictures || pictures.length === 0) {
    return <div className="slideshow-empty">Aucune image disponible</div>;
  }

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slideshow">
      <div className="slide-container">
        <img 
          src={pictures[currentIndex]} 
          alt={`Logement ${currentIndex + 1}/${pictures.length}`}
          className="slide-image"
        />
        
        {pictures.length > 1 && (
          <>
            <button 
              onClick={goToPrevious}
              className="nav-arrow left-arrow"
              aria-label="Image précédente"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button 
              onClick={goToNext}
              className="nav-arrow right-arrow"
              aria-label="Image suivante"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="slide-counter">
              {currentIndex + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slideshow;