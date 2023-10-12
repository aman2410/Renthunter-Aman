<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import styles from './../reports/styles/getreport.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
import Axios from 'axios';

const GetUserDetails = () => {
  const [loginId, setLoginId] = useState(''); // State to store the input value
  const [userDetails, setUserDetails] = useState(null); // State to store fetched user details
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide notification after 3 seconds

    return () => clearTimeout(timer);
  }, [showNotification]);

  const handleGetDetails = async () => {
    try {
      // Send a GET request to the API to fetch user details
      const response = await Axios.get('http://localhost:5000/api/get_user_details', {
        params: {
          loginId: loginId, // Pass loginId for both email and phone number
        },
      });

      // Check if data was found
      if (response.data.length === 0) {
        setShowNotification(true);
        setUserDetails(null); // Clear userDetails when no data found
        return; // Exit early if no data found
      }

      // Update the state with the fetched user details
      setUserDetails(response.data[0]); // Assuming you only expect one user

      // Clear previous input
      setLoginId('');
    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle any errors here
    }
  };
  
  return (
    <>
      <Extranav />
      <Adminnavbar />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h3>Get User Details</h3>
          <div className={styles.inputtype}>
            <label htmlFor="rule"></label>
            <input
              type="text"
              placeholder="Enter Login Id or Mobile No"
              id="rule"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
            />
          </div>
          <button onClick={handleGetDetails}>Get Details</button>
        </div>
        {userDetails && (
          <div className={styles.userDetails}>
            <h2>User Details</h2>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td><strong>Username:</strong></td>
                  <td>{userDetails.username}</td>
                </tr>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{userDetails.firstname}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{userDetails.email}</td>
                </tr>
                <tr>
                  <td><strong>Contact number:</strong></td>
                  <td>{userDetails.mob}</td>
                </tr>
                <tr>
                  <td><strong>Created at:</strong></td>
                  <td>{userDetails.created_date}</td>
                </tr>
                <tr>
                  <td><strong>Login date:</strong></td>
                  <td>{userDetails.login_date}</td>
                </tr>
                <tr>
                  <td><strong>Login time:</strong></td>
                  <td>{userDetails.login_time}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {showNotification && (
          <div className={styles.notification}>No data found</div>
        )}
      </div>
    </>
  );
};

export default GetUserDetails;
=======
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
                <h1>Get User Details</h1>
        

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
>>>>>>> origin/main
