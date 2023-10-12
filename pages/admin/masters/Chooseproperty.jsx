import React from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const ChooseProperty = () => {
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add States</h1>
        <div className={styles.inputContainer}>

                  < div className={styles.memdetails}>
                  <label htmlFor="propertytype">Property Type</label>
                    <select id="propertytype">
                      {/* Add options for properties */}
                    </select>
                    </div>

                  < div className={styles.memdetails}>
                  <label htmlFor="tenanttype">Tenant Type</label>
                  <input type="text" id="tenanttype" />
                  </div>
                  < div className={styles.memdetails}>
                  <label htmlFor="fonticonclass">Font Icon Class</label>
                  <input type="text" id="fonticonclass" />
                  </div>




       

          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
        
        </div>
        <button className={styles.button}>Update Tenant Type</button>
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

        <div className={styles.table_container}>
        <table>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Property Type</th>
              <th>Tenant Type</th>
              <th>Font Icon Class</th>
              <th>Enable/Disable</th>
              
            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
        </div>
      
    
    </div></div></>
  );
};

export default ChooseProperty;
