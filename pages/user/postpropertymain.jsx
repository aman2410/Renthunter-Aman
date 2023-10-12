import React from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import Sidenav from "../components/sidenavigation";
import Footer from "../components/footer";
import styles from "./profile.module.css";
import PostProperty from "../components/POSTPROPERTY";
const PostPropertyMain = () => {
    return (  
      
      <>
      <div>   
        <Extranav/>   
        <Navbar/>
        

    <div className={styles.main}>
        <PostProperty/>
       
      
    </div>
    </div>
<Footer/>    
        </>

    );
  }
  export default PostPropertyMain;
  