import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Layout from './layout/Layout';
library.add(fas, fab)


const App = () => {


  return (
    <>
    <Layout></Layout>
    </>
  )
}

export default App
