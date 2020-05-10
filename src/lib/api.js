import axios from "axios";

const baseUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/";

export function getTweet() {
  return axios.get(`${baseUrl}tweet/`);
}

export function postTweet(tweet, showErrorMessage, hideErrorMessage) {
  return axios
    .post(`${baseUrl}tweet`, tweet)
    .then(hideErrorMessage())
    .catch(function (error) {
      if (error.response) {
        showErrorMessage(error.response.data, error.response.status);
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
}
