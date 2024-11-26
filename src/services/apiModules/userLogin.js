import { getApi, postApi } from "../apiMethods";

const LOGIN_API = {
  userLogin: (endpoint, reqBody) => postApi(endpoint, reqBody),
};

export default LOGIN_API;
