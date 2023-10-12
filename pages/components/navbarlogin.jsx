// React Code
import React from "react";
import styles from './nav.module.css';
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbarlogin = () => {
    return (
        <nav className={styles.Navbar}>

            <input id={styles.nav_toggle} type="checkbox" className={styles.nav_toggle} />

            <label htmlFor={styles.nav_toggle} className={styles.icon_burger}>
                
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </label>

            <img src="/Logo.jpg" alt="Website Logo" />

            <ul className={`${styles.links} ${styles.mobileMenu}`}>
                <Link href="./user/signin"><li>Home</li></Link>
                {/* <Link href="./user/signin"><li>My Profile</li></Link> */}
                <Link href="./user/signin"><li>Post Properties</li></Link>
                <Link href="./user/contact"><li>Contact</li></Link>
                <Link href="./user/aboutus"><li>About Us</li></Link>
                <Link href="./user/gallery"><li>Gallery</li></Link>
            </ul>
        </nav>
    );
}

export default Navbarlogin;
