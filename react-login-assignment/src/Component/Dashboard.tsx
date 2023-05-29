import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate = useNavigate();

  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/login/");
  };
  if (localStorage.getItem("Isauth") === "false") {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <h3>Welcome to your, {localStorage.getItem("uname")}</h3>
        <nav>
          <div>
            <>
              <nav className="grid col-8">
                <table>
                  <tbody>
                    <tr>
                      <th className="col">
                        <Link to="/dashboard/">Home</Link>
                      </th>
                      <th style={{ padding: "10px" }}>
                        <Link to="/clientDetails">Client</Link>
                      </th>
                      <th style={{ padding: "10px" }}>
                        <Link to="/userList">User</Link>
                      </th>
                      <th style={{ padding: "10px" }}>
                        <Link to="/about">About</Link>
                      </th>
                      <th style={{ padding: "10px" }}>
                        <Link to="/help">Help</Link>
                      </th>
                      <th style={{ padding: "10px" }}>
                        <Link to="/logout">Logout</Link>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </nav>
              <Outlet />
            </>
          </div>
        </nav>
      </div>
    );
  }
};

export default DashBoard;
