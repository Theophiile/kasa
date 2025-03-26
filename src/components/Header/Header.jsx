import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header className="app-header">
      <Link to="/">
        <img src="./assets/logos/kasa-red.png" alt="Kasa" />
      </Link>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  )
}