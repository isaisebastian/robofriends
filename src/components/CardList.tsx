import React from 'react';
import Card from './card';
import { IRobot } from '../containers/App';

const CardList = ({ robots } : { robots: Array<IRobot> }) => {
	const cardsArray = robots.map((user, i) => {
		return (<Card 
		key={robots[i].id} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		/>
	);
	})
	return(
	<div> 
    		{cardsArray}
    	</div>
	);
}

export default CardList;
