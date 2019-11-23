import axios from "axios";

export default axios.create({
  // baseURL: "http://eivu.herokuapp.com/api/v1/",
  baseURL: "http://localhost:3000/api/v1/",
  responseType: "json"
});