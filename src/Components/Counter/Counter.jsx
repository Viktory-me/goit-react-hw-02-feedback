/** @format */

import React from "react"
import PropTypes from "prop-types"
import Statistic from "../Statistic/Statistic"
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions"

class Counter extends React.Component {
	static defaultProps = {
		initialGood: 0,
		initialNeutral: 0,
		initialBad: 0,
	}

	static propTypes = {
		state: PropTypes.arrayOf(
			PropTypes.shape({
				good: PropTypes.number.isRequired,
				neutral: PropTypes.number.isRequired,
				bad: PropTypes.number.isRequired,
			})
		),
	}

	state = {
		good: this.props.initialGood,
		neutral: this.props.initialNeutral,
		bad: this.props.initialBad,
	}

	handleIncrement = () => {
		this.setState((prevState) => ({
			good: prevState.good + 1,
		}))
	}

	render() {
		return (
			<section className='Counter'>
				<FeedbackOptions onIncrement={this.handleIncrement} />
				<Statistic
					good={this.state.good}
					neutral={this.state.neutral}
					bad={this.state.bad}
				/>
			</section>
		)
	}
};

export default Counter;
