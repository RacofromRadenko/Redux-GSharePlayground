import { RANGE_PRICE } from '../../constants';

export function initialRangePrice(min, max) {
	console.log('ovaj', min, max);
	return {
		type: RANGE_PRICE,
		payload: {
			minPriceFrom: min,
			minPriceTo: max
		}
	};
}
