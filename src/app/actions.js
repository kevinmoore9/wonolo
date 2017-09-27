import * as APIUtil from './util';

export const RECEIVE_AUTH_TOKEN = 'RECEIVE_AUTH_TOKEN';

export const authenticate = token => {
  return {
    type: RECEIVE_AUTH_TOKEN,
    token
  };
};

export const receiveJobs = (jobs) => {
  return {
    type: RECEIVE_JOBS,
    jobs,
  };
};

export const deposit = params => (dispatch) => {
  return (APIUtil.deposit(params)
    .then(user => dispatch(receiveCurrentUser(user)))
  );
};
