import { combineReducers  } from "redux";
import {createStore} from 'redux'
import {productList} from './reduce'

const reducer  = combineReducers({
	products:productList,
})
const initialState = {}
const store = createStore(reducer,initialState)

export default store