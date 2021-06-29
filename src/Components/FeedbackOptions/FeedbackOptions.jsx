import React from "react"

const FeedbackOptions = ({ onIncrement }) => {
	return (
		<div className='feedback'>
			<h2 className='feedTitle'>Please leave feedback</h2>
			<button className='btnFeed' onClick={onIncrement}>
				Good
			</button>
			<button className='btnFeed' onClick={onIncrement}>
				Neutral
			</button>
			<button className='btnFeed' onClick={onIncrement}>
				Bad
			</button>
		</div>
	)
}

export default FeedbackOptions
