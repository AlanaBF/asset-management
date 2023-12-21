import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1";

class HomeDataService {
    
    getUserById(userId) {
        return axios.get(`${USER_API_BASE_URL}/users/${userId}`);
      }
   
}

export default new HomeDataService()