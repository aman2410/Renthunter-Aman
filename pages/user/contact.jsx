import React, { useEffect } from "react";
import Link from "next/link";
import Extranav from "../components/extranav";
import Navbar from "../components/navbar";
import styles from "./contact.module.css";
import { useRouter } from "next/router";
const Contact = () => {
    const router = useRouter();
    const { scrollToTop } = router.query;
  
    useEffect(() => {
        if (scrollToTop === "true") {
          const navbarHeight = document.getElementById("navbar").clientHeight;
          window.scrollTo({ top: navbarHeight, behavior: "smooth" });
        }
      }, [scrollToTop]);
    
        
return ( 

<>
<div id="contact-us">
            <Extranav />
            <Navbar /> {/* Render the Login component */}
</div>
        
<div className={styles.firsthead}>
                <h1>Send You Message</h1>
            <div className={styles.input}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />

                    <label htmlFor="Email">Email</label>
                    <input type="text" id="Email" />

                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="text" id="mobile" />



                    <label htmlFor="message">Message</label>
                    <input type="text" id="message" />

                    <button>Submit</button>

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
        
</div>
</>




    );
  }
  export default Contact;
  