import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  let [login, setLogin] = useState({ Email: "", Password: "" })

  let navigate = useNavigate()
  let handleChange = (e) => {
    let { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let getUser = await axios.get("http://localhost:5000/users")
      let logedInData = getUser.data
      console.log(logedInData)
      let user = logedInData.find(
        (element) =>
          element.Email === login.Email && element.Password === login.Password);
      if (user) {
        alert("Login successful",user.Username);
        navigate("/home")
        return
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      alert("Unable to login please try again..!")

    }
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input type="email" name="Email" onChange={handleChange} /><br />
        <label>PASSWORD</label>
        <input type="password" name="Password" onChange={handleChange} /><br />
        <input type="submit" value="LOGIN" /><br />
      </form>
      <p><Link to="/home">FORGOT PASSWORD......!!</Link></p>
    </div>
  )
}

export default Login
