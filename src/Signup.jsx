import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    let[add,setAdd]=useState({
        Username:"",
        Email:"",
        Password:"",
        ConfirmPassword:""
    })
  let navigate=useNavigate()

let handleSubmit= async(e)=>{
  e.preventDefault()
  if(!add.Username || !add.Email || !add.Password||!add.ConfirmPassword){
    alert("please enter all the values")
    return;
  }else if(!/[A-Za-z0-9]+@[A-Za-z]+\.[a-z]{2,}/.test(add.Email)){
    setAdd((prev)=>({...prev,Email:""}))
    alert("enter a proper email")
    return;
  }else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{6,}/.test(add.Password)){
    alert("password must contain atleast one uppercase, one lower case, one digit and special character")
    setAdd((prev)=>({...prev,Password:""}))
    return;
  }else if(add.Password!=add.ConfirmPassword){
    alert("password is  not matching")
    setAdd((prev)=>({...prev,ConfirmPassword:""}))
    return;
  }
  
  let response=await axios.get(`http://localhost:5000/users?Email=${add.Email}`)
  if(response.data.length>0){
    return alert("the user already exists...! Please Login")
    
  }
  setAdd(add)
   try {
      await axios.post('http://localhost:5000/users', add);
      alert('Signup data saved Successfully...! Please login');
      navigate("/login")
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to save signup');
    }
}
let handleChange=(e)=>{
  let {name,value}=e.target
  setAdd({...add,[name]:value})
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>USERNAME</label>
        <input type="text" name="Username" onChange={handleChange} /><br />
        <label>EMAIL</label>
        <input type="email" name="Email" onChange={handleChange} /><br />
        <label>PASSWORD</label>
        <input type="password" name="Password" onChange={handleChange} /><br />
        <label>CONFIRM PASSWORD</label>
        <input type="password" name="ConfirmPassword" onChange={handleChange} /><br />
        <br />
        <input type="submit" value="SUBMIT"/><br />
      </form>
      <p> Already have an Account....? <Link to="/login">Login</Link> </p>
    </div>
  )
}

export default Signup;
