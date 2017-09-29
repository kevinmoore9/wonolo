/* eslint-disable no-undef */
let MARKERS = [];

export const populateMap = (jobs, map) => {
  removeMarkers();
  for (var i = 0; i < jobs.length; i++) {
    var coords = jobs[i];
    var latLng = new google.maps.LatLng(coords[1],coords[2]);
    var marker = new google.maps.Marker({
      position: latLng,
      id: coords[0],
      map: map
    });
    marker.addListener('click', () => {
      launchModal(marker.id);
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

function launchModal(id) {
  let bg = $(document.getElementById('modal-bg'));
  let modal = $(document.getElementById('modal'));
  debugger
}

function closeModal() {

}
