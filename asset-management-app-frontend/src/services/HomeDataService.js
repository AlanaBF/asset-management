import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/expenses";

class HomeDataService {
    
    getAllExpenses() {
        return axios.get(`${USER_API_BASE_URL}`);
      }
      getAllExpenseById() {
        return axios.get(`${USER_API_BASE_URL}/{id}`);
      }
      createExpense(expense) {
        return axios.post(`${USER_API_BASE_URL}`, expense);
      }
      updateExpense(expense, id) {
        return axios.put(`${USER_API_BASE_URL}/${id}`, expense);
      }
      deleteExpense(id) {
        return axios.delete(`${USER_API_BASE_URL}/${id}`);
      }
      getExpenseByMonth(month) {
        return axios.get(`${USER_API_BASE_URL}/month/${month}`);
      }
      getExpenseByYear(year) {
        return axios.get(`${USER_API_BASE_URL}/year/${year}`);
      }
      getExpenseByMonthAndYear(month, year) {
        return axios.get(`${USER_API_BASE_URL}/month/${month}/year/${year}`);
      }
      getExpenseByMonthAndYearAndCategory(month, year, category) {
        return axios.get(`${USER_API_BASE_URL}/month/${month}/year/${year}/category/${category}`);
      }
}

export default new HomeDataService()