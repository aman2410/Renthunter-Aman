import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../dropdown.module.css';

const MASTERS  = () => {
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
      Masters
      </button>
      {isOpen && (
        <div className={styles['dropdown-content']}>
          <ul className={styles['dropdown-list']}>
            <li><Link href="/admin/masters/Defineteams">Define Internal Team</Link></li>
            <li><Link href="/admin/masters/Definetenanttype">Define Tenant Type</Link></li>
            <li><Link href="/admin/masters/Definebhk">Define BHK</Link></li>
            <li><Link href="/admin/masters/Definefurnishedtypes">Define Furnished Types</Link></li>
            <li><Link href="/admin/masters/Definefloors">Defines Floors</Link></li>
            <li><Link href="/admin/masters/Defineameneties">Define Amenities</Link></li>
            <li><Link href="/admin/masters/Defineservices">Define Services</Link></li>
            <li><Link href="/admin/masters/Definepaymentplans">Define Payment Plans</Link></li>
            <li><Link href="/admin/masters/Definefacings">Define Facings</Link></li>
            <li><Link href="/admin/masters/Definefoodservice">Define Food Service</Link></li>
            <li><Link href="/admin/masters/Definesharing">Define Sharing</Link></li>
            <li><Link href="/admin/masters/Definenearby">Define Near By</Link></li>
            <li><Link href="/admin/masters/Addstates">Define States</Link></li>
            <li><Link href="/admin/masters/Addcities">Define Cities</Link></li>
            <li><Link href="/admin/masters/Addareas">Define Areas</Link></li>
            <li><Link href="/admin/masters/Definerules">Define Rules</Link></li>
            <li><Link href="/admin/masters/Definespecialrentaltype">Define Rentals Types</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MASTERS;
