/* eslint-disable no-undef */
let MARKERS = [];

export const populateMap = (jobs, map, token) => {
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
      launchModal(marker.id, token);
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

async function launchModal(id, token) {
  let bg = $(document.getElementById('modal-bg'));
  bg.addClass('modal-background');
  let modal = $(document.getElementById('modal'));
  modal.addClass('modal');

  let job;
  try {
    job = await getJobInfo(id, {token: token});
  } catch(e) {
    console.log(e);
  }

  let exit = $('<div class="exit">X</div>');
  exit.click(() => {
    closeModal();
  });
  modal.append(`
    <h1 class='modal-title'>${job.job_request.category}</h1>
    <p class='modal-desc'>Employer: ${job.job_request.venue}</p>
    <p>Location: ${job.job_request.address}, ${job.job_request.zip}</p>
    <p>Hourly Rate: ${job.job_request.w2_hourly_rate ? job.job_request.w2_hourly_rate : 'N/A'}</p>
    `);
  modal.append(exit);
  // wage, category, description, address
}

function getJobInfo(id, params) {
  return(
  fetch(createQueryString(`https://api.wonolo.com/api_v2/job_requests/${id}`, params), {
    method: 'GET'
  }).then(res => {
    return res.text();
  }).then(txt => {
    // result = JSON.parse(txt);
    return JSON.parse(txt);
  }));
}

function closeModal() {
  let bg = $(document.getElementById('modal-bg'));
  bg.removeClass('modal-background');
  let modal = $(document.getElementById('modal'));
  modal.removeClass('modal');
  modal.empty();
}

function createQueryString(url, params) {
  url += "?";
  url += Object.keys(params).map(key => (
    encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  )).join('&')
  return url;
}
