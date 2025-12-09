import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import { OutlineContext } from './context/OutlineContext'
import Footer from './components/Footer'
import CompanyStat from './pages/CompanyStat'
const App = () => {
  return (<>
   <OutlineContext.Provider value='outline outline-1 outline-red-500'>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/overview/:symbol' element={<CompanyStat/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </OutlineContext.Provider>
    </>
  )
}

export default App