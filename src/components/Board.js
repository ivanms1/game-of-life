import React, { Component } from 'react';

import Cell from './Cell';

class Board extends Component {

	render() {
		return (
			<div className="board">
				{
					this.props.board.map((cell, index) => <Cell
															key={index}
															populated={cell}/>)
				}
			</div>
		);
	}
}


export default Board