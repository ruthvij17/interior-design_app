import React, { useState } from "react";
import styles from "../LoginPageCss/LoginPage.module.css";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to the login page
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., send data to the server)
    console.log("Username:", username);
    console.log("Password:", password);
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <a className="button" href="home">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            submit
          </a>
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
