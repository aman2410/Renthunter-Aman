import React from 'react';
import styles from './../masters/style/Addstates.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const AddStates = () => {
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add States</h1>
        <div className={styles.inputContainer}>

          < div className={styles.selectcity}>
         <label htmlFor="selectstates">States Name</label>
         <input type="text" id="selectstates" />
         </div>

       

          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
        
        </div>
        <button className={styles.button}>Update State</button>
        </div>

        <div className={styles.uploadContainer}>
                      <h1>Update State</h1>
                      <div className={styles.cityupload}>
    

                        <div className={styles.cityfile}>
                        <label htmlFor="choosefile">Choose File</label>
                        <input type="file" id="choosefile" />
                        </div>
                        <div className={styles.getfile}>
                                  <h1>Get File Format</h1>
                                  <button className={styles.button}>Get Files</button>
                        </div>
                        
                      </div>

          <div>
          <button className={styles.button}>Upload File</button>
          </div>    </div>
          <div>
          
        </div>
        


      

        <div className={styles.carddetails}>
        <h1>Area Details</h1>

    
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
              <th>State</th>

            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
        </div>
      
    
    </div></>
  );
};

export default AddStates;
