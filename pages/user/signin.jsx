// for import only

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";


const Signin = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/signin", formData);
      if (response.status === 200) {
        const userRole = response.data.role;
        
        // Redirect based on user role
        if (userRole === "admin") {
          window.location.href = "/admin/adminhome"; // Redirect to admin home
        } else if (userRole === "user") {
          window.location.href = "/user/userhome"; // Redirect to user home
        }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

    return (    
<div className="containerbg">
  <div className="containerbox"> 
        
       <div className="firsthead">
       <img src="/home.png"></img>
       <h1>SIGN IN TO YOUR ACCOUNT </h1></div>
       <div className="input">
          <label htmlFor="mobile">Mobile Number</label>
          <input type="text" id="mobile" name="mobile" onChange={handleInputChange} />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleInputChange} />

          <div className="remember-forgot">
            <div className="remember">
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <h1 className="forgot">Forgot Password?</h1>
          </div>

          </div>
          <button className="btn" onClick={handleSignIn}>Sign In</button>
          
              
              <div className="info">
                <h1>Don't have an account yet?</h1>
                <Link href ='./signup'><h1>CREATE NOW</h1></Link>
              </div>
              </div> 
  </div>

    );
  }
  export default Signin;
  