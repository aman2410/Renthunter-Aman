import React, { useState, useEffect } from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineAmenities = () => {
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [newAmenityType, setNewAmenityType] = useState('');
  const [newAmenityClass, setNewAmenityClass] = useState('');

  useEffect(() => {
    // Fetch data when the component mounts
    fetchAmenitiesData();
  }, []);

  const fetchAmenitiesData = async () => {
    try {
      // Make an HTTP request to fetch data from your backend or API
      const response = await fetch('http://localhost:5000/api/amenities'); // Replace with your API endpoint
      if (response.ok) {
        const data = await response.json();
        setAmenitiesData(data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/amenities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          atype: newAmenityType,
          fclass: newAmenityClass,
          
        }),
      });
  
      if (response.ok) {
        // Clear the input fields
        setNewAmenityType('');
        setNewAmenityClass('');

        // Optionally, you can update the table data here
        // fetchAmenitiesData();
      } else {
        console.error('Failed to add data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
<div className={styles.container}>
      <div className={styles.cardContainer}>
      <h2>Add Amenities Type</h2>
  <form onSubmit={handleSubmit}>
    <label htmlFor="amenitiestype">Amenities Type</label>
    <input
      type="text"
      id="amenitiestype"
      value={newAmenityType}
      onChange={(e) => setNewAmenityType(e.target.value)}
    />

    <label htmlFor="amenitiestypes">Amenities Class</label>
    <input
      type="text"
      id="amenitiestypes"
      value={newAmenityClass}
      onChange={(e) => setNewAmenityClass(e.target.value)}
    />

    <div>
      <input
        type="checkbox"
        id="checkbox"
        
      />
      <label htmlFor="checkbox">Click to Enable</label>
    </div>

    <button type="submit" className={styles.button}>
      Add Amenities Type
    </button>
  </form>
</div>
        


      

        <div className={styles.carddetails}>
        <h1>Amenities Type Details</h1>

    
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
        <th>Amenities Type</th>
        <th>Area</th>
        <th>Enable/Disable</th>
      </tr>


      {amenitiesData.map((amenity, index) => (
        <tr key={amenity.id}>
          <th>{index + 1}</th>
          {/* Add more columns as needed */}
          <th>{amenity.atype}</th>
          <th>{amenity.fclass}</th>
          <th>{amenity.disabled}</th>
          <th>{amenity.cdate}</th>
          <th>{amenity.ctime}</th>
          <th>{amenity.cuser}</th>
          {/* Add Edit and Delete buttons as needed */}
        </tr>
      ))}

    </thead>
  </table>
</div>
        </div>

        
        
      
      
    
    </div></>
  );
};

export default DefineAmenities;







