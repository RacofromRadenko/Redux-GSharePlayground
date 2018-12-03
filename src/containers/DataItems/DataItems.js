import React, { Component } from 'react';
import './DataItems.scss';
import { connect } from 'react-redux';
import { initialRangePrice } from '../../store/actions/DataManipulationActions/dataManipulationsActions';
import SingleItem from '../../components/SingleItem/SingleItem';

class DataItems extends Component {
	componentDidMount() {
		console.log(this.props.minPriceFrom);
		console.log(this.props.minPriceTo);
		this.props.InitialPriceRange(this.props.minPriceFrom, this.props.minPriceTo);
	}

	render() {
		const singleItem = this.props.data.map((item) => {
			return <SingleItem item={item} />;
		});

		return (
			<div className="DataItems">
				<input
					type="text"
					id="minPriceFrom"
					placeholder="From"
					onChange={(event) =>
						this.props.InitialPriceRange(event.target.value, document.getElementById('minPriceTo').value)}
				/>
				<input
					type="text"
					id="minPriceTo"
					placeholder="To"
					onChange={(event) =>
						this.props.InitialPriceRange(document.getElementById('minPriceFrom').value, event.target.value)}
				/>
				{singleItem}
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
