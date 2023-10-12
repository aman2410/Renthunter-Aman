import React, { useState } from "react";
import styles from './adminnav.module.css';
import Link from "next/link";
import MASTERS from "./admincomponent/masters";
import SETTINGS from "./admincomponent/settings";
import REPORTS from "./admincomponent/reports";

const Adminnavbar = () => {
    // Add a state variable to track the menu toggle
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (    
        <nav className={styles.Navbar}>
            <input
                id={styles.nav_toggle}
                type="checkbox"
                className={styles.nav_toggle}
                checked={menuOpen} // Set checked state based on menuOpen
                onChange={toggleMenu} // Toggle the menu when clicked
            />
            <label htmlFor={styles.nav_toggle} className={styles.icon_burger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </label>

            <img src="/Logo.jpg" alt="Website Logo" />

            <div className={`${styles.links} ${styles.mobileMenu}`} style={{ display: menuOpen ? "block" : "none" }}>
                <Link href="/admin/adminhome"  id = {styles.Home}>Home</Link>
                <MASTERS />
                <SETTINGS />
                <REPORTS />
            </div>
        </nav>
    );
}

export default Adminnavbar;
