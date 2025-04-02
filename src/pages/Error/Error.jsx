import { useNavigate } from 'react-router-dom';
import './Error.scss';

export default function Error() {
  const navigate = useNavigate();
  
  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <button 
          onClick={() => navigate('/')}
          className="home-link"
        >
          Retourner sur la page d'accueil
        </button>
      </div>
    </div>
  );
}