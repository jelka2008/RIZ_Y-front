import React from 'react';


const RES = props => (
	<form onSubmit={props.weatherMethod}>
		<input type='text' name='depart' placeholder='Отделение'/>
		<button>Отобразить</button>
	</form>
)

export default RES;