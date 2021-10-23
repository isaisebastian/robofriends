import React from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';

import Scroll from '../components/Scroll';

import './App.css';

export interface IRobot {
	name: string;
	id: number;
	email: string;
}

interface IAppProps{

}

interface IAppState{
	robots: Array<IRobot>;
	searchfield: string;
}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users => {
			this.setState({ robots: users });
		})

	}

	onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
		this.setState( {searchfield: event.currentTarget.value } );

	}

	render () : JSX.Element {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		} else {
			return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}
}

export default App;