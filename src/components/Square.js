import React, { Component } from "react";

class Square extends Component {
	
//  create the handleClick 
handleClick = () => {
	this.props.handleGamePlay(this.props.index)
}

	render() {
		// const { value } = this.props;

		return (
			<React.Fragment>
				<div id='square' onClick={this.handleClick} >
				
				</div>
			</React.Fragment>
		);
	}
}
export default Square;
