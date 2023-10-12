import React, { useState, useEffect } from 'react';
import styles from './style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
import axios from 'axios';
const DefineTenantType = () => {

  const [tenantTypes, setTenantTypes] = useState([]);
  const [propertyType, setPropertyType] = useState('');
  const [totalScratchCard, setTotalScratchCard] = useState(0);
  const [enableCheckbox, setEnableCheckbox] = useState(false);

  useEffect(() => {
    // Fetch tenant types from the backend
    fetchTenantTypes();
  }, []);

  const fetchTenantTypes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tenant-types');
      setTenantTypes(response.data);
    } catch (error) {
      console.error('Error fetching tenant types:', error);
    }
  };

  const handleAddCards = async () => {
    try {
      // Send a POST request to store tenant type data
      const response = await axios.post('http://localhost:5000/api/tenant-types', {
        propertyType,

      });

      // Refresh the tenant types data after adding a new one
      fetchTenantTypes();

      // Reset form inputs
      setPropertyType('');
      setTotalScratchCard(0);
      setEnableCheckbox(false);

      console.log('Tenant type added successfully:', response.data);
    } catch (error) {
      console.error('Error adding tenant type:', error);
    }
  };



  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Choose Tenant Type</h1>
        <div className={styles.inputContainer}>
                        <div className={styles.inputContainer}>
                        <label htmlFor="selectProperties" id = "selectProperties" >Tenant Type</label>
                        <select>
                              {tenantTypes.map((type) => (
                                <option key={type.id} value={type.id}>
                                  {type.ttype}
                                </option>
                              ))}
                        </select>

                        
                        </div>
                        <div className={styles.inputContainer}>
                        
                        <label htmlFor="nameInput">Property Type</label>
                              <input
                                type="text"
                                id="nameInput"
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                              />
                        </div>



        
                        <div className={styles.inputContainer}>
                        <label htmlFor="totalScratchCard">Total Scratch Card</label>
                              <input
                                type="number"
                                id="totalScratchCard"
                                value={totalScratchCard}
                                onChange={(e) => setTotalScratchCard(e.target.value)}
                              />
                         </div>



                            <div className={styles.checkboxcontainer}>
                                  <input
                                  type="checkbox"
                                  id="checkbox"
                                  checked={enableCheckbox}
                                  onChange={(e) => setEnableCheckbox(e.target.checked)}
                                />
                                <label htmlFor="checkbox">Click to Enable</label>
                            </div>
          
                </div>
                <button onClick={handleAddCards}>Add Cards</button>
        </div>

      

      <div className={styles.carddetails}>
        <h1>Card Details</h1>
        <div className={styles.inputRow}>
          <div className={styles.inputContainer}>
            <label htmlFor="showInput">Show</label>
            <select id="showInput">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={styles.inputContainerRight}>
            <label htmlFor="searchInput">Search</label>
            <input type="text" id="searchInput" />
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Property Type</th>
              <th>Tenant Types</th>
              <th>Font Icon Class</th>
              <th>Enable/Disable</th>
            </tr>
            </thead>


            <thead>
              {tenantTypes.map((type, index) => (
                <tr key={type.id}>
                  <td>{index + 1}</td>
                  <td>Edit Button</td>
                  <td>Delete Button</td>
                  <td>{type.ptype}</td>
                  <td>{type.ttype}</td>
                  <td>{type.fontIconClass}</td>
                  <td>{type.enableCheckbox ? 'Enabled' : 'Disabled'}</td>
                </tr>
              ))}
          </thead>


          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
      </div>
    </div></>
  );
};

export default DefineTenantType;
