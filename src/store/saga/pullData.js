import axios from 'axios';
import { delay } from 'redux-saga'
import { takeEvery, call, put, all } from 'redux-saga/effects'
import * as actionTypes from '../actions/DataManipulationActions/dataManipulationsActions'

export function configureAxios() {

    const configureAxiosGetProducts = {
        headers: {
            'Authorization': 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875'
        },
        params: {
            page: 1,
            minPriceFrom: 0,
            minPriceTo: 1000
        },
        method: "GET",
        url: "https://sandboxapi.g2a.com/v1/products"
    };

    return axios(configureAxiosGetProducts);
}

export function* makeGetAPICall() {
    yield takeEvery(actionTypes.GET_DATA, dataItemsComponentWatcher)
}

export function* dataItemsComponentWatcher() {
    const response = yield call(configureAxios);
    try {
        yield put({ type: actionTypes.DATA_FETCHED_SUCCESSFULLY, data: response.data })
    } catch (error) {
        yield put({ type: actionTypes.DATA_FETCHING_FAILURE, error: error })

    }

}

export function* priceRangeWatcher() {
    yield call(delay, 1500);
    const watcher = yield call(actionTypes.initialRangePrice);

    console.log(watcher)
    console.log(watcher.minPriceFrom)
    console.log(watcher.minPriceTo)
}


export default function* rootSaga() {
    yield all([configureAxios(), makeGetAPICall(), dataItemsComponentWatcher(), priceRangeWatcher()])
}

