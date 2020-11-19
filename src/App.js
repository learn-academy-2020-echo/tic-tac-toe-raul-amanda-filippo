import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(8).fill(null), 
		// current player
		// winner
		};
	}

// handleGamePlay method
// take in the index as an argument and passed from the square component

handleGamePlay = (index) => {
	alert (index)
}

// check if the clicked square = null (empty) and the winner is null
// prevent already clicked box to get clicked again


// Determine the winning conditions and double check what's in the board right now
//Winning conditions:
// Rows:
// index 0,1,2 
// index 3,4,5
// index 6,7,8
// Columns:
// index 0,3,6
// index 1,4,7
// index 2,5,8
// Diagonally:
// 0,4,8
// 2,4,6 

// check if any of the winning conditions have been met
// if game won, you can't continue to play the game
// if no more squares available, show a notice that the game has ended

//  restart game method with button

	render() {
		const { squares } = this.state;

		return (
			<React.Fragment>
				<h1>Tic Tac Toe</h1>
				<div id='gameboard'>
					{squares.map((value, index) => {
						return (
						<Square 
						value={value} 
						key={index} 
						index = {index}
						handleGamePlay = {this.handleGamePlay}
						/>)
					})}
				</div>
			{/* button : restart game, uses restart game method */}
			</React.Fragment>
		);
	}
}
export default App;
