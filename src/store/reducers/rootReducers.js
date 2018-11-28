import {fetchDataReducer} from './PullDataReducer/pullDataReducer';
import {initialStoreDataReducer} from './PullDataReducer/pullDataReducer';
import {combineReducers} from 'redux';

export const  rootReducers = combineReducers(
    {
        initialStore:initialStoreDataReducer,
        fetchedData:fetchDataReducer
    }
);