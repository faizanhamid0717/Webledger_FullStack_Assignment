import { FAVORITE_PENDING, FAVORITE_SUCCESS, FAVORITE_FAILURE, ADD_TO_FAVORITES } from "./actionType";


const initialState = {
  isLoading: false,
  isError: false,
  FavoriteData: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_PENDING:
      return { ...state, isLoading: true };

    case FAVORITE_SUCCESS:
      return { ...state, isLoading: false, FavoriteData: payload };

    case FAVORITE_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        FavoriteData: [...state.FavoriteData, payload]
      };

    default:
      return state;
  }
};
