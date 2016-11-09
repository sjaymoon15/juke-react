
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Albums from './Albums';
import SingleAlbum from './SingleAlbum';
import axios from 'axios';

export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {albums: [], selectedAlbum: {}};
		
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(album){
		axios.get('/api/albums/' + album.id)
		.then(res => res.data)
		.then(data => {
			console.log(data);
			this.setState({selectedAlbum: data})
		})
	}
	render() {
		// console.log(this.state.albums)
		return (
			<div id="main" className="container-fluid">
				<div className="col-xs-2">
					<Sidebar />
				</div>
				<SingleAlbum selectedAlbum = {this.state.selectedAlbum} />
				<Albums handleClick={this.handleClick} albums={this.state.albums}/>
				
				<Footer />
			</div>
		)
	}
	componentDidMount(){
		axios.get('/api/albums')
		.then(res => res.data)
		.then(data => this.setState({albums: data}))
		.then(err => console.error(err))
	}
} 

