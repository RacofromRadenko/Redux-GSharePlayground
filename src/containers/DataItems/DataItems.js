import React, { Component } from 'react';
import './DataItems.scss';
import { connect } from 'react-redux';
import { initialRangePrice } from '../../store/actions/DataManipulationActions/dataManipulationsActions';

class DataItems extends Component {
	componentDidMount() {
		console.log(this.props.minPriceFrom);
		console.log(this.props.minPriceTo);
		// this.props.InitialPriceRange(this.props.minPriceFrom, this.props.minPriceTo);
	}

	componentDidUpdate() {
		console.log('usao odje', this.props.data);
		console.log('usao odje', this.props.total);
		console.log('usao odje', this.props.page);
		this.props.InitialPriceRange(this.props.minPriceFrom, this.props.minPriceTo);
	}

	render() {
		return (
			<div>
				<h5>Data items </h5>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.fetchedData.data,
		total: state.fetchedData.total,
		page: state.fetchedData.page,
		minPriceFrom: state.fetchedData.minPrice,
		minPriceTo: state.fetchedData.maxPrice
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		InitialPriceRange: (min, max) => dispatch(initialRangePrice(min, max))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DataItems);
