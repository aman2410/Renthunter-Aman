import React, { useState, useEffect } from "react";
import styles from "./multistepform/multi.module.css";
import axios from "axios";

const PostHome = ({ formData, handleChangeInput, handleNextStep, nearby }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [nearbyData, setNearbyData] = useState([]);

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

  // Fetch areas based on the selected state and city
  useEffect(() => {
    if (selectedState !== '' && selectedCity !== '') {
      axios.get(`http://localhost:5000/api/areas/${selectedCity}`)
        .then(response => {
          setAreas(response.data);
        })
        .catch(error => {
          console.error('Error fetching areas:', error);
        });
    }
  }, [selectedState, selectedCity]);

  // Function to handle state change
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    handleChangeInput(e);
    setSelectedCity('');
    setSelectedArea('');
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
    handleChangeInput(e);
    setSelectedArea('');
  };

  const handleAreaChange = (e) => {
    const selectedArea = e.target.value;
    setSelectedArea(selectedArea);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const checkboxId = e.target.id;
    const isChecked = e.target.checked;

    // Get the current nearby value from formData or initialize it as an empty string
    const currentNearby = formData?.nearby || '';

    let updatedNearby = '';

    if (isChecked) {
      // If the checkbox is checked, add the checkboxId only if it's not already in the list
      const nearbyArray = currentNearby.split(',').filter(item => item.trim() !== '');
      if (!nearbyArray.includes(checkboxId)) {
        nearbyArray.push(checkboxId);
      }
      updatedNearby = nearbyArray.join(',');
    } else {
      // If the checkbox is unchecked, remove the checkboxId if it exists in the list
      const nearbyArray = currentNearby.split(',').filter(item => item.trim() !== '');
      const index = nearbyArray.indexOf(checkboxId);
      if (index !== -1) {
        nearbyArray.splice(index, 1);
      }
      updatedNearby = nearbyArray.join(',');
    }

    // Update the formData with the new nearby string
    handleChangeInput({
      target: {
        name: 'nearby',
        value: updatedNearby,
      },
    });
  };

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/nearby');
      setNearbyData(response.data);
    } catch (error) {
      console.error('Error fetching nearby data:', error);
    }
  };
  return (
    <><div className={styles.cardContainer}>
      <div></div>
            <div>
              <label htmlFor="nameOrNumber">Name or Number of House</label>
              <input
                type="text"
                name="nameOrNumber"
                value={formData.nameOrNumber}
                onChange={(e) => handleChangeInput(e)}
                required
              />
            </div>

            <div>
              <label htmlFor="street">Street</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={(e) => handleChangeInput(e)}
                required
              />
            </div>

            <div className={styles.ic1}>
              <div>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={(e) => handleChangeInput(e)}
                  required
                />
              </div>

              <div>
                <label htmlFor="selectState">Select State</label>
                <select
                  id="selectState"
                  name="selectState"
                  value={formData.selectedState}
                  onChange={handleStateChange}
                  required
                >
                  <option value="">Select a state</option>
                  {states.map(state => (
                    <option key={state.id} value={state.id}>
                      {state.sname}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="selectCity">Select City</label>
                <select
                  id="selectCity"
                  name="selectCity"
                  value={selectedCity}
                  onChange={handleCityChange}
                  required
                >
                  <option value="">Select a City</option>
                  {cities.map(city => (
                    <option key={city.id} value={city.id}>
                      {city.cname}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="selectArea">Select Area</label>
                <select
                  id="selectArea"
                  name="selectArea"
                  value={selectedArea}
                  onChange={handleAreaChange}
                  required
                >
                  <option value="">Select Area</option>
                  {areas.map(area => (
                    <option key={area.id} value={area.id}>
                      {area.aname}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.ic2}>
              <label htmlFor="landmark">Land Mark</label>
              <input
                type="text"
                placeholder="Land Mark"
                id="landmark"
                name="landmark"
                value={formData.landmark}
                onChange={(e) => handleChangeInput(e)}
                required
              />
            </div>

            <div className={styles.selectcontainer}>
              <div className={styles.sc}>
                <label htmlFor="ageOfProperty">Age of Property (In Years)</label>
                <select
                  id="ageOfProperty"
                  name="ageOfProperty"
                  value={formData.ageOfProperty}
                  onChange={(e) => handleChangeInput(e)}
                >
                  <option value="">Select Area Type</option>
                  <option value="lessthan1year">Less than 1 year</option>
                <option value="1 Year">1 Year</option>
                <option value="3 Years">2 Years</option>
                <option value="4 Years">2 Years</option>
                <option value="5 Years">2 Years</option>
                <option value="Morethan5Years">More than 5 Years</option>
                </select>
              </div>

              <div className={styles.ic1}>
            {nearbyData.map((item) => (
              <div key={item.id} className={styles.ic2}>
                <label>
                  <input
                    type="checkbox"
                    id={item.id}
                    name='nearby'
                    value={item.id}
                    checked={nearby?.includes(item.id) ?? false}
                    onChange={handleCheckboxChange}
                  />
                  {item.name}
                </label>
              </div>
            ))}
          </div>
      </div>
            </div>
          <div className={styles.button}>
            <button className={styles.previousbutton}
            onClick={handleNextStep}
            >
            Previous
          </button>

            <button type="submit" className={styles.nextbutton}
            onClick={handleNextStep}
          >
            Next
          </button>
          </div>


    </>
  );
};

export default PostHome;
