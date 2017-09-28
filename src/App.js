import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './map/map.js';
import Filter from './filter/filter.js';
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
    this.fetchJobs({token: token, state: "draft"});
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
    var locations = this.state.jobs ? this.state.jobs.job_requests.map(request => ([request.id, request.latitude, request.longitude])) : null;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Filter />
        <Map jobs={locations}/>
      </div>
    );
  }
}

export default App;
