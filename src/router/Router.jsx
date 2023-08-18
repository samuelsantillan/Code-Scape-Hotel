import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout/layout'
import Register from '../pages/register/Register'
import Login from '../pages/login/Login'
const Router = () => {
    
  return (
    
    <BrowserRouter> 
    <Layout>
        <Routes>
            <Route path='/register' element={ <Register /> }/>
            <Route path='/login' element={ <Login /> }/>
        </Routes>
        </Layout>
     </BrowserRouter>
  )
}

export default Router
