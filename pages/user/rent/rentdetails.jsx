import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./dailyrental.module.css";
import axios from "axios";

const Rentdetails = ({ formData, handleChangeInput, handleNextStep,handlePrevStep, tenantPreference }) => {
  const [bhkType, setBhkType] = useState([]);
  const [selectedbhkType, setselectedbhkType] = useState('');
  const [furnished, setFurnished] = useState([]);
  const [furnishedtype, setFurnishedType] = useState('');
  const [floorType, setFloorType] = useState([]);
  const [floorTypes, setFloorTypes] = useState();
  const [facings, setFacings] = useState([]);
  const [facingType, setFacingType] = useState('');
  
  useEffect(() => {
    // Fetch BHK types from the backend
    fetchBhkTypes();
  }, []);
    // Call the fetchFloorTypes function when the component mounts
    useEffect(() => {
      fetchFurnishedTypes();
    }, []);
        // Call the fetchFloorTypes function when the component mounts
        useEffect(() => {
          fetchfloorTypes();
        }, []);

                // Call the fetchFacingsTypes function when the component mounts
                useEffect(() => {
                  fetchFacingsTypes();
                }, []);


        const fetchBhkTypes = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/bhk-types');
            setBhkType(response.data);
          } catch (error) {
            console.error('Error fetching BHK types:', error);
          }
        };
          // Function to handle state change
          const handlebhkChange = (e) => {
            const bhkType = e.target.value;
            setselectedbhkType(bhkType);
            handleChangeInput(e); // Call handleChangeInput to update formData
          };
// floor type
          const fetchfloorTypes = async () => {
            try {
              const response = await axios.get('http://localhost:5000/api/floortype');
              setFloorType(response.data);
          } catch (error) {
              console.error('Error:', error);
            }
          };
              // Function to handle floor  change
              const handlefloorChange = (e) => {
                const floorType = e.target.value;
                setFloorTypes(floorType);
                handleChangeInput(e); // Call handleChangeInput to update formData
              };
// furnished type    
              const fetchFurnishedTypes = async () => {
                try {
                  const response = await axios.get('http://localhost:5000/api/furnished');
                  setFurnished(response.data);
              } catch (error) {
                  console.error('Error:', error);
                }
              };
              // Function to handle state change
              const handlefurChange = (e) => {
                const furnished = e.target.value;
                setFurnishedType(furnished);
                handleChangeInput(e); // Call handleChangeInput to update formData
              };
// function ro fetch facings
              const fetchFacingsTypes = async () => {
                try {
                  const response = await axios.get('http://localhost:5000/api/facings');
                  setFacings(response.data);
              } catch (error) {
                  console.error('Error:', error);
                }
              };
              // Function to handle state change
              const handlefacingChange = (e) => {
                const facings = e.target.value;
                setFacingType(facings);
                handleChangeInput(e); // Call handleChangeInput to update formData
              };



  return (
    <>

      <div className={styles.container}>
        <div className={styles.maincontainer}>
          <h1>Tenant Preferences</h1>
          <div className={styles.cc1}>
            <label>
              <input
                type="checkbox"
                name="tenantPreference"
                value="bachelorMale"
                checked={tenantPreference === "bachelorMale"}
                onChange= {handleChangeInput}
              />
              Bachelor Male
            </label>

            <label>
              <input
                type="checkbox"
                name="tenantPreference"
                value="bachelorFemale"
                checked={tenantPreference === "bachelorFemale"}
                onChange={(e) => handleChangeInput(e)}
              />
              Bachelor Female
            </label>

            <label>
              <input
                type="checkbox"
                name="tenantPreference"
                value="family"
                checked={tenantPreference === "family"}
                onChange={(e) => handleChangeInput(e)}
              />
              Family
            </label>
          </div>

          <div className={styles.cc2}>
          <div>
              <label htmlFor="bhk">Select BHK</label>
              <select
                id="bhk"
                name="bhk"
                value={selectedbhkType}
                onChange={handlebhkChange}
              >
                <option>Select BHK</option>
                {bhkType.map(bhk => (
                    <option key={bhk.id} value={bhk.id}>
                      {bhk.bhk}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label htmlFor="area">Area</label>
              <input
                type="text"
                id="area"
                name="area"
                onChange={(e) => handleChangeInput(e)}
                placeholder="Area"
              />
            </div>

            <div>
              <label htmlFor="areaType">Area Type</label>
              <select
                id="areaType"
                name="areaType"
                
                onChange={(e) => handleChangeInput(e)}
              >
                <option value="">Select Area Type</option>
                <option value="BuiltUp">BuiltUp</option>
                <option value="Carpet">Carpet</option>
                <option value="Total">Total</option>
              </select>
            </div>

            <div>
              <label htmlFor="inValue">In</label>
              <select
                id="inValue"
                name="inValue"
               
                onChange={(e) => handleChangeInput(e)}
              >
                <option value="">Select Option</option>
                <option value="Sqft">Sqft</option>
                <option value="yard">yard</option>
                <option value="Acre">Acre</option>
                
              </select>
            </div>

            <div>
              <label htmlFor="availableFrom">Available From</label>
              <input
                type="text"
                id="availableFrom"
                name="availableFrom"
                
                onChange={(e) => handleChangeInput(e)}
                placeholder="Available From"
              />
            </div>
          </div>

          <div className={styles.cc3}>
            <div>
              <label htmlFor="furnishing">Furnishing</label>
              <select
                id="furnishing"
                name="furnishing"
                value={furnishedtype}
                onChange={handlefurChange}
              >
                <option value="">Select Furnishing</option>
                {furnished.map(fur => (
                    <option key={fur.id} value={fur.id}>
                      {fur.ftype}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label htmlFor="floor">Floor</label>
              <select
                id="floor"
                name="floor"
                value={floorTypes}
                onChange={handlefloorChange}
              >
                <option value="">Select Floor</option>
                {floorType.map(floor => (
                    <option key={floor.id} value={floor.id}>
                      {floor.floor}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label htmlFor="facings">Facing</label>
              <select
                id="facings"
                name="facings"
                value={facingType}
                onChange={handlefacingChange}
              >
                <option value="">Select Facing</option>
                {facings.map(facing => (
                    <option key={facing.id} value={facing.id}>
                      {facing.facings}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className={styles.cc4}>
            <input
              type="text"
              placeholder="Specify Other Details (If Any)"
              id="otherDetails1"
              name="otherDetails1"
              
              onChange={(e) => handleChangeInput(e)}
            />
            <h1>150 Character Remaining</h1>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.previousbutton}
          onClick={handlePrevStep}
          >
            Prev
          </button>
          <button
            type="button"
            className={styles.nextbutton}
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Rentdetails;
