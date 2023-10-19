import { REQUEST_FAILURE, REQUEST_PENDING ,LOGIN_REQUEST_SUCCESS, SIGNUP_REQUEST_SUCCESS} from "./actionType"
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


export const postSignup=(userData)=>(dispatch)=>{
     dispatch(signupRequestAction())
    return axios
     .post('https://handsome-shawl-lion.cyclic.app/user/register',userData)
     .then((res)=>{
        console.log("res",res)
        dispatch(signupSuccessAction(res.data))
     }).catch((error)=>{
        dispatch(signupFailureAction(error))
     })
}

export const postLogin=(obj)=>(dispatch)=>{
    dispatch({type:REQUEST_PENDING})
    return axios
    .post('https://handsome-shawl-lion.cyclic.app/user/login',obj)
    .then((res)=>{
        console.log('login res',res.data.token)
        dispatch({type:LOGIN_REQUEST_SUCCESS,payload:res.data.token})
    }).catch((error)=>{
        dispatch({type:REQUEST_FAILURE})
    })
}