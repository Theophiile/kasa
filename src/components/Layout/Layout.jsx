import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'  // Chemin relatif corrigé
import Footer from '../Footer/Footer'  // Chemin relatif corrigé
import './Layout.scss'

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}