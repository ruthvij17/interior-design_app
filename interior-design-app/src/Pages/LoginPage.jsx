import React, { useState, useContext, useEffect } from "react";
import styles from "../LoginPageCss/LoginPage.module.css";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../Context/UserProvider";

const LoginPage = () => {
  let user = useContext(userContext);
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    u_id: "",
  });

  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to the login page
    navigate("/home");
  };
  const handleNavigate1 = () => {
    // Navigate to the login page
    navigate("/register");
  };

  useEffect(() => {
    user.updateUser(userDetails);
  }, [userDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., send data to the server)
    try {
      let response = await axios.post(
        "http://localhost:8080/api/user/login",
        userDetails
      );
      if (response.status == 200) {
        setUserDetails({ ...userDetails, u_id: response.data.u_id });
        // console.log(response.data.u_id);
        handleNavigate();
      } else alert(response.data.msg);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const handleAdmin = () => {
    setUserDetails({
      username: "admin",
      password: "admin",
    });
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
          <button onClick={handleAdmin}>
            <a className="button" href="#">
              Admin Credentials
            </a>
          </button>
          <br />
          <button
            onClick={handleNavigate1}
            className="py-2 px-4 rounded mx-auto block text-white"
          >
            Don't have an account?{" "}
            <span className="text-blue-400 underline hover:text-blue-400">
              Sign up
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
