import { useState } from 'react'
import Aboutus from "./components/Aboutus/Aboutus"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Aboutus/>
    </>
  )
}

export default App
