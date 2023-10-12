import React from "react";
import Link from "next/link";
import styles from "./extranav.module.css";

const Extranav = () => {
    return (    
        <div className='container'>    
        <div className={styles.extranav}>
            <ul className={styles.extra}>
              <img src="/call.png"></img>
              <li>+91 76100 65100</li>
              <img src="/mail.png"></img>
              <li>contactus@renthunter.in</li>
            </ul>
            <div className={styles.tabs}>
            <Link href='../user/changepass' id = {styles.cp}><h1>Change password</h1></Link>
            <Link href='../user/signin' id = {styles.logout}><h1>Logout</h1></Link>
            
        </div>

        </div>
        </div>

    );
  }
  export default Extranav;
  

// This is the code for extranav