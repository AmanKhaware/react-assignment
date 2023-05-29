import Login from "./Component/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Component/Dashboard";
import User from "./Component/User";
import AddUser from "./Component/AddUser";
import ClientDetails from "./Component/ClientDetails";
import UsersList from "./Component/UserList";
import Details from "./Component/Details";

function AppConfigRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="clientDetails" element={<ClientDetails />} />
          <Route path="user" element={<User />} />
          <Route path="userList" element={<UsersList />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default AppConfigRoutes;
