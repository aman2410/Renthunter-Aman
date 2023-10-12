// React Code
import React from "react";
import styles from './postproptop.module.css';
import Link from "next/link";


const Dailyrentaltop = () => {
    return (
        <nav className={styles.Postpropertytop}>

            <ul className={styles.links}>

                <Link href="./specialrentalsdetails"><li>Special Rental Details</li></Link>

                <Link href="./rentdetails"><li>Rent Details</li></Link>

                <Link href="./amenities"><li>Ameneties</li></Link>

                <Link href="./pricing"><li>Pricing</li></Link>

                <Link href="./gallery"><li>Gallery</li></Link>

                <Link href="./rules"><li>Rules</li></Link>

                <Link href="./kyc"><li>KYC</li></Link>

                <Link href="./payment"><li>Payment</li></Link>

            </ul>
        </nav>
    );
}

export default Dailyrentaltop;
