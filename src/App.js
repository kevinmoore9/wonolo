import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getAuthToken, getJobs } from './app/util';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authToken: null,
      jobs: null
    }
  }
  async authenticate() {
    let token;
    try {
      token = await getAuthToken();
    } catch(e) {
      console.log(e);
    }

    this.setState({authToken: token});
    this.fetchJobs({token: token});
  }
  async fetchJobs(params) {
    let jobs;
    try {
      jobs = await getJobs(params);
    } catch(e) {
      console.log(e);
    }
    this.setState({jobs: jobs});
  }

  componentWillMount() {
    this.authenticate();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.jobs === null) {
      return false;
    }
    return true;
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
