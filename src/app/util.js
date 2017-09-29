export const getAuthToken = () => (
  fetch('https://api.wonolo.com/api_v2/authenticate?api_key=pk_live_x4jAaDx1kQykKKzTp2fg&secret_key=sk_live_kDfup8NWU8dJ8KoAHrT2', {
    method: 'POST',
  }).then(res => {
    return res.text();
  }).then(txt => {
    return JSON.parse(txt).token;
  })
)

export const getJobs = (params) => (
  fetch(createQueryString('https://api.wonolo.com/api_v2/job_requests', params), {
    method: 'GET',
  }).then(res => {
    return res.text();
  }).then(txt => {
    return JSON.parse(txt);
  })
)

export const filterJobs = (jobs, locationFilter, typeFilter) => {
  let zip = { 'NY': 1, 'NJ': 0, 'CA': 9 };
  let result = jobs;
  if (typeFilter) {
    result = result.filter(request => (request.category === typeFilter));
  }
  if (locationFilter) {
    result = result.filter(request => (request.zip.split('')[0] == zip[locationFilter]));
  }
  return result;
}

function createQueryString(url, params) {
  url += "?";
  url += Object.keys(params).map(key => (
    encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  )).join('&')
  return url;
}
