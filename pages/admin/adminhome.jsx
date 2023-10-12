import React from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import Adminnavbar from "../components/adminnav";
const Signin = () => {
    return (  
      
      <>
      <div>   
        <Extranav/>   
        <Adminnavbar/> {/* Render the Login component */}
      </div>
        </>

    );
  }
  export default Signin;
  