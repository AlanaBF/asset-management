import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListUserComponent from "./components/User/ListUserComponent";
import CreateUserComponent from "./components/User/CreateUserComponent";
import Home from "./pages/Home/Home";
import Finances from "./pages/Finances/Finances";

import {
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/users" element={<ListUserComponent />} />
        <Route path="/add-user" element={<CreateUserComponent />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

const Root = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        {" "}
        <FooterComponent />
      </div>
    </div>
  );
};

export default App;
