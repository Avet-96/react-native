import axios from 'axios';

export const API_URL = 'http://127.0.0.1:8000/api/';
axios.defaults.baseURL = API_URL;

class Api {
	static searchProduct(searchInput) {
		return axios.post('product/search', {searchInput});
	}

	static getAllProducts(offset) {
		return axios.get(`products/all/${offset}`);
	}

	static getCategories(){
		return axios.get(`categories/all`)
	};
	static filterProductData(searched_category_id){
		return axios.post(`product/search_by_category`,{searched_category_id})
	}
}

export default Api;
