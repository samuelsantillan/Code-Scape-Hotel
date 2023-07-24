import { useState } from 'react'
import Error404 from "./components/Error404/Error404"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Error404/>
    </>
  )
}

export default App
