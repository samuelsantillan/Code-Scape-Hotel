
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
import RoomProvider from './context/RoomContext';
library.add(fas, fab);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
    });
  }, []);


  return (
    <>
    
      {isLoading ? (
        <LoadingPage />
      ) : (
        <RoomProvider>
          <BrowserRouter>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
        </RoomProvider>
      )}
    </>
  );
};

export default App;


