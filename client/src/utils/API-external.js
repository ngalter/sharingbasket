import axios from "axios";

export default {

  getPantries(state, city) {
    const pantrydata = { state, city } 
    return axios.post("/getpantries", pantrydata);
  }
};
