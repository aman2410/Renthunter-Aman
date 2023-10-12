import React from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import Sidenav from "../components/sidenavigation";
import Footer from "../components/footer";
import styles from "./profile.module.css";
const MyProfile = () => {
    return (  
      
      <>
      <div>   
        <Extranav/>   
        <Navbar/>
        

    <div className={styles.main}>
        <Sidenav/>
        <div className={styles.detail}>
                        <h1>Edit your Profile</h1>

                    <div className={styles.changecontainer}>
                    
                    <div className={styles.inputchangecontainer}>

                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />

                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="mobile" id="mobile" />
            
                        <button>Update Password</button>
                    </div>

                    
        </div>
    </div>
         
      
    </div>
    </div>
<Footer/>    
        </>

    );
  }
  export default MyProfile;
  