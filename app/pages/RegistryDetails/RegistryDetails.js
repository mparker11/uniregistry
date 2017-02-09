import React from 'react';
import ReactDOM from 'react-dom';
import Domains from '../../domains.js';

//components
import H1 from '../../components/H1/H1';
import RegistryForm from '../../components/RegistryForm/RegistryForm';

export default class RegistryDetails extends React.Component { 
	constructor(props) {
		super(props);
		console.log(props.params);
	}
  	render() {
    	return (
			<div>
				<H1 title="Registry Details"/>
				<RegistryForm domain={ Domains[this.props.params.id] } />
			</div>
		)
  	}
}