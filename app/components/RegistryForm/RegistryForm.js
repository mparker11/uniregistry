import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import './styles.css';

export default class RegistryForm extends React.Component {
	constructor(props) {
		super(props);
	} 
	render() {
		let domain = this.props.domain;
		let price = parseFloat(parseInt(domain.price) / 100).toFixed(2);
		return (
			<Form horizontal>
		    	<FormGroup controlId="formDomainName">
		      		<Col componentClass={ControlLabel} sm={2}>Domain Name</Col>
		      		<Col sm={10}>
		        		<FormControl type="text" defaultValue={ domain.domain } />
		      		</Col>
		    	</FormGroup>
		    	<FormGroup controlId="formRegEmail">
		      		<Col componentClass={ControlLabel} sm={2}>Registrant Email</Col>
		      		<Col sm={10}>
		        		<FormControl type="email" defaultValue={ domain.registrant_email } />
		      		</Col>
		    	</FormGroup>
		    	<FormGroup controlId="formPrice">
		      		<Col componentClass={ControlLabel} sm={2}>Price</Col>
		      		<Col sm={10}>
		        		<FormControl type="text" defaultValue={ price } />
		      		</Col>
		    	</FormGroup>
		    	<FormGroup>
		      		<Col smOffset={2} sm={10}>
		        		<Link to="/"><Button className="save-button">Save Changes</Button></Link>
		        		<Link to="/" className="cancel-link">Cancel</Link>
		      		</Col>
		    	</FormGroup>
		  </Form>
		)
	}
}