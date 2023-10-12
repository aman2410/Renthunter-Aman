import React, { useState } from "react";
import Link from "next/link";
import styles from "./signup.module.css";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false); // State to track success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/signup", formData);
      if (response.status === 200) {
        console.log("User signed up successfully");
        setSuccess(true);
      } else {
        console.error("Error occurred while signing up");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <><div className={styles.containerbg}>
      <div className={styles.containerss}>
        <div className={styles.firsthead}>
          <img src="/home.png" alt="Home" />
          <h1>CREATE YOUR ACCOUNT AND STAY WITH US </h1>
        </div>
        <div className={styles.input}>
          <label htmlFor="name">Name</label>
          <input type="text"
            id="name"
            name="name"
            onChange={handleInputChange} />

          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" id="mobile" name="mobile" onChange={handleInputChange} />

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={handleInputChange} />

          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" onChange={handleInputChange} />

          {/* <label htmlFor="mobile">Confirm Password</label><input type="text" id="password" /> */}
          </div>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">I agree to Terms and Conditions</label>
        </div>
        <div className={styles.bttn}>
          <button onClick={handleSubmit}>Create Account</button>
        </div>
        <div className={styles.info}>
          <h1>Back to</h1>
          <Link href="./signin">
            <h1>Sign in</h1>
          </Link>
        </div>
        {success && <h1>Done</h1>} {/* Render success message */}
      </div>
    </div></>
  );
};

export default Signup;
  