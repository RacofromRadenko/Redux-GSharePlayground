import { GET_DATA, DATA_FETCHED_SUCCESSFULLY, DATA_FETCHING_FAILURE, RANGE_PRICE } from '../../constants';

const initialState = {
	data: [],
	error: null,
	minPrice: 0,
	maxPrice: 1000
};

export const initialStoreDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA:
			console.log(action.data);
			console.log(action.data.docs);
			return {
				...state
			};

		default:
			return state;
	}
};

export const fetchDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case DATA_FETCHED_SUCCESSFULLY:
			console.log(action.data);
			console.log(action.data.docs);
			return {
				...state,
				data: action.data.docs,
				page: action.data.page,
				total: action.data.total
			};

		case DATA_FETCHING_FAILURE:
			// console.log(action.error);

			return {
				...state,
				error: action.error
			};

		default:
			return state;
	}
};
