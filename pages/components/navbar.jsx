import React from "react";
import styles from './nav.module.css';
import Link from "next/link";

const Navbar = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Link href="/user/userhome"><li>Home</li></Link>
        <Link href="/user/myprofile"><li>My Profile</li></Link>
        <Link href="/user/postpropertymain"><li>Post Property</li></Link>
        
        
        <li><button onClick={() => scrollTo("contact_us")}>Contact Us</button></li>
        <li><button onClick={() => scrollTo("about-us")}>About Us</button></li>
        
        <Link href="/user/gallery"><li>Gallery</li></Link>
        {/* Add other menu items */}
      </ul>
    </nav>
  );
}

export default Navbar;
