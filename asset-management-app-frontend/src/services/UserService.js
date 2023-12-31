import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  createUsers(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  getUserById(userId) {
    return axios.get(USER_API_BASE_URL + "/" + userId);
  }

  updateUser(user, userId) {
    return axios.put(USER_API_BASE_URL + "/" + userId, user);
  } 

  deleteUser(userId) {
    return axios.delete(USER_API_BASE_URL + '/' + userId);
  }
  
  loginUser(username, password) {
    return axios.post(USER_API_BASE_URL + "/login", {
      username,
      password,
    });
  }

}

export default new UserService();
