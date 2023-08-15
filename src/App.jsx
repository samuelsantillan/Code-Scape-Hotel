import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './layout/Layout'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css'
library.add(fas, fab)

const App = () => {
  return (
    <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>

  );
}

export default App;
