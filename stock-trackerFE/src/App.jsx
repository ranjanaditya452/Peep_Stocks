import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
const App = () => {
  return (<>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App