import React, { useState } from "react";
import styles from "../LoginPageCss/LoginPage.module.css";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    id: "",
    username: "",
    password: "",
    address: "",
    phone: "",
    preference: "",
  });

  const navigate = useNavigate();

  const handleNavigate = () => {
    // Navigate to the login page
    navigate("/");
    alert("Registration successfull, Please Login");
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // Handle login logic here (e.g., send data to the server)
    console.log(userDetails);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/register",
        userDetails
      );
      if (response.data == "success") handleNavigate();
      else alert(response.data.msg);
    } catch {
      console.log("ERROR");
    }
  };

  return (
    <>
      <NavbarComponent />
      <div className={styles["login-box"]}>
        <h2>SIGN-UP</h2>
        <form>
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
              type="text"
              name="address"
              required
              value={userDetails.address}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label>Address</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              type="text"
              name="preference"
              required
              value={userDetails.preference}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label>Preference</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              type="number"
              name="phone"
              required
              value={userDetails.phone}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label>Phone Number</label>
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

          <button type="submit" onClick={handleSubmit}>
            <a className="button" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              submit
            </a>
          </button>
          <br />
        </form>
      </div>
    </>
  );
};

export default SignupPage;
