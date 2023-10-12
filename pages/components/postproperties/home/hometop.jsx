import React, { useState } from "react";
import styles from './postproptop.module.css';
import Link from "next/link";

const Hometop = () => {
  const buttonOptions = [
    { label: "Home", href: "./postprop" },
    { label: "Rent Details", href: "./rentdetails" },
    { label: "Amenities", href: "./amenities" },
    { label: "Pricing", href: "./pricing" },
    { label: "Gallery", href: "./gallery" },
    { label: "Rules", href: "./rules" },
    { label: "KYC", href: "./kyc" },
    { label: "Payment", href: "./payment" },
  ];

  const buttonsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentPage(Math.max(currentPage - 1, 0));
    } else if (direction === "right") {
      setCurrentPage(Math.min(currentPage + 1, buttonOptions.length - buttonsPerPage));
    }
  };

  const displayedButtons = buttonOptions.slice(
    currentPage,
    currentPage + buttonsPerPage
  );

  return (
    <nav className={styles.Postpropertytop}>
      <div className={styles.arrowContainer}>
        {currentPage > 0 && (
          <button className={styles.leftArrow} onClick={() => handleClick("left")}>
            {"<"}
          </button>
        )}
      </div>
      <div className={styles.sliderContainer}>
        <ul className={styles.links}>
          {displayedButtons.map((button, index) => (
            <li key={index}>
              <Link href={button.href}>{button.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.arrowContainer}>
        {currentPage < buttonOptions.length - buttonsPerPage && (
          <button className={styles.rightArrow} onClick={() => handleClick("right")}>
            {">"}
          </button>
        )}
      </div>
    </nav>
  );
}

export default Hometop;
