import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../dropdown.module.css';

const REPORTS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(true);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button className={styles['dropdown-button']} onClick={toggleDropdown}>
        Reports
      </button>
      {isOpen && (

      
        <div className={styles['dropdown-content']}>


        <ul className={styles['dropdown-list']}>
          <li><Link href="/admin/reports/Contactownerreport">Contact Owner Report</Link></li>
            <li><Link href="/admin/reports/Getuserdetails">Get User Details</Link></li>
            <li><Link href="/admin/reports/Propertyreported">Property Reported</Link></li>
            <li><Link href="/admin/reports/Getinvoice">Get Invoice</Link></li>
            <li><Link href="/admin/reports/Scratchcarddetails">Scratch Card Details</Link></li>
            <li><Link href="/admin/reports/Specialofferdetails">Special Offer Details</Link></li>
            <li><Link href="/admin/reports/ReportonPropertyCount">Report on Property Count</Link></li>
            <li><Link href="/admin/reports/ReportonRegisteredProperty">Report on Register Property</Link></li>




          </ul>

        </div>
      )}
    </div>
  );
};

export default REPORTS;
