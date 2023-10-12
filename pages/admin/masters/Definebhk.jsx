import React, { useState, useEffect } from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
import axios from 'axios';


const DefineBhk = () => {

  const [bhkTypes, setBhkTypes] = useState([]);
  const [bhkType, setBhkType] = useState('');
  const [enableCheckbox, setEnableCheckbox] = useState(false);

  useEffect(() => {
    // Fetch BHK types from the backend
    fetchBhkTypes();
  }, []);

  const fetchBhkTypes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/bhk-types');
      setBhkTypes(response.data);
    } catch (error) {
      console.error('Error fetching BHK types:', error);
    }
  };

  const handleUpdateBhkType = async () => {
    try {
      // Send a POST request to store BHK type data
      const response = await axios.post('http://localhost:5000/api/bhk-types', {
        bhk: bhkType,
        disabled: enableCheckbox,
      });

      // Refresh the BHK types data after adding a new one
      fetchBhkTypes();

      // Reset form inputs
      setBhkType('');
      setEnableCheckbox(false);

      console.log('BHK type added successfully:', response.data);
    } catch (error) {
      console.error('Error adding BHK type:', error);
    }
  };

  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
<div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Define BHK Types</h1>
        <div className={styles.inputContainer}>


        < div className={styles.inputtype}>
                <label htmlFor="bhktype">BHK Type</label>
                <input
                type="text"
                id="bhktype"
                value={bhkType}
                onChange={(e) => setBhkType(e.target.value)}
              />
        </div>
         

       
        < div>
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
        
        </div>
        <button className={styles.button} onClick={handleUpdateBhkType}>
            Update BHK Type
          </button>
        </div>
        


      

        <div className={styles.carddetails}>
        <h1>BHK Types Details</h1>

    
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
        
        <table className={styles.table_container}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>BHK Type</th>
                  <th>Enable/Disable</th>
                </tr>



                {bhkTypes.map((type, index) => (
                  <tr key={type.id}>
                    <th>{index + 1}</th>
                    <th>Edit Button</th>
                    <th>Delete Button</th>
                    <th>{type.bhk}</th>
                    <th>{type.disabled ? 'Disabled' : 'Enabled'}</th>
                  </tr>
                ))}
               </thead>
              </table>


        </div>
        </div>

        
        
      
      
</>
  );
};

export default DefineBhk;







