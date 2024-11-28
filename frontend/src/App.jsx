import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminAuth from './screens/AdminAuth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminAuth />} />
      </Routes>
    </BrowserRouter>
  )
}

// hola
export default App
