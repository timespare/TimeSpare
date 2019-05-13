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

<<<<<<< HEAD

=======
export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
>>>>>>> master
