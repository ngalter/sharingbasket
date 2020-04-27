import axios from "axios";
const BASEURL = "https://api.data.charitynavigator.org/v2/Organizations?";
const APP_KEY = process.env.REACT_APP_APP_KEY;
const APP_ID = process.env.REACT_APP_APP_ID;
const category = "food+pantry";
const resultCount = 8;

export default {
  getPantries(inState, inCity) {
    let url = `${BASEURL}app_id=${APP_ID}&app_key=${APP_KEY}&pageSize=${resultCount}&search=${category}&state=${inState}&city=${inCity}`
    return axios.get(url);
  },
};
