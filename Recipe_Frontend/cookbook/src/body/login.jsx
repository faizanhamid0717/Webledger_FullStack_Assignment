import React, { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux'
import { postLogin } from '../redux/authReducer/action'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  // console.log(email,password)
const dispatch=useDispatch()
const navigate = useNavigate()
const location=useLocation()

  const handelLogin=(e)=>{
    e.preventDefault()
   let obj={email,password}
   
   dispatch(postLogin(obj,navigate)).then(()=>{
    navigate((location.state),{replace:true})
    
   })
   setEmail('')
    setPassword('')
  }

  return (
    <div id='bg'>
        <div className='loginContainer'>
            
            <div className='loginInput'>
                  <h1>Welcome to CookBook.</h1>
                   <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                   <br/>
                   <br/>
                   <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                   <br/>
                   <br/>
                   <button className='loginBtn' onClick={handelLogin}>login</button>
                   <br/>
                   <br/>
                   <Link to={'/signup'}><button className='createacount'>Create Account</button> </Link>
            </div>
            <div className='loginImg'>

            </div>
        </div>
    </div>
  )
}
