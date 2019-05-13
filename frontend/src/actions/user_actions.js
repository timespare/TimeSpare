import * as UserAPIUtil from "../util/user_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return ({
    type: REMOVE_ERRORS
  })
}

export const login = user => dispatch =>
  UserAPIUtil.login(user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      UserAPIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    });

export const signup = user => dispatch =>
  UserAPIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.response.data))
  );

// export const logout = () => dispatch =>
//   UserAPIUtil.logout().then(_user => dispatch(logoutCurrentUser()));

export const logout = () => dispatch => {
  // Remove the token from local storage
  localStorage.removeItem("jwtToken");
  // Remove the token from the common axios header
  UserAPIUtil.setAuthToken(false);
  // Dispatch a logout action
  dispatch(logoutCurrentUser());
};
