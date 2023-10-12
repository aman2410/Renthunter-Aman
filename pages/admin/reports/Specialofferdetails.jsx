import React from 'react';
import styles from './../reports/styles/getreport.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineFloor = () => {
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
<div className={styles.container}>
     
        <div className={styles.carddetails}>
        <h1>Special Offer Details</h1>

    
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
              <th>Property Type</th>
              <th>Property Plan</th>
              <th>Pricing Cost</th>
              <th>Months</th>
              <th>Offer Defined</th>
              <th>No. of Users Opted</th>
              
            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
        </div>
        </div>

        
        
      
      
    
    </div></>
  );
};

<<<<<<< HEAD
export default DefineFloor;
=======
export default DefineFloor;







>>>>>>> origin/main
