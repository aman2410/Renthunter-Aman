import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './../masters/style/define.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const Defineteams = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/server');
      console.log('Response Data:', response.data);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Define Teams</h1>
        <div className={styles.inputContainer}>

          < div className={styles.memdetails}>
         <label htmlFor="loginid">Login id</label>
         <input type="text" id="loginid" />
         </div>
         < div className={styles.memdetails}>
         <label htmlFor="password">Password</label>
         <input type="text" id="password" />
         </div>
         < div className={styles.memdetails}>
         <label htmlFor="firstname">First Name</label>
         <input type="text" id="firstname" />
         </div>
         < div className={styles.memdetails}>
         <label htmlFor="email">Email</label>
         <input type="text" id="email" />
         </div>
         < div className={styles.memdetails}>
         <label htmlFor="mobilenumber">Mobile Number</label>
         <input type="text" id="mobilenumber" />
         </div>
         < div className={styles.memdetails}>
         <label htmlFor="selectstates">User Type</label>
          <select id="selectstates">
            {/* Add options for properties */}
          </select>
          </div>

       

          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>

          </div>
        
        </div>
        <button className={styles.button}>Update Area</button>
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
                <th>ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                {/* Add more headers as needed */}
              </tr>
            </thead>
            <tbody>
              {userData.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.mobile}</td>
                  <td>{user.email}</td>
                  {/* Add more data fields as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    
    </div></div></>
  );
};

export default Defineteams;
