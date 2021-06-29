/** @format */

import React from "react";
// import PropTypes from "prop-types"

const Statistic = ({ good, neutral, bad }) => {
	return (
	<div className='statisticList'>
		<h2 className='stateTitle'>Statistic</h2>
		<span className='stateItem'>Good: {good}</span>
		<span className='stateItem'>Neutral: {neutral}</span>
		<span className='stateItem'>Bad: {bad}</span>
	</div>)
};

export default Statistic;
