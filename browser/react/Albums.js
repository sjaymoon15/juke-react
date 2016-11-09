import React from 'react';
import ReactDOM from 'react-dom';


export default class Albums extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="col-xs-10">
				<h3>Albums</h3>
			  <div className="row">
			  	{this.props.albums.map((album) => 
				    <div key={album.id} className="col-xs-4">
				      <a onClick={()=> this.props.handleClick(album)} className="thumbnail" href="#">
				        <img src={album.imageUrl} />
				        <div className="caption">
				          <h5>
				            <span>{album.name}</span>
				          </h5>
				          <small>{album.songs.length}</small>
				        </div>
				      </a>
				    </div>
			  	)}
			  </div>
			</div>

		)
	}
}

