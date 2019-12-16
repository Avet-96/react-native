import {
	FILTER_PRODUCT_DATA_SUCCESS,
	GET_ALL_PRODUCT_CATEGORIES_SUCCESS,
	GET_ALL_PRODUCT_DATA_SUCCESS,
	SEARCH_PRODUCTS_SUCCESS,
} from '../action/search';


const initialState = {
	product: [],
	allProductData: [],
	productCategories: [],
	filterProductsIdData: [],
};
export default function reducer(state = initialState, action) {

	switch (action.type) {
		case SEARCH_PRODUCTS_SUCCESS: {
			return {...state, product: action.payload.product};
		}
		case GET_ALL_PRODUCT_DATA_SUCCESS: {
			return {
				...state, dat:state.allProductData.push(...action.payload.data.products),
			};
		}
		case GET_ALL_PRODUCT_CATEGORIES_SUCCESS: {
			return {...state, productCategories: action.payload.data};
		}
		case  FILTER_PRODUCT_DATA_SUCCESS: {
			return {...state, filterProductsIdData: action.payload.data};
		}
		default: {
			return state;
		}
	}
}
