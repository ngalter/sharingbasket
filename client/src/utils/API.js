import axios from "axios";

export default {

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
    // Gets all users
    getPantries: function() {
      return axios.get("/api/pantries");
    },
    // Gets the User with the given id
    getPantry: function(id) {
      return axios.get("/api/pantries/" + id);
    },
    // Deletes the User with the given id
    deletePantry: function(id) {
      return axios.delete("/api/pantries/" + id);
    },
    // Saves a book to the database
    savePantry: function(pantryData) {
      return axios.post("/api/pantries", pantryData);
    }
};
