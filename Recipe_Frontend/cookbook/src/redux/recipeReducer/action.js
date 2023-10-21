import { useSelector } from "react-redux"
import { ADD_TO_FAVORITES, RECIPE_FAILURE, RECIPE_PENDING, RECIPE_SUCCESS } from "./actionType"
import axios from 'axios'

const API = "https://api.spoonacular.com/recipes"
const APIKey = 'eeca4ec891a544cfa6051484f74d553a'
let limit=12

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



export const postFav = (recipeID,token,navigate) =>(dispatch)=>{
    dispatch({type:RECIPE_PENDING})
     
    if(token){
        axios.post('http://localhost:9090/recipes/create', recipeID, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((res) => {
            console.log("addtofav", res.data);
            dispatch({type:ADD_TO_FAVORITES,payload:res.data})
            alert("added successfully")
            navigate("/recipes")
          })
    }else{
        alert('Please login first')
        navigate("/login")
    }
   
  
} 
    
  