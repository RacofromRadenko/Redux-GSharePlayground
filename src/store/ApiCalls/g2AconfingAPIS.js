import axios from 'axios';
// GET ALL PRODUCTS
export const getAllProducts = (payload) =>
	axios({
		url: `https://sandboxapi.g2a.com/v1/products`,
		method: 'GET',
		headers: {
			Authorization: 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875'
		},
		params: {
			page: 1,
			minPriceFrom: payload.minPriceFrom,
			minPriceTo: payload.minPriceTo
		}
	})
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});

// ADD AN ORDER
export const AddAnOrder = (productID) =>
	axios({
		url: 'https://sandboxapi.g2a.com/v1/order',
		method: 'POST',
		headers: {
			Authorization: 'qdaiciDiyMaTjxMt, 74026b3dc2c6db6a30a73e71cdb138b1e1b5eb7a97ced46689e2d28db1050875',
			'Content-Type': 'application/json'
		},
		data: {
			product_id: productID
		}
	})
		.then((result) => {
			return result;
		})
		.catch((error) => {
			return error;
		});
