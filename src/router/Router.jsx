import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button } from 'bootstrap'
import Layout from '../layout/layout'
import Register from '../pages/register/Register'
const Router = () => {
    
  return (
    
    <BrowserRouter> 
    <Layout>
        <Routes>
            <Route path='/register' element={ <Register /> }/>
                
        </Routes>
        </Layout>
     </BrowserRouter>
  )
}

export default Router
