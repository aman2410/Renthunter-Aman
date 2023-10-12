import React from 'react';
import styles from './../masters/style/Define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const AddRules = () => {
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add Rules</h1>
        <div className={styles.inputContainer}>

          < div className={styles.inputtype}>
         <label htmlFor="rule">Rule</label>
         <input type="text" id="rule" />
         </div>

       

          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
        
        </div>
        <button className={styles.button}>Update Area</button>
        </div>
        


      

        <div className={styles.carddetails}>
        <h1>Rules Details</h1>

    
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
              <th>State</th>
              <th>City</th>
              <th>Area</th>
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

export default AddRules;
