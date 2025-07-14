import React from 'react'
import SignInPage from './pages/SignInPage'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PrivateRouter from './component/PrivateRouter'
import Details from './pages/Details'
import List from './pages/List'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<PrivateRouter><Dashboard /></PrivateRouter>} />
        <Route path='/' element={<SignInPage />} />
        <Route path='/details' element={<PrivateRouter><Details /></PrivateRouter>} />    
         <Route path="/list" element={<List />} />   
         <Route path='*' element={<Dashboard />}/>
      </Routes>
      
    </div>
  )
}

export default App
