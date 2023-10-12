import React from 'react';
import styles from './../settings/styles/setting.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const Addgallery = () => {
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add Picks To Gallery</h1>

        
        <div className={styles.addContainer}>

                    <div className={styles.inputContainer}>
                    <label htmlFor="picname">Pic Name</label>
                    <input type="Text" id="picname"/>

                    </div >
                        <div className={styles.get}> 
                        <div className={styles.choosearea}>
                          
                        <label htmlFor="file"></label>
                            < div className={styles.choosefile}>
                                <input type="file" id="file" />
                            </div>
                        </div>

                        
                      
                      </div>

                      

        
        </div>
        <button>Add Image</button>

        </div>
        
<div className={styles.carddetails}>
        <h1>Gallery Details</h1>

        <div className={styles.inputRow}>
          <div className={styles.inputContainer1}>

          <div classname={styles.inputContainer}>
            <label htmlFor="showInput">Show</label>
            <select>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              {/* Add more options as needed */}
            </select>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="searchInput">Search</label>
            <input type="text" id="searchInput" />
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Delete</th>
              <th>Pic Name</th>
              <th>Image</th>
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

export default Addgallery;
