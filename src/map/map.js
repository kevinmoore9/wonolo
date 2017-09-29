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
    this.locationCoords = {
      "CA": {lat: 36.778259, lng: -119.417931},
      "NJ": {lat: 40.0583, lng: -74.4057},
      "NY": {lat: 40.7128, lng: -74.0059}
    }
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

    if (this.props.location) {
      this.map.panTo(this.locationCoords[this.props.location]);
      this.map.setZoom(6);
    }
    return(
      null

    )
  }
}

export default Map;
