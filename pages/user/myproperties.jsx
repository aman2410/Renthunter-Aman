import React from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import Sidenav from "../components/sidenavigation";
import Footer from "../components/footer";
import styles from "./profile.module.css";
const MyProperty = () => {
    return (  
      
      <>
      <div>   
        <Extranav/>   
        <Navbar/>
        

    <div className={styles.main}>
        <Sidenav/>

         
      
    </div>
    </div>
<Footer/>    
        </>

    );
  }
  export default MyProperty;
  