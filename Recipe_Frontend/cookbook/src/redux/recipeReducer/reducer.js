

import { ADD_TO_FAVORITES, RECIPE_FAILURE, RECIPE_PENDING, RECIPE_SUCCESS } from "./actionType"


const initialState = {
    isLoading:false,
    isError:false,
    RecipesData:[],
    FavoriteData:[]
}

export const reducer =(state=initialState,{type,payload})=>{
    switch(type){

        case RECIPE_PENDING:
            return {...state,isLoading:true}

            case RECIPE_SUCCESS:
                return {...state,isLoading:false,RecipesData:payload}

                case RECIPE_FAILURE:
                    return {...state,isLoading:false,isError:true}

                    case ADD_TO_FAVORITES:
                        return {
                            ...state,
                             FavoriteData: [...state.FavoriteData,payload]
                          };

                    default:
                        return state
    }
}