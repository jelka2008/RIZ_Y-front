import React from 'react';
import Info from './components/info';
import RES from './components/form';
import Maps from './components/maps';
import { YMaps, Map } from 'react-yandex-maps';

const API_MAP = 'AIzaSyBczdJRQhuvej7Jw2WPCLdl3pYcwvi6dTs'

class App extends React.Component {

	
	render() {
		return (
			<div className='row haupt'>
				<div className='col-sm-3 adress'>
					<Info />
					<div className='row dep'>
						<RES className='reps'/>
					</div>
				</div>
				<YMaps>
					<div className='col-sm-6'>
						<Map className='maps' defaultState={{center: [53.89, 27.56], zoom: 8 }} />
					</div>
				</YMaps>
				<div className='col-sm-3 info'>Блок сведений
					<div>Блок карты</div>		
				</div>
				
			</div>
		
/*			<div className='wrapper'>
				<div className='main'>
					<div className='col-sm-5 info'> 
						<Info />
					</div>
					<div className='col-sm-7 form'>
						<Form weatherMethod={this.gettiningWeather} />
						<Weather {...this.state}/>  //temp={this.state.temp}
					</div>
				</div>
			</div>*/
		);
	}
}

export default App;
