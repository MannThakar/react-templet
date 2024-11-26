import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getApi = (endpoint) => {
  return axios
    .get(BASE_URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};

export const postApi = (endpoint, reqBody) => {
  return axios
    .post(BASE_URL + endpoint, reqBody, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
};
