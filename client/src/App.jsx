import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Overview from './pages/Overview'
import Layout from './components/Layout'
import StockNews from './pages/StockNews'

const App = () => {
  return (<>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/overview' element={<Overview/>} />
            <Route path='/news' element={<StockNews/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  </>
  )
}

export default App