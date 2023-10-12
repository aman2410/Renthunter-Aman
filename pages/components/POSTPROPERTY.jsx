import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './postdrop.module.css';

const PostProperty  = () => {



  return (
<><div className={styles.sidenavbar}>
        
        <div className={styles.container}>
        <ul>
            <Link href = "././userhome"><li>Rent</li></Link>
            <Link href = "././myproperties"> <li>Lease</li></Link>
            <Link href = "././myplan"><li>Sale</li></Link>
            <Link href = "././myoffers"><li>Special Rental</li></Link>
            <Link href = "./home/multistepform/multi"><li>Home</li></Link>
            
        </ul>
        </div>
        </div></>


  )};


export default PostProperty;
