import { ADD_TO_FAVORITES, RECIPE_FAILURE, RECIPE_PENDING, RECIPE_SUCCESS } from "./actionType"
import axios from 'axios'

const API = "https://api.spoonacular.com/recipes"
const APIKey = 'b0d95d8b334c4fe196eac718c235a50b'
let limit=9

export const getRecipes=(page,query)=>(dispatch)=>{
    dispatch({type:RECIPE_PENDING})

    axios.get(`${API}/complexSearch`, {
        params: {
            apiKey: APIKey,
            number: limit,
            offset: (page - 1) * limit,
            query:query
        }
    })
    .then((res)=>{
        console.log('data',res.data.results)
        dispatch({type:RECIPE_SUCCESS,payload:res.data.results})
    }).catch((error)=>{
        dispatch({type:RECIPE_FAILURE})
        console.log(error)
    })
}

export const postFav = (recipeId) => {
    return {
      type: ADD_TO_FAVORITES,
      payload: recipeId
    };
  };