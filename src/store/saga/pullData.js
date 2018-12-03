import { call, put, all, takeLatest, takeEvery, fork } from 'redux-saga/effects';
import { GET_DATA, SUCCESS, FAILURE, RANGE_PRICE } from '../constants';
import { getAllProducts } from '../ApiCalls/g2AconfingAPIS';

function* getGShareAllProducts(action) {
	const result = yield call(getAllProducts, action.payload);
	yield call(getResponseFromAPI, result);
}

function* getResponseFromAPI(payload) {
	try {
		yield put({ type: SUCCESS, data: payload.data });
	} catch (error) {
		yield put({ type: FAILURE, error: error });
	}
}

export default function* rootSaga() {
	yield all(yield takeLatest(RANGE_PRICE, getGShareAllProducts));
}
