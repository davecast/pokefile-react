import axios from "axios";

export default function request(url) {
  return axios.request({
    method: "GET",
    url,
  });
}
