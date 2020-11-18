import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
		};
	}

	render() {
		const { squares } = this.state;

		return (
			<React.Fragment>
				<h1>Tic Tac Toe</h1>
				<div id='gameboard'>
					{squares.map((value, index) => {
						return <Square value={value} key={index} />;
					})}
				</div>
			</React.Fragment>
		);
	}
}
export default App;
