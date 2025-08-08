import React from 'react'
import Signup from './Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import StartPage from './StartPage'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
