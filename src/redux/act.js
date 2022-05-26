import { ADD_PRODUCT } from "./action-types"
import {DELETE_PRODUCT} from "./action-types"
import {SEARCH_PRODUCT} from "./action-types"
export const addProduct = (data) => {
	return{
		type: ADD_PRODUCT,
		data,
	}
}

export const deleteProduct = (data) => {
	return{
		type: DELETE_PRODUCT,
		data,
	}
}

export const searchProduct = (query) => {
	
	return{ 
		type: SEARCH_PRODUCT,
		query,
	}
}

