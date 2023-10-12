import React from 'react';
import styles from './../reports/styles/getreport.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const AddRules = () => {
  return (
<>
<Extranav />
<Adminnavbar/>    
    
    
<div className={styles.container}>
        <div className={styles.cardContainer}>
                <h1>Get User Invoice</h1>
        

                <div className={styles.inputtype}>
                <label htmlFor="rule"></label>
                <input type="text" placeholder="Login Id / Mobile No" id="rule" />
                </div>
                <button>Get Details</button>

         </div>

          
    </div></>
  );
};

export default AddRules;
