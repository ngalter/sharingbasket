import axios from "axios";

export default {
// -- get pantry list from charity navigator external API 
  getPantries(state, city) {
    const pantrydata = { state, city }
    return axios.post("/getpantries", pantrydata);
  },
  getSignup(email, password) {
    const logindata = { email, password }
    return axios.post("/api/signup", logindata);
  },
  getLogin(email, password) {
    const logindata = { email, password }
    return axios.post("/api/login", logindata);
  },
  getLogout() {
    console.log("api")
    return axios.get("/logout");
  },
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  getUserInfo: function () {
    return axios.get("/api/user_data");
  },
  getDonates: function (id) {
    console.log("ID:",id)
    return axios.get("/api/donates/"+ id);
  },
  saveDonates: function (item, qty, UserId, ) {
    const donateData = { item, qty, UserId }
    return axios.post("/api/donates", donateData);
  },
  // - Get Pantry wish list from mysql database routing 
  getWishes: function () {
    return axios.get("/api/wishes");
  }
};
