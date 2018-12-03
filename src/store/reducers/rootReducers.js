import { fetchDataReducer } from './PullDataReducer/pullDataReducer';
import { combineReducers } from 'redux';

export const rootReducers = combineReducers({
	fetchedData: fetchDataReducer
});
