import { LOGIN_REQUEST_SUCCESS, REQUEST_FAILURE, REQUEST_PENDING, SIGNUP_REQUEST_SUCCESS, USERSIGN_OUT } from "./actionType"


const initialState={
    isLoading:false,
    isError:false,
    isAuth:false,
    Token:"",
    users:[]

}

export const reducer=(state=initialState,{type,payload})=>{
     switch(type){
        case REQUEST_PENDING:
            return{...state,isLoading:true}

            case SIGNUP_REQUEST_SUCCESS:
                return {...state,isLoading:false}

                case LOGIN_REQUEST_SUCCESS:
                    return {...state,isLoading:false,isAuth:true,Token:payload}

                    case REQUEST_FAILURE:
                        return {...state,isLoading:false,isError:true}

                        case USERSIGN_OUT:
                            return {...state,isAuth:false,Token:""}

                     
                        default:
                            return state
     }
}