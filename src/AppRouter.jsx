// App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Housing from './pages/Housing/Housing';
import Error from './pages/Error/Error';
import Layout from './components/Layout/Layout';

function App() {
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
        <Route path="/404" element={<Error />} />
        <Route 
          path="*" 
          element={<Navigate to="/404" replace state={{ 
            errorType: '404',
            attemptedPath: window.location.pathname 
          }} />} 
        />
      </Route>
    </Routes>
  );
}

export default App;