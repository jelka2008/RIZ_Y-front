import React from 'react';

const API_MAP = 'AIzaSyBczdJRQhuvej7Jw2WPCLdl3pYcwvi6dTs'

class Maps extends React.Component {
	
	initMap = async (e) => {
		e.preventDefault();
		
		fetch (`https://maps.googleapis.com/maps/api/js?key=${API_MAP}&callback=initMap"`);

	}
	
	render() {
		return (
			<div>
			
			
			</div>
		);
	}
}

export default Maps;