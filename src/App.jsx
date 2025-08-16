import React, { useState } from 'react'
import Signup from './Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import StartPage from './StartPage'
import Home from './Components/Home'
import Upload from './Components/Upload'
import Profile from './Components/Profile'
import VideoCard from './Components/VideoCard'

const App = () => {
  let[currentUser,setCurrentUser]=useState(null)
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser}></Login>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home currentUser={currentUser}></Home>} />
        <Route path="/upload" element={<Upload currentUser={currentUser}></Upload>} />
        <Route path="/profile" element={<Profile currentUser={currentUser}></Profile>} />
        <Route path="/videocard" element={<VideoCard currentUser={currentUser}></VideoCard>} />
      </Routes>
    </Router> 
    </div>
  )
}

export default App
