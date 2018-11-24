import React from 'react';

const Cell = ({ populated }) => (
	<div className={`cell ${ populated ? 'populated' : '' }`}>
	</div>
	)

export default Cell;