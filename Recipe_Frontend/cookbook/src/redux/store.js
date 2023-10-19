
import {reducer as authReducer} from './authReducer/reducer'
import {reducer as favReducer} from './favReducer/reducer'
import {reducer as recipeReducer} from './recipeReducer/reducer'

import {combineReducers,legacy_createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    authReducer,
    favReducer,
    recipeReducer

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))