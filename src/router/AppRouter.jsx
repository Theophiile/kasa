import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Housing from '../pages/Housing/Housing';
import Error from '../pages/Error/Error';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route 
          path="housing/:id" 
          element={<Housing />}
          errorElement={<Error />} 
        />
        {/* Gestion des routes inexistantes */}
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" replace state={{ errorType: '404' }} />} />
      </Route>
    </Routes>
  );
}