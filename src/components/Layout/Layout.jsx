import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  )
}

export default Layout