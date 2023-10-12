import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles/Contactowner.module.css';
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
<<<<<<< HEAD
import Axios from 'axios'; // Import Axios to make API requests
import { format } from 'date-fns'; // Import date-fns for date formatting

const PropertyReported = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [propertyReports, setPropertyReports] = useState([]); // State to store fetched property reports
  const [showNoDataMessage, setShowNoDataMessage] = useState(false); // State to show "No data available" message

  const handleGetDetails = async () => {
    try {
      // Format the dates in dd-MM-yyyy format
      const formattedFromDate = fromDate
        ? format(fromDate, 'dd-MM-yyyy')
        : null;
      const formattedToDate = toDate
        ? format(toDate, 'dd-MM-yyyy')
        : null;

      // Send a GET request to the API with the formatted dates
      const response = await Axios.get('http://localhost:5000/api/get_property_reported', {
        params: {
          fromDate: formattedFromDate,
          toDate: formattedToDate,
        },
      });

      // Update the state with the fetched property reports
      setPropertyReports(response.data);

      // Show "No data available" message if no data is returned
      if (response.data.length === 0) {
        setShowNoDataMessage(true);

        // Hide the message after 5 seconds
        setTimeout(() => {
          setShowNoDataMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error fetching property reports:', error);
      // Handle any errors here
    }
  };

  return (
    <>
      <Extranav />
      <Adminnavbar />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h1>Get Property Reported</h1>
          <div className={styles.input}>
            <div className={styles.inputcontainer}>
              <label htmlFor="fromdate"></label>
              <DatePicker
                selected={fromDate}
                onChange={(date) => setFromDate(date)}
                dateFormat="dd-MM-yyyy" // Set the desired date format
                placeholderText="Select From Date"
                id="fromdate"
              />
            </div>
            <div className={styles.inputcontainer}>
              <label htmlFor="todate"></label>
              <DatePicker
                selected={toDate}
                onChange={(date) => setToDate(date)}
                dateFormat="dd-MM-yyyy" // Set the desired date format
                placeholderText="Select To Date"
                id="todate"
              />
            </div>
          </div>
          <button onClick={handleGetDetails}>Get Details</button>
        </div>

        {showNoDataMessage && (
          <div className={styles.notification}>No data available</div>
        )}

        {propertyReports.length > 0 && (
          <div className={styles.reportContainer}>
            <h2>Property Reports</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Reported on</th>
                </tr>
              </thead>
              <tbody>
                {propertyReports.map((report, index) => (
                  <tr key={report.id}>
                    <td>{index + 1}</td>
                    <td>{report.name}</td>
                    <td>{report.mob}</td>
                    <td>{report.email}</td>
                    <td>{report.msg}</td>
                    <td>{report.cdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyReported;
=======

const ContactPage = () => {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  return (

    <>
    <Extranav/>
    <Adminnavbar/>
    <div className={styles.container}>
    <div className={styles.cardContainer}>
      <h1>Get Property Reported</h1>
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
};

export default ContactPage;
>>>>>>> origin/main
