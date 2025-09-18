import React from 'react'
import { Route,Router,Routes } from 'react-router-dom'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </Router>
  )
}

export default App