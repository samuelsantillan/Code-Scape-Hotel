import React from 'react'
import './layout.css'



const Layout = ({ children }) => {
  return (
    <div className="main-container">
      
      <main className="content">
      
        {children}
      </main>
     
    </div>
  )
}

export default Layout