import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListUserComponent from "./components/ListUserComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";

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
        <Route path="/" element={<ListUserComponent />} />
        <Route path="/users" element={<ListUserComponent />} />
        <Route path="/add-user" element={<CreateUserComponent />} />
        <Route path="/update-user/:userId" element={<UpdateUserComponent />} />
        <Route path="/delete-user/:userId" element={<ListUserComponent />} />
      
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
