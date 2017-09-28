/* eslint-disable no-undef */
let MARKERS = [];

export const populateMap = (jobs, map) => {
  removeMarkers();
  for (var i = 0; i < jobs.length; i++) {
    var coords = jobs[i];
    var latLng = new google.maps.LatLng(coords[0],coords[1]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    MARKERS.push(marker);
  }
}

function removeMarkers(){
    for(let i=0; i < MARKERS.length; i++){
        MARKERS[i].setMap(null);
    }
    MARKERS = [];
}
