import React, { useEffect, useState, useRef } from "react";
import "./recipes.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../redux/recipeReducer/action";

export const Recipes = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const Recipes = useSelector((store) => store.recipeReducer.RecipesData);
  // console.log("Recipes from store",Recipes)

  const Loading = useSelector((store) => store.recipeReducer.isLoading);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    console.log("calls");
    const value = e.target.value;
    setSearchQuery(value);
    // delayedSearch(value);
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
                <i></i>

                <img src={ele.image} />
                <h3 className="recipeTitle">{ele.title}</h3>
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
