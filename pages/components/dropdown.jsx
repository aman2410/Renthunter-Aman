import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './postproperty.module.css';

const Dropdown = () => {
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
        Post Properties
      </button>
      {isOpen && (
          <div className={styles['dropdown-content']}>
          <ul className={styles['dropdown-list']}>
            <li><Link href="/user/home/postprop">Home</Link></li>
            <li><Link href="/user/PG/postprop">Paying Guest</Link></li>
            <li><Link href="/user/flat-apartments/postprop">Apartment</Link></li>
            <li><Link href="/user/office/postprop">Office Space</Link></li>
            <li><Link href="/user/Shops/postprop">Shops</Link></li>
            <li><Link href="/user/warehouse/postprop">Warehouse/Godown</Link></li>
            <li><Link href="/user/daily_rental/postprop">Special Rentals</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
