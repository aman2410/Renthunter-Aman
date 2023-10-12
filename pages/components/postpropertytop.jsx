// React Code
import React from "react";
import styles from './postproptop.module.css';
import Link from "next/link";


const Postpropertytop = () => {
    return (
        <nav className={styles.Postpropertytop}>

            <ul className={styles.links}>

                <Link href="./user/signin"><li>Home</li></Link>

                <Link href="./user/signin"><li>Rent Details</li></Link>

                <Link href="./user/signin"><li>Ameneties</li></Link>

                <Link href="./user/contact"><li>Pricing</li></Link>

                <Link href="./user/aboutus"><li>Gallery</li></Link>

                <Link href="./user/gallery"><li>Rules</li></Link>

                <Link href="./user/gallery"><li>KYC</li></Link>

                <Link href="./user/gallery"><li>Payment</li></Link>

            </ul>
        </nav>
    );
}

export default Postpropertytop;
