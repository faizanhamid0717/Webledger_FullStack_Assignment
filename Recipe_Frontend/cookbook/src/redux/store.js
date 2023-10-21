
import {reducer as authReducer} from './authReducer/reducer'
import {reducer as favReducer} from './favReducer/reducer'
import {reducer as recipeReducer} from './recipeReducer/reducer'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    authReducer,
    favReducer,
    recipeReducer

})

const persistConfig = {
    key: 'myApp', 
    storage,    
  };
  

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);