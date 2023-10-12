import React, { useState, useEffect } from 'react';
import styles from './../masters/style/Addareas.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
import axios from 'axios';

const AddArea = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [areas, setAreas] = useState([]);
  const [areaName, setAreaName] = useState(''); // State for the area name input


  // Fetch states from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/states')
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedState !== '') {
      axios.get(`http://localhost:5000/api/cities/${selectedState}`)
        .then(response => {
          setCities(response.data);
        })
        .catch(error => {
          console.error('Error fetching cities:', error);
        });
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedCity !== '') {
      axios.get(`http://localhost:5000/api/areas/${selectedCity}`)
        .then(response => {
          setAreas(response.data);
        })
        .catch(error => {
          console.error('Error fetching areas:', error);
        });
    }
  }, [selectedCity]);

    // Function to handle the form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission
  
      // Create a new area object with the selected state, city, and area name
      const newArea = {
        sname: selectedState,
        cname: selectedCity,
        aname: areaName,
        disabled: false, // You can set other properties as needed
      };
  
      // Make a POST request to your server to store the new area
      axios.post('http://localhost:5000/api/areas', newArea)
        .then((response) => {
          console.log('Area added successfully:', response.data);
  
          // If you want to update the areas list, you can do so here
          // Fetch the updated areas or update the state as needed
        })
        .catch((error) => {
          console.error('Error adding area:', error);
        });
    };


  return (

    <><Extranav />
    <Adminnavbar/>

    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add Areas</h1>

        
        <div className={styles.addContainer}>

                      <div className={styles.inputContainer}>
                       <label htmlFor="selectstates">Select States</label>
              <select
                id="selectstates"
                onChange={e => setSelectedState(e.target.value)}
                value={selectedState}
              >
                <option value="">Select a state</option>
                {states.map(state => (
                  <option key={state.id} value={state.id}>
                    {state.sname}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputContainer}>
                       <label htmlFor="selectcities">Select Cities</label>
              <select
                id="selectcities"
                onChange={e => setSelectedCity(e.target.value)}
                value={selectedCity}
              >
                <option value="">Select a City</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>
                    {city.cname}
                  </option>
                ))}
              </select>
            </div>


            </div>

            <div className={styles.inputContainer}>
        <label htmlFor="areaname">Area Name</label>
        <input
          type="text"
          id="areaname"
          value={areaName}
          onChange={(e) => setAreaName(e.target.value)}
        />
      </div>

                    <div>
          <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Click to Enable</label>
          </div>
        </div>
        
        </div>
        <button onClick={handleSubmit}>Add Area</button>
        </div>
        


        <div className={styles.uploadContainer}>
                      <h1>Update Area</h1>
                      <div className={styles.get}> 
                        <div className={styles.choosearea}>
                          
                        <label htmlFor="cityFile">Choose File</label>
                            < div className={styles.choosefile}>
                                <input type="file" id="cityFile" />
                            </div>
                        </div>
                            <div className={styles.getfile}>
                                  <h1>Get File Format</h1>
                                  <button>Get Files</button>
                            </div>
                        
                      </div>

          <div>
          <button>Upload File</button>
          </div>    </div>
          <div>
          
        </div>

      

      <div className={styles.carddetails}>
        <h1>Area Details</h1>

        <div className={styles.inputRow}>
          <div className={styles.inputContainer1}>

          <div className={styles.inputContainerRight1}>
            <label id= {styles.label_show} htmlFor="showInput">Show</label>
            <select id="showInput">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              {/* Add more options as needed */}
            </select>
            </div>
          </div>
          <div className={styles.inputContainerRight}>
            <label htmlFor="searchInput">Search</label>
            <input type="text" id="searchInput" />
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>State</th>
              <th>City</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            {areas.map((area, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
        {selectedState &&
          states.find((state) => state.id === parseInt(selectedState))?.sname}
      </td>
      <td>
        {selectedCity &&
          cities.find((city) => city.id === parseInt(selectedCity))?.cname}
      </td>
      <td>{area.aname}</td>
                 {/* Display the area name */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddArea;
