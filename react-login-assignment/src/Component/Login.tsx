import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Alert1 from "./Alert1";

const Login = () => {
  const navigate = useNavigate();
  let [uname, setUname] = useState("");
  let [pwd, setPwd] = useState("");

  const doLogin = () => {
    if (uname === "" || pwd === "") {
      alert("username or password can't blank");
      return;
    }
    if (uname === "aman" && pwd === "aman") {
      localStorage.setItem("uname", uname);
      localStorage.setItem("Isauth", "true");
      navigate("/dashboard/");
    } else {
      ReactDOM.render(
        <Alert1>Login not successful try again...</Alert1>,
        document.getElementById("root")
      );
    }
  };
  const handleReset = () => {
    setUname("");
    setPwd("");
  };
  return (
    <div>
      <form>
        <center>
          <h3>Welcome to Login Page</h3>
          <br />
          <br />
        </center>
        <div className="row mb-3 col-8">
          <label htmlFor="userName" className="col-sm-2 col-form-label">
            UserName :
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="userName"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <br />
        </div>
        <div className=" col-8 row mb-3">
          <label htmlFor="userPass" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="userPass"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={doLogin}>
          Log in
        </button>
        &nbsp;&nbsp;
        <button type="submit" className="btn btn-primary" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};
export default Login;
