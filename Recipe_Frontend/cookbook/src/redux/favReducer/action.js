

import { DELETE_FAVORITE, FAVORITE_FAILURE, FAVORITE_PENDING, FAVORITE_SUCCESS } from "./actionType";
import axios from 'axios'

export const getFavorites = (token,authorID)=>(dispatch)=>{
      
    dispatch({type:FAVORITE_PENDING})
const Data={
    headers : {
        Authorization: `Bearer ${token}`
      }};
      axios.get(`http://localhost:9090/recipes?authorID=${authorID}`, Data)
        .then((response) => {
          console.log('User-specific Recipes:', response.data);
         dispatch({type:FAVORITE_SUCCESS , payload:response.data})
        })
        .catch((error) => {
          dispatch({type:FAVORITE_FAILURE})
        });
};


