import React from "react";
import Link from "next/link";
import styles from "./extranav.module.css";

const Extranavlogin = () => {
    return (    
        <div className='container'>    
        <div className='extranav'>
            <ul className='extra'>
              <img src="/call.png"></img>
              <li>+91 76100 65100</li>
              <img src="/mail.png"></img>
              <li>contactus@renthunter.in</li>
            </ul>
            
            <Link href='/user/signin'><h1>Login</h1></Link>
        </div>
        </div>

    );
  }
  export default Extranavlogin;