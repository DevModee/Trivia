import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminAuth from './screens/AdminAuth'
import AdminPanel from './screens/AdminPanel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminAuth />} />
        <Route path='/admin-panel' element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
