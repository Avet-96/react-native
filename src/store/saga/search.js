import {takeLatest, call, put} from 'redux-saga/effects';
import Api from '../../../Api';
import {
	FILTER_PRODUCT_DATA_FAIL,
	FILTER_PRODUCT_DATA_REQUEST, FILTER_PRODUCT_DATA_SUCCESS,
	GET_ALL_PRODUCT_CATEGORIES_FAIL,
	GET_ALL_PRODUCT_CATEGORIES_REQUEST, GET_ALL_PRODUCT_CATEGORIES_SUCCESS,
	GET_ALL_PRODUCT_DATA_FAIL,
	GET_ALL_PRODUCT_DATA_REQUEST, GET_ALL_PRODUCT_DATA_SUCCESS, getProductCategories,
	SEARCH_PRODUCT_REQUEST, SEARCH_PRODUCTS_FAIL, SEARCH_PRODUCTS_SUCCESS,
} from '../action/search';

export default function* watcher() {
	yield takeLatest(SEARCH_PRODUCT_REQUEST, searchProductData);
	yield takeLatest(GET_ALL_PRODUCT_DATA_REQUEST, getAllProductsData);
	yield takeLatest(GET_ALL_PRODUCT_CATEGORIES_REQUEST, getProductCategoriesFunction);
	yield takeLatest(FILTER_PRODUCT_DATA_REQUEST, getProductFilterId);
}

export function* searchProductData(action) {
	try {
		const {searchInput} = action.payload;
		const {data} = yield call(Api.searchProduct, searchInput);
		yield put({
			type: SEARCH_PRODUCTS_SUCCESS,
			payload: {data},
		});
	} catch (e) {
		yield put({
			type: SEARCH_PRODUCTS_FAIL,
			message: e.message,
		});
	}
}

export function* getAllProductsData(action) {
	try {
		const {data} = yield call(Api.getAllProducts, action.payload.offset);
		yield put({
			type: GET_ALL_PRODUCT_DATA_SUCCESS,
			payload: {data},
		});
	} catch (e) {
		yield put({
			type: GET_ALL_PRODUCT_DATA_FAIL,
			message: e.message,
		});
	}
}

export function* getProductCategoriesFunction() {
	try {
		const {data} = yield call(Api.getCategories);
		yield put({
			type: GET_ALL_PRODUCT_CATEGORIES_SUCCESS,
			payload: {data},
		});
	} catch (e) {
		yield put({
			type: GET_ALL_PRODUCT_CATEGORIES_FAIL,
			message: e.message,
		});
	}
}

export function* getProductFilterId(action) {
	try {
		const {data} = yield call(Api.filterProductData, action.payload.searched_category_id);
		yield put({
			type: FILTER_PRODUCT_DATA_SUCCESS,
			payload: [data],
		});
	} catch (e) {
		yield put({
			type:FILTER_PRODUCT_DATA_FAIL,
			message:e.message
		});
	}

}
