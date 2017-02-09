import React from 'react';
import { Router, Route, hashHistory } from 'react-router'; //using hashHistory since I'm not configuring a server

import List from './pages/RegistryList/RegistryList';
import Details from './pages/RegistryDetails/RegistryDetails';

export default (
	<Router history={ hashHistory }>
		<Route path="/" component={ List }/>
		<Route path="/details/:id" component={ Details }/>
	</Router>
)
