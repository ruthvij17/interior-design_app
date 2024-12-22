import React, { useState } from "react";
import styles from "../LoginPageCss/LoginPage.module.css";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to the login page
    navigate("/home");
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // Handle login logic here (e.g., send data to the server)
    // console.log("Username:", username);
    try {
      let response = await axios.post(
        "http://localhost:8080/api/user/login",
        userDetails
      );
      console.log(response.data);
      if (response.data.msg == "success") handleNavigate();
      else alert(response.data.msg);
    } catch {
      console.log("error");
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className={styles["login-box"]}>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles["user-box"]}>
            <input
              type="text"
              name="username"
              required
              value={userDetails.username}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label>Username</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              type="password"
              name="password"
              required
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label>Password</label>
          </div>
          <button onClick={handleSubmit}>
            <a className="button" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              submit
            </a>
          </button>
          <br />
          <button
            onClick={handleNavigate}
            className="py-2 px-4 rounded mx-auto block"
          >
            <p className="text-white hover:text-blue-400">Skip for now</p>
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
