import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../redux/favReducer/action";

export const Favorite = () => {
  const token = useSelector((store) => store.authReducer.Token);

  const favoriteData = useSelector((store) => store.recipeReducer.FavoriteData);
  const authorID = favoriteData.map((item) => item.authorID);
  // console.log("authorID",authorID)

  const favoriteLIST = useSelector((store) => store.favReducer.FavoriteList);
  console.log("fav-page", favoriteLIST);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFavorites(token, authorID));
    }
  }, [token]);

  return (
    <div>
      <h1>Favorite</h1>
      <div className="recipeContainer">
        {favoriteLIST?.map((ele) => {
          return (
            <div className="recipeCard" key={ele._id}>
              <img src={ele.image} />
              <p className="recipeTitle">{ele.title} </p> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};
