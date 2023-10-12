import React, { useEffect } from "react";
import Link from "next/link";
import Extranav from "../components/extranav";
import Navbar from "../components/navbar";
import styles from "./contact.module.css";
import { useRouter } from "next/router";
const Gallery = () => {
    
        
return ( 

<>
<div>
            <Extranav />
            <Navbar /> {/* Render the Login component */}
</div>
        
            <div className={styles.footer}>
            
            <div className={styles.social}>
                <img src="/fb.png"></img>
                <img src="/twitter.png"></img>              
                <img src="/linkedin.png"></img>
                <img src="/insta.png"></img>
                <img src="/top.png"></img>

                <Link href="contact2">
                          <img
                src="/top.png"
                alt="Scroll to Top"
                className={styles.scrollButton} /></Link>

          
            </div>
            

        </div>
        

</>




    );
  }
  export default Gallery;
  