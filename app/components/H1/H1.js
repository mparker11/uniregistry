import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

export default class H1 extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<h1>{ this.props.title }</h1>
		)
	}
}