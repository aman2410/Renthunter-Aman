import React, { useState, useEffect } from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
import axios from 'axios';
const DefineSharing = () => {


  const [sharingType, setSharingType] = useState('');
  const [sharingTypes, setSharingTypes] = useState([]);


  useEffect(() => {
    // Fetch sharing types data when the component mounts
    fetchSharingTypes();
  }, []);

  const fetchSharingTypes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/sharingtypes');
      if (response.status === 200) {
        setSharingTypes(response.data);
      }
    } catch (error) {
      console.error('Error fetching sharing types:', error);
    }
  };


  const handleSubmit = async () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString();

    try {
      const response = await axios.post('http://localhost:5000/api/sharingtypes', {
        ttype: sharingType,
        
        cdate: currentDate,
        ctime: currentTime,
      });

      if (response.status === 200) {
        console.log('Data submitted successfully');
        // You can add code to reset the input field or update the UI as needed
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };





  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add Sharing Types</h1>
        <div className={styles.inputContainer}>

          < div className={styles.inputContainer}>
         <label htmlFor="sharingtype">Sharing Type</label>
              <input
              type="text"
              placeholder="Sharing Type"
              value={sharingType}
              onChange={(e) => setSharingType(e.target.value)}
            />
         </div>

       

          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
        
        </div>
        <button onClick={handleSubmit}>Update Sharing Type</button>
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
              <th>Sharing Type</th>
              <th>Enable/Disable</th>
            </tr>

              {sharingTypes.map((sharing, index) => (
                  <tr key={sharing.id}>
                    <th>{index + 1}</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                    <th>{sharing.ttype}</th>
                    <th>Enable/Disable Checkbox</th>
                  </tr>
                ))}

          </thead>
        </table>
        </div>
      
    
    </div></>
  );
};

export default DefineSharing;
  ;
