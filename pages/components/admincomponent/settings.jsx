import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../dropdown.module.css';

const SETTINGS = () => {
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
       Settings
      </button>
      {isOpen && (
        <div className={styles['dropdown-content']}>
          <ul className={styles['dropdown-list']}>
            <li><Link href="/admin/settings/Disablepropertytypes">Enable/Disable Property Types</Link></li>
            <li><Link href="/admin/settings/Disableproperties">Enable/Disable Properties</Link></li>
            <li><Link href="/admin/settings/Addgallery">Add Gallery</Link></li>
            <li><Link href="/admin/settings/Gstsettings">GST Settings</Link></li>
            <li><Link href="/admin/settings/Promocodesettings">Promo code Settings</Link></li>
            <li><Link href="/admin/settings/DefineScratchCards">Define Scratch Cards</Link></li>

          </ul>
        </div>
      )}
    </div>
  );
};
export default SETTINGS;
