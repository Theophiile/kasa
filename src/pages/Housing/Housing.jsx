import { useParams, Navigate } from 'react-router-dom';
import logements from '../../data/logements.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import './Housing.scss';

const Housing = () => {
  const { id } = useParams();
  const housing = logements.find(item => item.id === id);

  // Redirection vers la page d'erreur si logement non trouvé
  if (!housing) {
    return <Navigate to="/error" state={{ 
      message: `Le logement (ID: ${id}) n'existe pas`,
      type: '404'
    }} replace />;
  }

  return (
    <div className="housing-page">
      <Slideshow pictures={housing.pictures} />
      
      <div className="housing-header">
        <div className="housing-title">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          
          <div className="housing-tags">
            {housing.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing-host">
          <div className="host-info">
            <p>{housing.host.name.split(' ')[0]}<br/>{housing.host.name.split(' ')[1]}</p>
            <img 
              src={housing.host.picture} 
              alt={`Photo de ${housing.host.name}`} 
              loading="lazy"
            />
          </div>
          <Rating score={parseInt(housing.rating)} />
        </div>
      </div>

      <div className="housing-details">
        <Collapse title="Description">
          <p>{housing.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {housing.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Housing;