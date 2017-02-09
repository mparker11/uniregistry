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
		
		let domain = this.props.domain;
		this.state = {
			domainName: domain.domain,
			email: domain.registrant_email,
			price: parseFloat(domain.price / 100).toFixed(2)
		}
	} 
	validateDomainName() {
		//validate the domain name ends with a "." followed by letters
		let hasDNS = this.state.domainName.match(/\.[A-Za-z]+/) != null;
		
		if (hasDNS) {
			return 'success';
		}
		return 'error';
	}
	validateEmailAddress() {
		let isEmail = this.state.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null;
		
		if (isEmail) {
			return 'success';
		}
		return 'error';
	}
	validatePrice() {
		let isPriceFormat = this.state.price.match(/^\d+(\.\d{0,2})?$/) != null;
		
		if (isPriceFormat) {
			return 'success';
		}
		return 'error';
	}
	formValueChange(formElement, event) {
		this.setState({
			domainName: formElement === 'name' ? event.target.value : this.state.domainName,
			email: formElement === 'email' ? event.target.value : this.state.email,
			price: formElement === 'price' ? event.target.value : this.state.price
		});
	}
	render() {
		return (
			<Form horizontal>
		    	<FormGroup controlId="formDomainName" validationState={ this.validateDomainName() }>
		      		<Col componentClass={ControlLabel} sm={2}>Domain Name</Col>
		      		<Col sm={10}>
		        		<FormControl type="text" value={ this.state !== undefined && this.state.domainName } onChange={ this.formValueChange.bind(this, 'name') } />
		      		</Col>
		    	</FormGroup>
		    	<FormGroup controlId="formRegEmail" validationState={ this.validateEmailAddress() }>
		      		<Col componentClass={ControlLabel} sm={2}>Registrant Email</Col>
		      		<Col sm={10}>
		        		<FormControl type="email" value={ this.state !== undefined && this.state.email } onChange={ this.formValueChange.bind(this, 'email') } />
		      		</Col>
		    	</FormGroup>
		    	<FormGroup controlId="formPrice" validationState={ this.validatePrice() }>
		      		<Col componentClass={ControlLabel} sm={2}>Price</Col>
		      		<Col sm={10}>
		        		<FormControl type="text" value={ this.state !== undefined && this.state.price } onChange={ this.formValueChange.bind(this, 'price') } />
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