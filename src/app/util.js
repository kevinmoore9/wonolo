export const getAuthToken = () => (
  fetch('http://api.wonolo.com/api_v2/authenticate?api_key=pk_live_x4jAaDx1kQykKKzTp2fg&secret_key=sk_live_kDfup8NWU8dJ8KoAHrT2', {
    method: 'POST',
  }).then(res => {
    return res.text();
  }).then(txt => {
    return JSON.parse(txt).token;
  })
)

export const getJobs = (params) => (
  fetch(createQueryString('http://api.wonolo.com/api_v2/job_requests', params), {
    method: 'GET',
  }).then(res => {
    return res.text();
  }).then(txt => {
    return JSON.parse(txt);
  })
)

function createQueryString(url, params) {
  url += "?";
  url += Object.keys(params).map(key => (
    encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  )).join('&')
  return url;
}

// export const initMap = () => {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }
