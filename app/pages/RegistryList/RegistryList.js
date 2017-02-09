import React from 'react';
import ReactDOM from 'react-dom';
import H1 from '../../components/H1/H1';
import RegistryTable from '../../components/RegistryTable/RegistryTable';
import Domains from '../../domains.js';

export default class RegistryList extends React.Component { 
  	constructor(props) {
		super(props);
	}
	componentDidMount() {
        this.getDomains();
    }
    getDomains() {
		/*
			If we were hitting a server for data, it would be 
			here that I use the following using jQuery or axios:
			
			$.get('http://server.com/data/something').then(function(){
				//do more things with the data after this promise is fulfilled
			});
		*/
    }
	render() {
    	return (
			<div>
				<H1 title="Registry List"></H1>
				<RegistryTable domains={ Domains.all } />
			</div>
		)
  	}
}