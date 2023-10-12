import React, { useState, useEffect } from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineFurnishedtypes = () => {

  const [furnished, setFurnished] = useState('');
  const [furnishedtype, setFurnishedType] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/furnished', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ furnished }),
      });

      if (response.ok) {
        // Floor type added successfully
        // Optionally, update the floor types list by fetching data again
        fetchFurnishedTypes();
      } else {
        console.error('Failed to add furnished type');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchFurnishedTypes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/furnished');
      if (response.ok) {
        const data = await response.json();
        setFurnishedType(data);
      } else {
        console.error('Failed to fetch furnished type data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Call the fetchFloorTypes function when the component mounts
  useEffect(() => {
    fetchFurnishedTypes();
  }, []);

  
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
<div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Define Furnished Types</h1>
        <div className={styles.inputContainer}>


        < div className={styles.inputtype}>
                <label htmlFor="furnishedtype">Furnished Type</label>
                <input
                type="text"
                id="furnishedtype"
                value={furnished}
                onChange={(e) => setFurnished(e.target.value)}
              />
            </div>
         

       
        < div>
          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
          
          </div>
        
        </div>
        <button onClick={handleSubmit} className={styles.button}>Update Furnished Type</button>
        </div>
        


      

        <div className={styles.carddetails}>
        <h1>Furnished Types Details</h1>

    
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
              <th>Furnished Types</th>
              <th>Enable/Disable</th>
            </tr>
            {furnishedtype.map((furnish, index) => (
                  <tr key={furnish.id}>
                    <th>{index + 1}</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                    <th>{furnish.ftype}</th>
                    <th>{furnish.enabled ? 'Enabled' : 'Disabled'}</th>
                  </tr>
                                  ))}
          </thead>

        </table>
        </div>
        </div>

        
        
      
      
    
    </div></>
  );
};

export default DefineFurnishedtypes;







