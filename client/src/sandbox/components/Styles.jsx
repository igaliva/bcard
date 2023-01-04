import React from 'react';
import './styles.css';

const Styles = () => {
	const isGreen = true;
	return (
		<>
			<h1 style={{ color: 'red', backgroundColor: 'black' }}>one</h1>
			<h1
				style={
					isGreen
						? { color: 'green', backgroundColor: 'black' }
						: { color: 'red', backgroundColor: 'white' }
				}>
				two
			</h1>
			<h1 className="cursor">three</h1>
			<h1 className="blue">four</h1>
		</>
	);
};

export default Styles;
