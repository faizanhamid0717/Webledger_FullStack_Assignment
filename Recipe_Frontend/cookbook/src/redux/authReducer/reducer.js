import { LOGIN_REQUEST_SUCCESS, REQUEST_FAILURE, REQUEST_PENDING, SIGNUP_REQUEST_SUCCESS } from "./actionType"


const initialState={
    isLoading:false,
    isError:false,
    isAuth:false,
    token:"",
    users:[]

}

export const reducer=(state=initialState,{type,payload})=>{
     switch(type){
        case REQUEST_PENDING:
            return{...state,isLoading:true}

            case SIGNUP_REQUEST_SUCCESS:
                return {...state,isLoading:false}

                case LOGIN_REQUEST_SUCCESS:
                    return {...state,isLoading:false,isAuth:true,token:payload}

                    case REQUEST_FAILURE:
                        return {...state,isLoading:false,isError:true}


                        default:
                            return state
     }
}