import React, { useEffect, useState, useRef } from "react";
import "./recipes.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, postFav } from "../redux/recipeReducer/action";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToFavorites } from "../redux/favReducer/action";
import { useNavigate } from "react-router-dom";

export const Recipes = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const Recipes = useSelector((store) => store.recipeReducer.RecipesData);
  // console.log("Recipes from store",Recipes)
  const token = useSelector((store) => store.authReducer.Token);
  console.log("token",token)

  const Loading = useSelector((store) => store.recipeReducer.isLoading);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleSearch = (e) => {
    console.log("calls");
    const value = e.target.value;
    setSearchQuery(value);
    // delayedSearch(value);
  };

  const handelFavorite = (recipeID) => {
    dispatch(postFav(recipeID,token,navigate)); 
    console.log("added to recipe",recipeID,token)
  };
  
 

  useEffect(() => {
    dispatch(getRecipes(page, searchQuery));
  }, [page, searchQuery]);

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search your recipes"
        value={searchQuery}
        onChange={handleSearch}
      />

      {Loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="recipeContainer">
          {Recipes?.map((ele) => {
            return (
              <div className="recipeCard" key={ele.id}>
                
                <img src={ele.image} />
                <p className="recipeTitle">{ele.title} </p> <br/>
                
                <button  className='addtofav' onClick={() => handelFavorite(ele)}>
                <FavoriteBorderIcon fontSize="large" sx={{ color: "white"}}/>
               </button>
              </div>
              
            );
          })}
        </div>
      )}

      <button
        className="prev"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button className="count">{page}</button>
      <button className="next" onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};
