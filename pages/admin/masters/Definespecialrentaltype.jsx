import React, { useState, useEffect } from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const Definespecialrentaltype = () => {
  const [rental, setRental] = useState('');
  const [Rentaltype, setRentaltype] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/rentaltype', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rental }),
      });

      if (response.ok) {
        // Floor type added successfully
        // Optionally, update the floor types list by fetching data again
        fetchrental();
      } else {
        console.error('Failed to add floor type');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchrental = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/rentaltype');
      if (response.ok) {
        const data = await response.json();
        setRentaltype(data);
      } else {
        console.error('Failed to fetch floor types data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Call the fetchFloorTypes function when the component mounts
  useEffect(() => {
    fetchrental();
  }, []);


  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add Special Rental Types</h1>
        <div className={styles.inputContainer}>

          < div className={styles.inputContainer}>
         <label htmlFor="type">Type</label>
         <input
                type="text"
                id="nearbyname"
                value={rental}
                onChange={(e) => setRental(e.target.value)}
              />
         </div>

       

          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
        
        </div>
        <button onClick={handleSubmit} className={styles.button}>Update Sharing Type</button>
        </div>
        


      

        <div className={styles.carddetails}>
        <h1>Sharing Type Details</h1>

    
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
        
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Types</th>
              <th>Enable/Disable</th>
            </tr>

          {Rentaltype.map((rentals, index) => (
                  <tr key={rentals.id}>
                    <th>{index + 1}</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                    <th>{rentals.rtype}</th>
                    <th>{rentals.enabled ? 'Enabled' : 'Disabled'}</th>
                  </tr>
                ))}
                          </thead>
        </table>
        </div>
      
    
    </div></>
  );
};

export default Definespecialrentaltype;
