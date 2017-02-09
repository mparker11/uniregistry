import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import Table from 'react-bootstrap/lib/Table';
import RegistryTableRow from './RegistryTableRow';
import './styles.css';

export default class RegistryTable extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Table striped hover>
					<thead>
						<tr>
							<th>Domain Name</th>
							<th className="uniregistry-cell">Uniregistry</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
					{
						_.map(this.props.domains, function(unique, i) {
							let dns = unique.domain.substring(unique.domain.lastIndexOf('.') + 1);
							let isRegistry = dns === 'cars' || dns === 'lol';
							
							return (
								<RegistryTableRow key={ i } domain={ unique } isRegistry={ isRegistry } />
							)
						})
					}
					</tbody>
				</Table>
			</div>
		)
	}
}