import React, { useState, useEffect } from "react";
import styles from "./dailyrental.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Rentdetails = ({
  formData,
  handleChangeInput,
  handleNextStep,
  handlePrevStep,
  tenantPreference,
}) => {
  const [bhkType, setBhkType] = useState([]);
  const [selectedbhkType, setselectedbhkType] = useState("");
  const [furnished, setFurnished] = useState([]);
  const [furnishedtype, setFurnishedType] = useState("");
  const [floorType, setFloorType] = useState([]);
  const [floorTypes, setFloorTypes] = useState();
  const [facings, setFacings] = useState([]);
  const [facingType, setFacingType] = useState("");

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
      const response = await axios.get("http://localhost:5000/api/bhk-types");
      setBhkType(response.data);
    } catch (error) {
      console.error("Error fetching BHK types:", error);
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
      const response = await axios.get("http://localhost:5000/api/floortype");
      setFloorType(response.data);
    } catch (error) {
      console.error("Error:", error);
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
      const response = await axios.get("http://localhost:5000/api/furnished");
      setFurnished(response.data);
    } catch (error) {
      console.error("Error:", error);
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
      const response = await axios.get("http://localhost:5000/api/facings");
      setFacings(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Function to handle state change
  const handlefacingChange = (e) => {
    const facings = e.target.value;
    setFacingType(facings);
    handleChangeInput(e); // Call handleChangeInput to update formData
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    if (name === "tenantPreference") {
      // Toggle the checkbox value
      handleChangeInput({
        target: { name, value: tenantPreference === value ? "" : value },
      });
    } else {
      handleChangeInput(e);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.maincontainer}>
          <h3>Tenant Preferences</h3>
          
          <div className={styles.cc1}>
            <label>
              <input
                type="checkbox"
                id="bachelorMale"
                name="tenantPreference"
                value="bachelorMale"
                checked={tenantPreference === "bachelorMale"}
                onChange={handleCheckboxChange}
              />
              Bachelor Male
            </label>

            <label>
              <input
                type="checkbox"
                id="bachelorFemale"
                name="tenantPreference"
                value="bachelorFemale"
                checked={tenantPreference === "bachelorFemale"}
                onChange={handleCheckboxChange}
              />
              Bachelor Female
            </label>

            <label>
              <input
                type="checkbox"
                id="family"
                name="tenantPreference"
                value="family"
                checked={tenantPreference === "family"}
                onChange={handleCheckboxChange}
              />
              Family
            </label>
          </div>

          <div className={styles.cc2}>
            <div className= {styles.container_1}>
              <label htmlFor="bhk">Select BHK</label>
              <select
                id="bhk"
                name="bhk"
                value={selectedbhkType}
                onChange={handlebhkChange}
              >
                {/* <option>Select BHK</option> */}
                {bhkType.map((bhk) => (
                  <option key={bhk.id} value={bhk.id}>
                    {bhk.bhk}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="area">Area of space</label>
              <input
                type="text"
                id="area"
                name="area"
                onChange={(e) => handleChangeInput(e)}
                placeholder="Enter details"
              />
            </div>

            <div>
              <label htmlFor="areaType">Select Area Type</label>
              {/* Only dropdowns are shown, not the label  */}
              <select
                id="areaType"
                name="areaType"
                onChange={(e) => handleChangeInput(e)}
              >
                {/* <option value="">Select Area Type</option> */}
                <option value="BuiltUp">Built-Up</option>
                <option value="Carpet">Carpet</option>
                <option value="Total">Total</option>
              </select>
            </div>

            <div>
              <label htmlFor="inValue">Area In</label>
              <select
                id="inValue"
                name="inValue"
                onChange={(e) => handleChangeInput(e)}
              >
                {/* <option value="">Select Option</option> */}
                <option value="Sqft">Sqft</option>
                <option value="yard">yard</option>
                <option value="Acre">Acre</option>
              </select>
            </div>

            {/* <div>
              <label htmlFor="availableFrom">Available From</label>
              <input
                type="text"
                id="availableFrom"
                name="availableFrom"
                
                onChange={(e) => handleChangeInput(e)}
                // placeholder="Available From"
              />
            </div> */}
            <div className={styles.in_one_line}>
            <div className={styles.cc5}>
              <label htmlFor="availableFrom">Available From</label>
              <DatePicker
                id="availableFrom"
                name="availableFrom"
                selected={formData.availableFrom}
                onChange={(date) =>
                  handleChangeInput({
                    target: { name: "availableFrom", value: date },
                  })
                }
                placeholderText="Select a date"
              />
            </div>
          
          </div>

          <div className={styles.cc3}>
            <div>
              <label htmlFor="furnishing">Select Furnishing</label>
              <select
                id="furnishing"
                name="furnishing"
                value={furnishedtype}
                onChange={handlefurChange}
              >
                {/* <option value="">Select Furnishing</option> */}
                {furnished.map((fur) => (
                  <option key={fur.id} value={fur.id}>
                    {fur.ftype}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="floor">Select Floor</label>
              <select
                id="floor"
                name="floor"
                value={floorTypes}
                onChange={handlefloorChange}
              >
                {/* <option value="">Select Floor</option> */}
                {floorType.map((floor) => (
                  <option key={floor.id} value={floor.id}>
                    {floor.floor}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="facings">Select Facing</label>
              <select
                id="facings"
                name="facings"
                value={facingType}
                onChange={handlefacingChange}
              >
                {/* <option value="">Select Facing</option> */}
                {facings.map((facing) => (
                  <option key={facing.id} value={facing.id}>
                    {facing.facings}
                  </option>
                ))}
              </select>
            </div>
          </div>
          </div>
          <div className={styles.cc4} id={styles.cc4_id}>
            <input
              type="text"
              placeholder="Specify Other Details (If Any)"
              id="otherDetails"
              name="otherDetails"
              onChange={(e) => handleChangeInput(e)}
            />
            {/* <h1>150 Character Remaining</h1> */}
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.previousbutton} onClick={handlePrevStep}>
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
