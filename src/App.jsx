import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './components/Footer/Footer';
import Layout from './layout/Layout';
library.add(fas, fab)


const App = () => {


  return (
    <>
    <Layout></Layout>
    <Footer
     <Footer />
    </>
  )
}

export default App
