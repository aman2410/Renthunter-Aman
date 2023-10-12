import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles/Contactowner.module.css';
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
<<<<<<< HEAD
import Axios from 'axios'; // Import Axios library
=======
>>>>>>> origin/main

const ContactPage = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
<<<<<<< HEAD
  const [contactOwnerDetails, setContactOwnerDetails] = useState([]);
  const [tableVisible, setTableVisible] = useState(false); // State to control table visibility

  const handleGetDetails = async () => {
    try {
      // Format the fromDate and toDate to dd-mm-yyyy format
      const formattedFromDate = `${fromDate.getDate()}-${fromDate.getMonth() + 1}-${fromDate.getFullYear()}`;
      const formattedToDate = `${toDate.getDate()}-${toDate.getMonth() + 1}-${toDate.getFullYear()}`;
  
      // Send a GET request to the API to fetch contact owner details
      const response = await Axios.get('http://localhost:5000/api/contact_owner_details', {
        params: {
          fromDate: formattedFromDate, // dd-mm-yyyy format
          toDate: formattedToDate,     // dd-mm-yyyy format
        },
      });

      // Update the state with the fetched contact owner details
      setContactOwnerDetails(response.data);
      setTableVisible(true); // Show the table after fetching data
    } catch (error) {
      console.error('Error fetching contact owner details:', error);
      // Handle any errors here
    }
  };

  return (
    <>
      <Extranav />
      <Adminnavbar />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h1>Get Contact Owner Details</h1>
          <div className={styles.input}>
            <div className={styles.inputcontainer}>
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                placeholderText="From Date"
                dateFormat="dd/MM/yyyy" // Specify the desired date format
                id="fromdate"
              />
            </div>
            <div className={styles.inputcontainer}>
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                placeholderText="To Date"
                dateFormat="dd/MM/yyyy" // Specify the desired date format
                id="todate"
              />
            </div>
          </div>
          <button onClick={handleGetDetails}>Get Details</button>
        </div>
        {/* Display fetched contact owner details in a table */}
        {tableVisible && (
          <div className={styles.contactDetails}>
            <h2>Contact Owner Details</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Enquiry On</th>
                </tr>
              </thead>
              <tbody>
                {contactOwnerDetails.map((contact, index) => (
                  <tr key={contact.id}>
                    <td>{index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.mob}</td>
                    <td>{contact.email}</td>
                    <td>{contact.msg}</td>
                    <td>{contact.cdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
=======

  return (

    <>
    <Extranav/>
    <Adminnavbar/>
    <div className={styles.container}>
    <div className={styles.cardContainer}>
      <h1>Contact Owner Details</h1>
      <div className={styles.input}>
      <div className={styles.inputcontainer}>
        <label htmlFor="fromdate"></label>
        <DatePicker
          selected={fromDate}
          onChange={(date) => setFromDate(date)}
          placeholderText="From Date:"
          id="fromdate"
        />
      </div>
      <div className={styles.inputcontainer}>
        <label htmlFor="todate"></label>
        <DatePicker
          selected={toDate}
          onChange={(date) => setToDate(date)}
          placeholderText="To Date:"
          id="todate"
        />
      </div>
      </div>
      <button>Get Details</button>
    </div>
  </div>
</>
);
>>>>>>> origin/main
};

export default ContactPage;
