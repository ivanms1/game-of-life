import React, { Component } from 'react';

import Cell from './Cell';

class Board extends Component {

	createBoard() {
		let state = false;

		for(let i = 0; i < 400; i++) {

			if(Math.floor(Math.random() * 10) === 5) {
				state = true;

				this.props.populated.push(i)

			}

			this.props.board.push(<Cell populated={state}
										key={i}
										position={i}/>)
			state = false;
		}

		return this.props.board;
	}

	render() {
		return (
			<div className="board">
				{this.createBoard()}
			</div>
		);
	}
}


export default Board