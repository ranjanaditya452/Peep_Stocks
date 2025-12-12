import React from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

const Layout = ({children}) => {
  return (
    
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <main className='flex-grow'>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout