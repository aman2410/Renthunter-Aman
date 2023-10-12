import React, { useState, useEffect } from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineNearby = () => {

  const [nearby, setNearBy] = useState('');

  const [nearbyname, setNearbyName] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/nearby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nearby }),
      });

      if (response.ok) {
        // Floor type added successfully
        // Optionally, update the floor types list by fetching data again
        fetchnearby();
      } else {
        console.error('Failed to add floor type');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchnearby = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/nearby');
      if (response.ok) {
        const data = await response.json();
        setNearbyName(data);
      } else {
        console.error('Failed to fetch floor types data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Call the fetchFloorTypes function when the component mounts
  useEffect(() => {
    fetchnearby();
  }, []);


  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
<div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Define Near By</h1>
        <div className={styles.inputContainer}>


        < div className={styles.inputtype}>
                <label htmlFor="nearbyname">Near by Name</label>
                <input
                type="text"
                id="nearbyname"
                value={nearby}
                onChange={(e) => setNearBy(e.target.value)}
              />
        </div>

        < div>
          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
          
          </div>
        
        </div>
        <button onClick={handleSubmit} className={styles.button}>Update  Near By</button>
        </div>
        


      

        <div className={styles.carddetails}>
        <h1>Food Service Details</h1>

    
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
              <th>Location Name</th>
              <th>Enable/Disable</th>
            </tr>

            {nearbyname.map((near, index) => (
                  <tr key={near.id}>
                    <th>{index + 1}</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                    <th>{near.name}</th>
                    <th>{near.enabled ? 'Enabled' : 'Disabled'}</th>
                  </tr>
                ))}
          </thead>

        </table>
        </div>
        </div>

        
        
      
      
    
    </div></>
  );
};

export default DefineNearby;







