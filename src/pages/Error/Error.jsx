import { useNavigate } from 'react-router-dom'
import './Error.scss'

export default function Error() {
  const navigate = useNavigate()
  
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page non trouvée</p>
      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
    </div>
  )
}