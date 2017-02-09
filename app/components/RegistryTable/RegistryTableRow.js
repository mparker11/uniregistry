import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import './styles.css';

export default class RegistryTableRow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let domain = this.props.domain;
		return (
			<tr>
				<td><Link to={`/details/${domain.id}`} className="domain-link">{domain.domain}</Link></td>
				<td className="uniregistry-cell">{ this.props.isRegistry ? <Glyphicon glyph="ok" className="checkmark" /> : ''}</td>
				<td>{ this.props.domain.price }</td>
			</tr>
		)
	}
}