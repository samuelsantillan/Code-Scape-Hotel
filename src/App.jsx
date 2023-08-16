import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './layout/Layout';
import LoadingPage from './pages/loading/LoadingPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';

library.add(fas, fab);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
    };

    window.addEventListener('DOMContentLoaded', handleLoad);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('DOMContentLoaded', handleLoad);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;


