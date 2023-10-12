import React from 'react';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineInternalTeam = () => {
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Define Team</h1>
        <div className={styles.inputContainer}>

                  < div className={styles.inputtype}>
                  <label htmlFor="loginid">Login Id</label>
                  <input type="text" id="loginid" />
                  </div>
                  < div className={styles.inputtype}>
                  <label htmlFor="password">Password</label>
                  <input type="text" id="password" />
                  </div>
                  < div className={styles.inputtype}>
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" />
                  </div>

                  < div className={styles.inputtype}>
                  <label htmlFor="email">Email Id</label>
                  <input type="text" id="email" />
                  </div>
                  < div className={styles.inputtype}>
                  <label htmlFor="mobileno">Mobile No.</label>
                  <input type="text" id="mobileno" />
                  </div>
                  < div className={styles.inputtype}>
                  <label htmlFor="usertype">User Type</label>
                    <select>
                      {/* Add options for plans */}
                    </select>
                  </div>

                  <div className={styles.checkboxcontainer}>
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Click to Enable</label>

                  </div>
        
        </div>
        <button className={styles.button}>Update Payment Page</button>
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
          <div>
            <input type="text" id="searchInput" />
            </div>
          </div>
          </div>
        <div className={styles.table_container}>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Login Id</th>
              <th>Password</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>User Type</th>
              <th>Enable/ Disable</th>

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

export default DefineInternalTeam;
