/* eslint-disable no-undef */

import React from 'react';
import { populateMap } from './util';


class Map extends React.Component {
  constructor(props){
    super(props);
    this.coords = {lat: 39.8283, lng: -98.5795};
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: this.coords
    });

    this.map.setCenter(this.coords);
  }

  shouldComponentUpdate(newProps, newState) {
    if (newProps === this.props) {
      return false;
    }
    return true;
  }

  render() {
    if (this.props.jobs) {
      populateMap(this.props.jobs.map(tup => [tup[1], tup[2]]), this.map);
    }
    return(
      null

    )
  }
}

export default Map;
