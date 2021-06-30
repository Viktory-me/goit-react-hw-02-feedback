import React from "react";
import PropTypes from "prop-types";
import Statistic from "../Statistic/Statistic";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Counter extends React.Component {
	static defaultProps = {
		initialGood: 0,
		initialNeutral: 0,
		initialBad: 0,
	};

	static propTypes = {
		state: PropTypes.arrayOf(
			PropTypes.shape({
				good: PropTypes.number.isRequired,
				neutral: PropTypes.number.isRequired,
				bad: PropTypes.number.isRequired,
			})
		),
	};

	state = {
		good: this.props.initialGood,
		neutral: this.props.initialNeutral,
		bad: this.props.initialBad,
	};

	setActiveItem = (item) => {
		this.setState((PrevState) => ({
			[item]: PrevState[item] + 1,
		}));
	};

	countTotalFeedback = () => {
		return Object.values(this.state).reduce((acc, item) => acc + item, 0);
	};

	countPositiveFeedbackPercentage = () => {
		return Math.round((this.state.good * 100) / this.countTotalFeedback());
	};

	render() {
		return (
			<>
				<Section title='Please leave feedback'>
					<FeedbackOptions
						options={this.state}
						onLeaveFeedback={this.setActiveItem}
					/>{" "}
				</Section>

				<Section title='Statistics'>
					{this.countTotalFeedback() === 0 ? (
						<Notification message='No feedback given'></Notification>
					) : (
						<Statistic
							good={this.state.good}
							neutral={this.state.neutral}
							bad={this.state.bad}
							total={this.countTotalFeedback()}
							positivePercentage={this.countPositiveFeedbackPercentage()}
						/>
					)}
				</Section>
			</>
		);
	}
}

export default Counter;
