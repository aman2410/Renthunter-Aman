import React, { useState, useEffect } from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineFloor = () => {
  const [floorType, setFloorType] = useState('');
  const [floorTypes, setFloorTypes] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/floortypes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ floorType }),
      });

      if (response.ok) {
        // Floor type added successfully
        // Optionally, update the floor types list by fetching data again
        fetchFloorTypes();
      } else {
        console.error('Failed to add floor type');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchFloorTypes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/floortype');
      if (response.ok) {
        const data = await response.json();
        setFloorTypes(data);
      } else {
        console.error('Failed to fetch floor types data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Call the fetchFloorTypes function when the component mounts
  useEffect(() => {
    fetchFloorTypes();
  }, []);

  return (
    <>
      <Extranav />
      <Adminnavbar />

      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h1>Define Floor Types</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputtype}>
              <label htmlFor="floortype">Floor Type</label>
              <input
                type="text"
                id="floortype"
                value={floorType}
                onChange={(e) => setFloorType(e.target.value)}
              />
            </div>

            <div>
              <div className={styles.checkboxcontainer}>
                <input
                  type="checkbox"
                  id="checkbox"

                />
                <label htmlFor="checkbox">Click to Enable</label>
              </div>
            </div>
          </div>
          <button onClick={handleSubmit} className={styles.button}>
            Update Floor Type
          </button>
        </div>

        <div className={styles.carddetails}>
          <h1>Floor Types Details</h1>

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
                  <th>Floor Type</th>
                  <th>Enable/Disable</th>
                </tr>

                {floorTypes.map((floorType, index) => (
                  <tr key={floorType.id}>
                    <th>{index + 1}</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                    <th>{floorType.floor}</th>
                    <th>{floorType.enabled ? 'Enabled' : 'Disabled'}</th>
                  </tr>
                ))}

              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefineFloor;
