import React, { Component } from 'react';
import './App.css';
import Map from './map/map.js';
import Filter from './filter/filter.js';
import { getAuthToken, getJobs, filterJobs } from './app/util';


class App extends Component {
  constructor() {
    super();
    this.state = {
      authToken: null,
      jobs: null,
      locationFilter: null,
      typeFilter: null
    }
    this.updateFilters = this.updateFilters.bind(this);
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
    jobs = filterJobs(jobs.job_requests, this.state.locationFilter, this.state.typeFilter);
    this.setState({jobs: jobs});
  }

  updateFilters(newFilters) {
    newFilters.flag = true;
    this.setState(Object.assign(this.state, newFilters));
    this.fetchJobs({token: this.state.authToken, state: "draft"});
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
    var locations = this.state.jobs ? this.state.jobs.map(request => ([request.id, request.latitude, request.longitude])) : null;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Wonolo Live Search Filtering</h1>
        </header>
        <Filter updateFilters={this.updateFilters}
                location={this.state.locationFilter}
                type={this.state.typeFilter}/>
        <Map jobs={locations} location={this.state.locationFilter}/>
      </div>
    );
  }
}

export default App;
