import React, { useState, useEffect } from 'react';
import styles from './../masters/style/Addcities.module.css'; // You can create this CSS file for styling
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';
import axios from 'axios';
const AddCities = () => {

  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState('');


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
          // Fetch city data when the component mounts
          fetchCityData();
        }, []);

      const fetchCityData = async () => {
                try {
                  const response = await fetch('http://localhost:5000/api/cities');
                  if (response.ok) {
                    const data = await response.json();
                    setCities(data);
                  } else {
                    console.error('Failed to fetch city data');
                  }
                } catch (error) {
                  console.error('Error:', error);
                }
              };

              // Define the submitCity function
          const submitCity = async () => {
            if (!selectedState || !cityName) {
              console.error('Please select a state and enter a city name');
              return;
            }

            try {
              const response = await fetch('http://localhost:5000/api/cities', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  sname: selectedState,
                  cname: cityName,

                }),
              });

              if (response.ok) {
                // City added successfully, optionally fetch and update city data
                fetchCityData();
              } else {
                console.error('Failed to add city');
              }
            } catch (error) {
              console.error('Error:', error);
            }
          };


  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add City</h1>
        <div className={styles.inputContainer}>
              <div className={styles.selectcity}>
                <label htmlFor="selectstates">Select State</label>
                <select onChange={(e) => setSelectedState(e.target.value)}value={selectedState}>
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.sname}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.selectcity1}>
                <label htmlFor="selectcity">City Name</label>
                <input
                  type="text"
                  id="selectcity"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                />
              </div>
              <div className={styles.checkboxcontainer}>
                <input
                  type="checkbox"
                  id="checkbox"
                 
                />
                <label htmlFor="checkbox">Click to Enable</label>
              </div>
            </div>
            <button onClick={submitCity} className={styles.button}>
              Add City
            </button>
        </div>
        


        <div className={styles.uploadContainer}>
                      <h1>Update City</h1>
                      <div className={styles.cityupload}>
    

                        <div className={styles.cityfile}>
                        <label htmlFor="cityFile">Choose File</label>
                        <input type="file" id="cityFile" />
                        </div>
                        <div className={styles.getfile}>
                                  <h1>Get File Format</h1>
                                  <button className={styles.button}>Get Files</button>
                        </div>
                        
                      </div>

          <div>
          <button className={styles.button}>Upload File</button>
          </div>    </div>
          <div>
          
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
        
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>State</th>
              <th>City</th>

            </tr>
            <tbody>
            {cities.map((city, index) => (
              <tr key={city.id}>
                {/* <td>{index + 1}</td> */}
                <td>{city.sname}</td>
                <td>{city.cname}</td>


        </tr>
      ))}
    </tbody>

          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
        </div>
      
    </div></>
  );
};

export default AddCities;
