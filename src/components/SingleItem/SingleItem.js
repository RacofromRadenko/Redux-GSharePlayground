import React from 'react';
import './SingleItem.scss';

const SingleItem = (props) => {
	console.log(props);
	return (
		<div className="SingleItem" onClick={props.clicked}>
			neki teks
		</div>
	);
};

export default SingleItem;
