import axios from "axios";

export const login = data => {
  return axios.post("/api/users/login", data);
};

export const signup = data => {
  return axios.post("/api/users/register", data);
};

export const logout = () => {
  return axios.delete("/api/users/logout");
};

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// TODO: check the incoming data keys.
export const rateUser = data => {
  return axios.patch(`api/users/${data.id}/rate`, data);
};

export const fetchAnotherUser = id => {
  return axios.get(`api/users/${id}`);
};
