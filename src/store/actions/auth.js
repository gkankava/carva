import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token) {
  setTokenHeader(token);
}

export function logOut() {
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function authUser(userData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall("POST", `/api/auth/signin`, userData)
        .then(data => {
          localStorage.setItem("jwtToken", data.token);
          setAuthorizationToken(data.token);
          dispatch(setCurrentUser(data.username));
          dispatch(removeError());
          resolve();
        })
        .catch(err => {
          dispatch(addError(err.message));
          reject();
        });
    });
  };
}
