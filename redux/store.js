import {applyMiddleware, compose, createStore, combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './reducers/product-reducer'
import userReducer from './reducers/user-reducer'
import gymReducer from './reducers/gym-reducer'
import selectedGymReducer from './reducers/selected-gym-reducer'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  gyms: gymReducer,
  gym: selectedGymReducer
})

const allStoreEnhancers = compose (
  composeWithDevTools(applyMiddleware(thunk))
)

const store = createStore(
  allReducers,
  allStoreEnhancers
);

export default store