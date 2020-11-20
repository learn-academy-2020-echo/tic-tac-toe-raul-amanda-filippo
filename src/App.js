import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			squares: Array(9).fill(null),
			currentPlayer: 'x',
			winner: null,
		}
	}

	// handleGamePlay method
	// take in the index as an argument and passed from the square component

	handleGamePlay = (index) => {
		const { squares, currentPlayer, winner } = this.state
		// check if the clicked square = null (empty) and the winner is null
		if (squares[index] === null && winner === null) {
			squares[index] = currentPlayer
			this.setState({
				squares: squares,
				currentPlayer: currentPlayer === 'x' ? 'o' : 'x',
			})
		}
		console.log(squares)
	}

	// prevent already clicked box to get clicked again

	winning = () => {
		const { squares, currentPlayer } = this.state

		// Determine the winning conditions and double check what's in the board right now
		//Winning conditions:
		let winningCombos = [
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
			[0, 1, 2],
		]
		console.log(winningCombos)

		// check if any of the winning conditions have been met
		// conditional that compares winningCombos to [squares] index
		winningCombos.map((value) => {
			let { a, b, c } = value
			console.log(a, b, c)
		})

		// if game won, you can't continue to play the game
		// if no more squares available, show a notice that the game has ended

		return console.log(winningCombos)
	}
	//  restart game method with button
	restartGame = () => {
		// set state back to original state
		this.setState({
			squares: Array(9).fill(null),
			currentPlayer: 'x',
			winner: null,
		})
		this.winning()
	}

	render() {
		const { squares } = this.state

		return (
			<React.Fragment>
				<h1>Tic Tac Toe</h1>
				<div id='gameboard'>
					{squares.map((value, index) => {
						return (
							<Square
								value={value}
								key={index}
								index={index}
								handleGamePlay={this.handleGamePlay}
							/>
						)
					})}
				</div>
				{/* button : restart game, uses restart game method */}
				<button onClick={this.restartGame}> Restart Game </button>
			</React.Fragment>
		)
	}
}
export default App
