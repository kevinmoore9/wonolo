import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { fetchJob, fetchJobs } from './home/actions';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


window.fetchJob = fetchJob;
window.fetchJobs = fetchJobs;
