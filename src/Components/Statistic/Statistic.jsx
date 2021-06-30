import React from "react";
import PropTypes from "prop-types";
import s from "./Statistic.module.css";

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
	return (
		<ul className={s.statisticList}>
			<li className={s.stateItem}>Good: {good}</li>
			<li className={s.stateItem}>Neutral: {neutral}</li>
			<li className={s.stateItem}>Bad: {bad}</li>
			<li className={s.stateItem}>Total: {total}</li>
			<li className={s.stateItem}>Positive feedback: {positivePercentage}%</li>
		</ul>
	);
};
Statistic.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positivePercentage: PropTypes.number.isRequired,
};
export default Statistic;
