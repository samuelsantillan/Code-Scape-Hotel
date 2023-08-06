
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer/Footer';

library.add(fas, fab)
function App() {

  return (
    <>
      <Footer />

    </>
  )
}

export default App
