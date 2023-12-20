import "./App.css";
import ListUserComponent from "./components/User/ListUserComponent";
import CreateUserComponent from "./components/User/CreateUserComponent";
import UpdateUserComponent from "./components/User/UpdateUserComponent";
import Home from "./pages/Home/Home";
import Finances from "./pages/Finances/Finances";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/users" element={<ListUserComponent />} />
        <Route path="/add-user" element={<CreateUserComponent />} />
        <Route path="/update-user/:userId" element={<UpdateUserComponent />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

