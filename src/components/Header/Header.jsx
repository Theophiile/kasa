import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img 
            src="/assets/logos/kasa-red.png"
            alt="Kasa - Location d'appartements" 
            className="logo-img"
          />
        </Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/about" className="nav-link">À propos</Link>
        </nav>
      </div>
    </header>
  )
}