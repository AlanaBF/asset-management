import "./App.css";
import ListUserComponent from "./components/User/ListUserComponent";
import CreateUserComponent from "./components/User/CreateUserComponent";
import UpdateUserComponent from "./components/User/UpdateUserComponent";
import Home from "./pages/Home/Home";
import Finances from "./pages/Finances/Finances";
import AddExpenses from "./components/MonthlyExpenses/AddExpense";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from "./components/LoginButton";
import Footer from "./components/FooterComponent";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <div className="page-structure">
        <Navbar />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/add-expense" element={<AddExpenses />} />
            <Route path="/users" element={<ListUserComponent />} />
            <Route path="/add-user" element={<CreateUserComponent />} />
            <Route
              path="/update-user/:userId"
              element={<UpdateUserComponent />}
            />
          </Routes>
        ) : (
          <LoginButton />
        )}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
