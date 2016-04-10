import React from 'react';

export default class About extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="grid">
				<div className="grid-row-item-row">
					<div className="grid-item">About</div>
					<div className="grid-item">Founded in March 2016 in the Mission District of San Francisco, California, 
					OpenSpace is marketplace for individuals and corporates to search, find, and facilitate temporary housing for their team during business trips.
					</div>
				</div>
			</div>
		)	
	}
}
