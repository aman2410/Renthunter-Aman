import React from 'react';
import styles from './../settings/styles/setting.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const AddArea = () => {
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Promo Code Settings</h1>

        
        <div className={styles.addContainer}>

                      <div className={styles.inputContainer}>
                      <label htmlFor="selectproperty">Select Property</label>
                        <select>
                          {/* Add options for properties */}
                        </select>
                        </div>
                    <div className={styles.inputContainer}>
                    <label htmlFor="selectplan">Select Plan</label>
                    <select>
                      {/* Add options for plans */}
                    </select>
                    </div>
                    <div className={styles.inputContainer}>
                    <label htmlFor="areaname">Area Name</label>
                    <input type="Text" placeholder='Enter total Scratch Card' id="areaname"/>

                    </div >

                    <div>
 
        </div>
        
        </div>
        <button>Add Settings</button>
        </div>
        <div className={styles.carddetails}>
        <h1>Card Details</h1>

        <div className={styles.inputRow}>
          <div className={styles.inputContainer1}>

          <div classname={styles.inputContainer}>
            <label id= {styles.label_show} htmlFor="showInput">Show</label>
            <select id="showInput">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              {/* Add more options as needed */}
            </select>
            </div>
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
              <th>Property Plan</th>
              <th>Pricing Plan</th>
              <th>Number of Users</th>
              <th>Assigned</th>
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

export default AddArea;
