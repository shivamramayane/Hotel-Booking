// import axios from "axios";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext.js";

 export const RegisterContext=()=>{
    const navigate=useNavigate()
    const [errors,setErrors]=useState(null)
    const[isloading,setIsloading]=useState(null)
    const {  dispatch } = useContext(AuthContext);
const register = async(username,email,password,city,phone,country)=>{
    setIsloading(true)
    setErrors(null)
    const response = await fetch('/auth/register',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,email,password,city,phone,country})
    })
    const json=await response.json()
    if(json.success){
        // setIsloading(false)
        // setErrors(json.errors)
        localStorage.setItem('user',JSON.stringify(json))
      
        dispatch({type: "LOGIN_SUCCESS",payload:json})
        navigate("/")
        // setIsloading(false)
    }
    else{
        setIsloading(false)
         setErrors(json.errors)
    }
}
return{register,isloading,errors}
}
// export default RegisterContext