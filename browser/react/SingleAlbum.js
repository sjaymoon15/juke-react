import React from 'react';
import ReactDOM from 'react-dom';

export default class SingleAlbum extends React.Component {
	render(){
		if(!this.props.selectedAlbum){
			return <div>select an album</div>
		}
		return (
			<div className="album col-xs-10">
			  <div>
			    <h3>{this.props.selectedAlbum.name}</h3>
			    <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=IshouldBEanIMAGE&w=300&h=300" className="img-thumbnail" />
			  </div>
			  <table className='table'>
			    <thead>
			      <tr>
			        <th></th>
			        <th>Name</th>
			        <th>Artists</th>
			        <th>Genre</th>
			      </tr>
			    </thead>
			    <tbody>
			    </tbody>
			  </table>
			</div>
		)
	}
}
			    	// {this.props.selectedAlbum.songs.map((song)=> {
				    //   <tr>
				    //     <td>
				    //       <button className="btn btn-default btn-xs">
				    //         <span className="glyphicon glyphicon-play"></span>
				    //       </button>
				    //     </td>
				    //     <td>{song.name}</td>
				    //     <td>{song.artists}</td>
				    //     <td>{song.genre}</td>
				    //   </tr>			    		
			    	// })}