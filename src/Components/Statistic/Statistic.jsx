/** @format */

import React from "react";
import PropTypes from "prop-types";

const Statistic = ({ good, neutral, bad, total, positivePercentage  }) => {
	return (
	<ul className='statisticList'>
		<li className='stateItem'>Good: {good}</li>
		<li className='stateItem'>Neutral: {neutral}</li>
		<li className='stateItem'>Bad: {bad}</li>
		<li className="stateItem">Total: {total}</li>
		<li className='stateItem'>Positive feedback: {positivePercentage}%</li>
	</ul>)
};
Statistic.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired
  };
export default Statistic;