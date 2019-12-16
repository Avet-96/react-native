export const SEARCH_PRODUCT_REQUEST = 'SEARCH_PRODUCT_REQUEST';
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS';
export const SEARCH_PRODUCTS_FAIL = 'SEARCH_PRODUCTS_FAIL';

export function getProductName(searchInput) {
	return {
		type: SEARCH_PRODUCT_REQUEST, payload: {searchInput},
	};
}

export const GET_ALL_PRODUCT_DATA_REQUEST = 'GET_ALL_PRODUCT_DATA_REQUEST';
export const GET_ALL_PRODUCT_DATA_SUCCESS = 'GET_ALL_PRODUCT_DATA_SUCCESS';
export const GET_ALL_PRODUCT_DATA_FAIL = 'GET_ALL_PRODUCT_DATA_FAIL';

export function getAllProducts(offset) {
	return {
		type: GET_ALL_PRODUCT_DATA_REQUEST, payload: {offset},
	};
}

export const GET_ALL_PRODUCT_CATEGORIES_REQUEST = 'GET_ALL_PRODUCT_CATEGORIES_REQUEST';
export const GET_ALL_PRODUCT_CATEGORIES_SUCCESS = 'GET_ALL_PRODUCT_CATEGORIES_SUCCESS';
export const GET_ALL_PRODUCT_CATEGORIES_FAIL = 'GET_ALL_PRODUCT_CATEGORIES_FAIL';

export function getProductCategories() {
	return{
		type:GET_ALL_PRODUCT_CATEGORIES_REQUEST,
	}
}

export const FILTER_PRODUCT_DATA_REQUEST = 'FILTER_PRODUCT_DATA_REQUEST';
export const FILTER_PRODUCT_DATA_SUCCESS = 'FILTER_PRODUCT_DATA_SUCCESS';
export const FILTER_PRODUCT_DATA_FAIL  ='FILTER_PRODUCT_DATA_FAIL';

export function getFilterProductsData(searched_category_id) {
	return{
		type:FILTER_PRODUCT_DATA_REQUEST, payload:{searched_category_id}
	}
}
