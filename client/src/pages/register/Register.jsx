import React from 'react'
import { useState } from 'react'
import "./register.css"
// import axios from 'axios'
import { RegisterContext } from "../../context/RegisterContext.js"
// import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../context/AuthContext.js'
 const Register = () => {
     const{register,errors,isloading}=RegisterContext()
    const [email,setEmail]=useState('')
    const [username,setUsername]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    const [phone,setPhone]=useState('')
    const[password,setPassword]=useState('')
    // const { loading, error, dispatch } = useContext(AuthContext);
    const navigate= useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
       await register(username,email,password,city,phone,country)
       navigate("/")
      };
      const handleOnClick=(e)=>{
        e.preventDefault()
        navigate("/login")
      }
    
  return (
    <div>
     <form className='register' onSubmit={handleSubmit}>
     <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={(e)=>setUsername(e.target.value)}
          value={username}
          className="lInput"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          className="lInput"
        />
        <input
          type="text"
          placeholder=" Write Your Country"
          id="country"
          onChange={(e)=>setCountry(e.target.value)}
          value={country}
          className="lInput"
        />
        <input
          type="number"
          placeholder="Your Contact Number"
          id="phone"
          onChange={(e)=>setPhone(e.target.value)}
          value={phone}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Your City"
          id="city"
          onChange={(e)=>setCity(e.target.value)}
          value={city}
          className="lInput"
        />
       <button disabled={isloading} className='lButton'>Register</button>
       <button disabled={isloading}  onClick={handleOnClick} className='lButton1'>Login</button>
      </div>
    </div>
     </form>
    </div>
  )
}
export default Register;