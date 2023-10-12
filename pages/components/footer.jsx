import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
    return (    
          <div className={styles.footer}>
            
            <div className={styles.social}>
                <img src="/fb.png"></img>
            <img src="/twitter.png"></img>              
            <img src="/linkedin.png"></img>
            <img src="/insta.png"></img>
            </div>
            

        </div>
        

    );
  }
  export default Footer;
  