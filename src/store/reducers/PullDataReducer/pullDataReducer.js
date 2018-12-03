import { SUCCESS, FAILURE } from '../../constants';

const initialState = {
	data: [],
	error: null,
	product_id: null,
	minPrice: 0,
	maxPrice: 1000
};

export const fetchDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS:
			console.log(action.data);
			console.log(action.data.docs);
			return {
				...state,
				data: action.data.docs,
				page: action.data.page,
				total: action.data.total,
				product_id: null
			};

		case FAILURE:
			// console.log(action.error);

			return {
				...state,
				error: action.error
			};

		default:
			break;
	}
	return state;
};
