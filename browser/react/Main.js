
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import axios from 'axios';

export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {albums: []}
	}

	render() {
		console.log(this.state.albums)
		return (
			<div id="main" className="container-fluid">
				<div className="col-xs-2">
					<Sidebar />
				</div>
				<Albums albums={this.state.albums}/>
				<Footer />
			</div>
		)
	}
	componentDidMount(){
		axios.get('/api/albums')
		.then(res => res.data)
		.then((data) => this.setState({albums: data}))
		.then(err => console.error(err))
	}
} 

