import { FAVORITE_PENDING, FAVORITE_SUCCESS, FAVORITE_FAILURE, DELETE_FAVORITE} from "./actionType";


const initialState = {
  isLoading: false,
  isError: false,
  FavoriteList: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FAVORITE_PENDING:
      return { ...state, isLoading: true };

    case FAVORITE_SUCCESS:
      return { ...state, isLoading: false, FavoriteList: payload };

    case FAVORITE_FAILURE:
      return { ...state, isLoading: false, isError: true };

     

    default:
      return state;
  }
};
