import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Housing from './pages/Housing/Housing'
import Error from './pages/Error/Error'
import Layout from './components/Layout/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App