import React from "react";
import styles from'./side.module.css';
import Link from "next/link";

const Sidenav = () => {
    return (    
<><div className={styles.sidenavbar}>
        
        <div className={styles.container}>
        <ul>
            <Link href = "././userhome"><li>HOME</li></Link>
            <Link href = "././myproperties"> <li>MY PROPERTIES</li></Link>
            <Link href = "././myplan"><li>MY PLAN</li></Link>
            <Link href = "././myoffers"><li>MY OFFEERS</li></Link>
            <Link href = "././myrewards"><li>MY REWARDS</li></Link>
            <Link href = "././savedproperties"><li>SAVED PROPERTIES</li></Link>
        </ul>
        </div>
        </div>

        </>

    

    );
  }
  export default Sidenav;
  