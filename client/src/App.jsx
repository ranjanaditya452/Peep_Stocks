import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { OutlineContext } from './context/OutlineContext'
import Overview from './pages/Overview'
import Layout from './components/Layout'
import StockNews from './pages/StockNews'

const App = () => {
  return (<>
    <OutlineContext.Provider value='outline-1 outline-red-500'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/overview' element={<Overview/>} />
            <Route path='/news' element={<StockNews/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </OutlineContext.Provider>
  </>
  )
}

export default App