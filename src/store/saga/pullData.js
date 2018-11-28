import axios from 'axios';
import { call, put, all, takeLatest, take, fork, takeEvery } from 'redux-saga/effects';
import { GET_DATA, DATA_FETCHED_SUCCESSFULLY, DATA_FETCHING_FAILURE, RANGE_PRICE } from '../constants';

function* priceRangeWatcher() {
	const action = yield take(RANGE_PRICE);

	yield fork(configureAxios, action.payload);
}

function configureAxios(actionPayload) {
	console.log('o dje si stoko', actionPayload);
	// const configureAxiosGetProducts = {
	// 	headers: {
	// 		Authorization: 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875'
	// 	},
	// 	params: {
	// 		page: 1,
	// 		minPriceFrom: payload.minPriceFrom,
	// 		minPriceTo: payload.minPriceTo
	// 	},
	// 	method: 'GET',
	// 	url: 'https://sandboxapi.g2a.com/v1/products'
	// };
	const ajJeboTeRaco = axios({
		async: true,
		crossDomain: true,
		url: `https://sandboxapi.g2a.com/v1/products?minPriceFrom=2&minPriceTo=10`,
		method: 'GET',
		headers: {
			Authorization: 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875',
			'cache-control': 'no-cache',
			'Postman-Token': '4cf398e7-3a20-4853-bc04-437aaf5eadba'
		}
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			throw err;
		});

	console.log(ajJeboTeRaco);
}

export function* makeGetAPICall() {
	console.log('3');
	yield takeLatest(GET_DATA, dataItemsComponentWatcher);
}

export function* dataItemsComponentWatcher(action) {
	console.log('2');
	const response = yield call(configureAxios, action);
	console.log('konacno nesto', response);
	try {
		yield put({ type: DATA_FETCHED_SUCCESSFULLY, data: response.data });
	} catch (error) {
		yield put({ type: DATA_FETCHING_FAILURE, error: error });
	}
}

export default function* rootSaga() {
	yield all([
		takeEvery(RANGE_PRICE, dataItemsComponentWatcher)

		// takeEvery(akeGetAPICall), dataItemsComponentWatcher(), priceRangeWatcher()
	]);
}
