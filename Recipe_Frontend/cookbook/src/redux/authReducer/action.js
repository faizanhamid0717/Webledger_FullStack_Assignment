
import { Navigate } from "react-router-dom"
import { REQUEST_FAILURE, REQUEST_PENDING ,LOGIN_REQUEST_SUCCESS, SIGNUP_REQUEST_SUCCESS, USERSIGN_OUT} from "./actionType"
import axios from 'axios'

const signupRequestAction=()=>{
    return {type:REQUEST_PENDING}
}

const signupSuccessAction=(payload)=>{
    return {type:SIGNUP_REQUEST_SUCCESS,payload}
}

const signupFailureAction=()=>{
    return {type:REQUEST_FAILURE}
}


export const postSignup=(userData,navigate)=>(dispatch)=>{
     dispatch(signupRequestAction())
    return axios
     .post('http://localhost:9090/user/register',userData)
     .then((res)=>{
        console.log("res",res.data)
        dispatch(signupSuccessAction(res.data))
        alert("Sign up successfully")
         navigate('/login') 
     }).catch((error)=>{
        dispatch(signupFailureAction(error))
        if (error.response && error.response.data && error.response.data.msg) {
            alert(error.response.data.msg);
          } else {
            alert("An error occurred during signup.");
          }
     })
}

export const postLogin=(obj,navigate)=>(dispatch)=>{
    dispatch({type:REQUEST_PENDING})
    return axios
    .post('http://localhost:9090/user/login',obj)
    .then((res)=>{
        console.log('login res',res.data.Token)
        dispatch({type:LOGIN_REQUEST_SUCCESS,payload:res.data.Token})
        alert("Login Successfully")
        console.log("Navigating---",navigate)
        navigate('/')
          
    })
    .catch((error)=>{
        dispatch(signupFailureAction(error))
        if (error.response && error.response.data && error.response.data.msg) {
            alert(error.response.data.msg);
          } else {
            alert('An error occurred during login.');
          }
         
    })
}


 export const userSignout=()=>{
    return{
        type:USERSIGN_OUT
    }
}