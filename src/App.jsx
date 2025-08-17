import React, { useState } from 'react'
import Signup from './Signup'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Login'
import StartPage from './StartPage'
import Home from './Components/Home'
import Upload from './Components/Upload'
import Profile from './Components/Profile'
import VideoCard from './Components/VideoCard'
import SecureRoute from './Components/SecureRoute'
import VideoPlayer from './Components/VideoPlayer'

const App = () => {
  let[currentUser,setCurrentUser]=useState(null)
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser}></Login>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<SecureRoute currentUser={currentUser}>
          <Home currentUser={currentUser}></Home>
          </SecureRoute>} />
        <Route path="/upload" element={<SecureRoute currentUser={currentUser}>
          <Profile currentUser={currentUser}></Profile>
          </SecureRoute>}  />
        <Route path="/profile" element={<SecureRoute currentUser={currentUser}>
          <Upload currentUser={currentUser}></Upload>
          </SecureRoute>} />
        <Route path="/videocard" element={<VideoCard currentUser={currentUser}></VideoCard>} />

        <Route path="/video/:id" element={<SecureRoute currentUser={currentUser}>
          <VideoPlayer currentUser={currentUser} />
          </SecureRoute>}/>
      </Routes>
    </Router> 
    </div>
  )
}

export default App
