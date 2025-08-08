import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    let[login,setLogin]=useState({Email:"",Password:""})

    let navigate=useNavigate()
    let handleChange=(e)=>{
      let {name,value}=e.target
      setLogin({...login,[name]:value})
    }

    let handleSubmit=async(e)=>{
      e.preventDefault()
      let getUser=await axios.get("http://localhost:5000/users")
      let logedInData=getUser.data
      console.log(logedInData)
      logedInData.forEach(element => {
      if(element.Email==login.Email && element.Password==login.Password){
        alert("Login sucessfull")
        navigate("/")
      }else{
        alert("Invalid credentials")
      }
    });
    }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input type="email" name="Email" onChange={handleChange}/><br />
        <label>PASSWORD</label>
        <input type="password" name="Password" onChange={handleChange}/><br />
        <input type="submit" value="LOGIN"/><br />
      </form>
      <p><Link to="/">FORGOT PASSWORD......!!</Link></p>
    </div>
  )
}

export default Login
