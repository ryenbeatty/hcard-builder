// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
import './css/base.scss';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';

ReactDOM.render(<Application />, document.getElementById('app'));
