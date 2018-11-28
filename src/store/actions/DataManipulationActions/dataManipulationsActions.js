export const GET_DATA = "GET_DATA";
export const DATA_FETCHED_SUCCESSFULLY = "DATA_FETCHED_SUCCESSFULLY";
export const DATA_FETCHING_FAILURE = "DATA_FETCHING_FAILURE";

export const initialRangePrice = (min,max) =>{
    console.log(min, max)
    return { 
        type: "RANGE_PRICE",
        minPriceFrom:min,
        minPriceTo:max,
    }
}
