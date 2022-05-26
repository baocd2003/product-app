import { ADD_PRODUCT } from "./action-types";
import { DELETE_PRODUCT } from './action-types'
import { SEARCH_PRODUCT } from './action-types';
const initialList = () =>{
	const list = localStorage.getItem('product-list')
	let products = []
	if(list){
		products = JSON.parse(list)
	}
	return products
}
const initialState = {
	product : initialList(),
	query:''
}

export const productList = (state = initialState,action) => {
	switch(action.type) {
		case ADD_PRODUCT:
			localStorage.setItem('product-list',JSON.stringify([...state.product,action.data]))
			console.log(action);
			return{
				...state,
				product:[...state.product,action.data]
			}
		case DELETE_PRODUCT: 
			const { data } = action
			const updateList = state.product.filter(e => e.title != data.title)
			localStorage.setItem('product-list',JSON.stringify(updateList))
			return {
				...state,
				product : updateList
			}
		case SEARCH_PRODUCT: {
			const { query } = action;
			return {
				...state,
				query,
			}
			}
		default:
			return state;
	}
}
