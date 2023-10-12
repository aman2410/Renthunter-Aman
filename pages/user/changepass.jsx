import  React from 'react';
import Link from 'next/link';
import Extranav from '../components/extranav';
import Navbar from '../components/navbar';
import styles from'./changepass.module.css';
import Footer from '../components/footer';


let Changepass = () => {
  return (    
    <div>      
      <Extranav/> {/* Render the Login component */}
      <Navbar/>

      <div className={styles.changecontainer}>
        
          <h1>Change Password</h1>
          <div className={styles.inputchangecontainer}>

          <label htmlFor="existingpassword">Existing Password</label>
          <input type="text" id="existingpassword" />

          <label htmlFor="newpassword">New Password</label>
          <input type="text" id="newpassword" />

          <label htmlFor="newpassword">Confirm Password</label>
          <input type="text" id="newpassword" />
 
              <button>Update Password</button>
              </div>
        </div>
        <Footer/>
        </div>
        
   
        
  );
}
export default Changepass;