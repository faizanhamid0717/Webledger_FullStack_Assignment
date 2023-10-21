import React, { useState } from 'react'
import './signup.css'
import { useDispatch } from 'react-redux'
import { postSignup } from '../redux/authReducer/action'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [gender,setGender] = useState("")
    const [city,setCity] = useState("")
    // console.log(name,email,password,gender,city)
    const navigate=useNavigate()
    const dispatch=useDispatch()

const handelSingup=(e)=>{
  e.preventDefault()
    let userData = {name,email,password,gender,city}
   dispatch(postSignup(userData,navigate)).then(()=>{
    setName("")
    setEmail("")
    setPassword('')
    setGender('')
    setCity('')
   })
   
}

  return (
           <div id='bg'>
        <div className='signupContainer'>
            
            <div className='signupInput'>
                  <h1>Get started & get <br/>recipe  organised.</h1>
                  <input type='text' placeholder='name' onChange={(e)=> setName(e.target.value)} value={name}/>
                   <br/>
                   <br/>
                   <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                   <br/>
                   <br/>
                   <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                   <br/>
                   <br/>
                   <select onChange={(e)=>setGender(e.target.value)}>
                       <option value={'gender'}>Select</option>
                       <option value={'male'}>Male</option>
                       <option value={'female'}>Female</option>
                       <option value={'other'}>Other</option>
                   </select>
                   <br/>
                   <br/>
                   <input type='text' placeholder='city' onChange={(e)=>setCity(e.target.value)} value={city}/>
                   <br/>
                   <br/>
                   <button className='signupBtn' onClick={handelSingup}>signup</button>
                    <br/>
                    OR <br/> Already have an account | <a href='login'>login</a> 
                
            </div>
            <div className='signupImg'>

            </div>
        </div>
    </div>
    
  )
}
