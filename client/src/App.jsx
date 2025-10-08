import React from 'react'
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import { OutlineContext } from './context/OutlineContext'
const App = () => {
  return (<>
   <OutlineContext.Provider value='outline outline-1 outline-red-500'>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>
    </OutlineContext.Provider>
    </>
  )
}

export default App