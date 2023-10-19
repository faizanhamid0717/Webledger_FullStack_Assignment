import React from 'react'
import { useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const Favorite = () => {
const favorite = useSelector((store)=>store.recipeReducer.FavoriteData)
console.log('fav',favorite)
const Loading = useSelector((store) => store.recipeReducer.isLoading);

  return (
    <div>
          {Loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="recipeContainer">
          {favorite?.map((ele) => {
            return (
              <div className="recipeCard" key={ele.id}>
                
                <img src={ele.image} />
                <p className="recipeTitle">{ele.title} </p> <br/>
                   <button><DeleteOutlineIcon fontSize="x-large"/></button>
              </div>
              
            );
          })}
        </div>
      )}
    </div>
  )
}
