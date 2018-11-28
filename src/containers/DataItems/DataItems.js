import React, { Component } from 'react';
import './DataItems.scss'
import { connect } from 'react-redux'
import {initialRangePrice} from '../../store/actions/DataManipulationActions/dataManipulationsActions'

class DataItems extends Component {

    componentDidMount() {
        console.log(this.props.intialStoreMinPrice)
        console.log(this.props.intialStoreMaxPrice)
        // this.props.InitialPriceRange(this.props.intialStoreMinPrice,this.props.intialStoreMaxPrice)

    }


    componentDidUpdate() {
        console.log('usao odje', this.props.data);
        console.log('usao odje', this.props.total);
        console.log('usao odje', this.props.page);
        this.props.InitialPriceRange(this.props.intialStoreMinPrice,this.props.intialStoreMaxPrice)
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
        intialStoreMaxPrice:state.initialStore.maxPrice,
        intialStoreMinPrice:state.initialStore.minPrice,
        data: state.fetchedData.data,
        total: state.fetchedData.total,
        page: state.fetchedData.page,

    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        InitialPriceRange: (min,max) => dispatch(initialRangePrice(min, max)),
       }
}



export default connect(mapStateToProps, mapDispatchToProps)(DataItems);