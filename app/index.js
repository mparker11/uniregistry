import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

ReactDOM.render(
    <div className="container">
        {Routes}
    </div>,
    document.getElementById('app')
);
