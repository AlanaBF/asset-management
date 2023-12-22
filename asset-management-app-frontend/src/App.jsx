
import "./App.css";
import ListUserComponent from "./components/User/ListUserComponent";
import CreateUserComponent from "./components/User/CreateUserComponent";
import UpdateUserComponent from "./components/User/UpdateUserComponent";
import Home from "./pages/Home/Home";
import Finances from "./pages/Finances/Finances";
import Login from "./components/Login/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddExpenses from "./components/MonthlyExpenses/AddExpense";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Wrap the private routes in a parent route */}
        <Route element={<PrivateRoutes />}>
          {/* Use <Outlet /> to render nested routes */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/add-expense" element={<AddExpenses />} />
          <Route path="/users" element={<ListUserComponent />} />
          <Route path="/add-user" element={<CreateUserComponent />} />
          <Route path="/update-user/:userId" element={<UpdateUserComponent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
