import React, { useState, useEffect } from 'react';
import styles from './nearby.module.css'; // You can create this CSS file for styling
import axios from 'axios';

const Nearby = ({ formData, handleChangeInput,nearby }) => {
  const [nearbyData, setNearbyData] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Replace 'http://localhost:5000/api/nearby' with the actual API endpoint
      const response = await axios.get('http://localhost:5000/api/nearby');
      setNearbyData(response.data); // Assuming the response is an array of objects
    } catch (error) {
      console.error('Error fetching nearby data:', error);
    }
  };

//   // We need a method to update our formData
//   const handleChangeInput = (event) => {
//     const fieldName = event.target.name;
//     let fieldValue;
//     if (fieldName === 'agreeToTerms') {
//       fieldValue = event.target.checked;
//     } else {
//       fieldValue = event.target.value;
//     }
//     setFormData({
//       ...formData,
//       [fieldName]: fieldValue,
//     });
//   };

  return (
    <div className={styles.checkboxcontainer}>
      <h1>Near By</h1>
      
    </div>
  );
};

export default Nearby;
