import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import styles from './../masters/style/define.module.css'; // Import your CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineServices = () => {
  const [serviceType, setServiceType] = useState({
    stype: '',
    fclass: '',
    disabled: false,
    cuser: 1, // Replace with the actual user ID
  });

  const [serviceTypes, setServiceTypes] = useState([]);

  useEffect(() => {
    // Fetch service types data when the component mounts
    fetchServiceTypes();
  }, []);

  const fetchServiceTypes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/servicetypes');
      if (response.status === 200) {
        setServiceTypes(response.data);
      }
    } catch (error) {
      console.error('Error fetching service types:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/servicetypes', serviceType);
      if (response.status === 200) {
        // Service type added successfully, optionally refresh service types data
        fetchServiceTypes();
        // Reset the form fields
        setServiceType({
          stype: '',
          fclass: '',
          disabled: false,
          cuser: 1, // Replace with the actual user ID
        });
      }
    } catch (error) {
      console.error('Error submitting service type:', error);
    }
  };

  return (
    <>
      <Extranav />
      <Adminnavbar />

      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h1>Add Services Type</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="stype">Service Type</label>
              <input
                type="text"
                id="stype"
                value={serviceType.stype}
                onChange={(e) =>
                  setServiceType({ ...serviceType, stype: e.target.value })
                }
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="fclass">Font Icon Class</label>
              <input
                type="text"
                id="fclass"
                value={serviceType.fclass}
                onChange={(e) =>
                  setServiceType({ ...serviceType, fclass: e.target.value })
                }
              />
            </div>

            <div className={styles.checkboxcontainer}>
              <input
                type="checkbox"
                id="disabled"
                checked={serviceType.disabled}
                onChange={(e) =>
                  setServiceType({
                    ...serviceType,
                    disabled: e.target.checked,
                  })
                }
              />
              <label htmlFor="disabled">Click to Enable</label>
            </div>
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Update Service Type
          </button>
        </div>

        <div className={styles.carddetails}>
          <h1>Service Type Details</h1>

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

          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Service Type</th>
                <th>Font Icon Class</th>
                <th>Enable/Disable</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {serviceTypes.map((stype, index) => (
                <tr key={stype.id}>
                  <td>{index + 1}</td>
                  {/* Add Edit and Delete buttons */}
                  <td>Edit</td>
                  <td>Delete</td>
                  <td>{stype.stype}</td>
                  <td>{stype.fclass}</td>
                  <td>{stype.disabled ? 'Disabled' : 'Enabled'}</td>
                  {/* Add more table columns as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DefineServices;
