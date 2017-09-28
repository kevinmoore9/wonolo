/* eslint-disable no-undef */

export const populateMap = (jobs, map) => {
    for (var i = 0; i < jobs.length; i++) {
      var coords = jobs[i];
      var latLng = new google.maps.LatLng(coords[0],coords[1]);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
}
