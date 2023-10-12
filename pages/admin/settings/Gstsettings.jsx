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
        <h1>Define GST %</h1>

        
        <div className={styles.addContainer}>


                    <div className={styles.inputContainer}>
                    <label htmlFor="areaname">Area Name</label>
                    <input type="Text" id="areaname"/>

                    </div >

                    <div>
 
        </div>
        
        </div>
        <button>Update Settings</button>
        </div>



        
</div></>
  );
};

export default AddArea;
