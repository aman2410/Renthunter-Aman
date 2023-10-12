// pages/Definefacings.jsx

import React, { useEffect, useState } from 'react';
import styles from './../masters/style/define.module.css';
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const Definefacings = () => {
  const [facings, setFacings] = useState([]);
  const [facingType, setFacingType] = useState('');

  useEffect(() => {
    // Fetch data from the API route
    async function fetchFacings() {
      try {
        const response = await fetch('/api/facings');
        if (response.ok) {
          const data = await response.json();
          setFacings(data);
        } else {
          console.error('Error fetching facings:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching facings:', error);
      }
    }

    fetchFacings();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the API route to insert the facing type
      const response = await fetch('/api/facings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ facingType }), // Use the correct field name
      });

      if (response.ok) {
        // Refresh the list of facings after a successful submission
        // setFacings();
        setFacingType(''); // Clear the input field
      } else {
        console.error('Error submitting facing:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting facing:', error);
    }
  };

  return (
    <>
      <Extranav />
      <Adminnavbar />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h1>Define Facing Types</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputtype}>
              <label htmlFor="facingtype">Facing Type</label>
              <input
                type="text"
                id="facingtype"
                value={facingType}
                onChange={(e) => setFacingType(e.target.value)}
              />
            </div>
            <div>
              <div className={styles.checkboxcontainer}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Click to Enable</label>
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Update Facing Type
          </button>
        </div>
        <div className={styles.carddetails}>
          <h1>Facing Types Details</h1>
          <div className={styles.showsearch}>
            <div>
              <label htmlFor="showInput">Show</label>
              <select>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="searchInput">Search</label>
              <input type="text" id="searchInput" />
            </div>
          </div>
          <div className={styles.table_container}>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Facing Type</th>
                  <th>Enable/Disable</th>
                </tr>
              

              <tbody>
                {facings.map((facing, index) => (
                  <tr key={facing.id}>
                    <th>{index + 1}</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                    <th>{facing.facings}</th>
                    <th>Enable/Disable Checkbox</th>
                  </tr>
                ))}
              </tbody>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Definefacings;
