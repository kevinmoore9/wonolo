
export const authenticate = () => (
  fetch('http://api.wonolo.com/api_v2/authenticate?api_key=pk_live_x4jAaDx1kQykKKzTp2fg&secret_key=sk_live_kDfup8NWU8dJ8KoAHrT2', {
    method: 'POST',
    // headers: {
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json'
    // }
  }).then(res => res.json())
);

export const fetchJobs = (params, token) => (
  fetch(`http://api.wonolo.com/api_v2/jobs?token=${token}`, {
    method: 'GET',

  }).then(res => res.json())
)
