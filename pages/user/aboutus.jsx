import React from "react";
import Link from "next/link";
import Extranav from "../components/extranav";
import Navbar from "../components/navbar";
import styles from "./aboutus.module.css";
const Aboutus = () => {
return (   
<>

<div id="about-us">
        <Extranav />
        <Navbar /> {/* Render the Login component */}
    </div>
    
    <div className={styles.maincontainer}>
            <img src="/loginbg.jpg"></img>

        
        <div className={styles.container}>


            <h1>About Us</h1>

            <p>
                Renthunter is a platform were you can find Home, PG, Flat Appartment, Commercial Space easily at your desired place, we provide hassel free environment for both owner and the tenant.
                As our tagline says 'step in through browsing" you can make a move by just entering the location to get various types of properties on your screen, with renthunter promo offer now owner can use a trial period of 30 days to get tenant faster than ever, our team will help you to get register with Renthunter incase you struct in filling form. Acti Go to
                Just drop a mail to contactus@renthunter.in or call +9176100 65100 you will get assistance within a minute with 24/7 support.
            </p>

        </div>

    </div>
</>
);
}
export default Aboutus;



// This is the updated React code for  users/aboutus  page