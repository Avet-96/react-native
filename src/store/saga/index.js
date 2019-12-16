import {fork, all} from 'redux-saga/effects';
import search from './search';

export default function* watchers() {
	yield all([
		fork(search),
	]);
}
