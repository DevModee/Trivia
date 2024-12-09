import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminAuth from './screens/AdminAuth'
import AdminPanel from './screens/AdminPanel'
import CreateTriviaForm from "./components/CreateTriviaForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<AdminAuth />} />
        <Route path='/admin-panel/:id' element={<AdminPanel />} />
        <Route path="/admin-panel/create-trivia" element={<CreateTriviaForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
