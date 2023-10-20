import React, { useState, useEffect } from "react";
import styles from "./rentdetails.module.css";
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
  const [floorTypes, setFloorTypes] = useState("");
  const [facings, setFacings] = useState([]);
  const [facingType, setFacingType] = useState("");
  const [selectedTenantPreference, setSelectedTenantPreference] = useState("");

  useEffect(() => {
    fetchBhkTypes();
    fetchFurnishedTypes();
    fetchfloorTypes();
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

  const handlebhkChange = (e) => {
    const bhkType = e.target.value;
    setselectedbhkType(bhkType);
    handleChangeInput(e);
  };

  const fetchfloorTypes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/floortype");
      setFloorType(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlefloorChange = (e) => {
    const floorType = e.target.value;
    setFloorTypes(floorType);
    handleChangeInput(e);
  };

  const fetchFurnishedTypes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/furnished");
      setFurnished(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlefurChange = (e) => {
    const furnished = e.target.value;
    setFurnishedType(furnished);
    handleChangeInput(e);
  };

  const fetchFacingsTypes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/facings");
      setFacings(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlefacingChange = (e) => {
    const facings = e.target.value;
    setFacingType(facings);
    handleChangeInput(e);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.maincontainer}>
          {/* <h3>Tenant Preferences</h3> */}
          <div className={styles.cc2}>
            <label htmlFor="tenantPreference">Tenant Preferences:</label>
            <select
              id="tenantPreference"
              name="tenantPreference"
              value={tenantPreference}
              onChange={(e) => handleChangeInput(e)}
            >
              <option value="Bachelor Male">Bachelor Male</option>
              <option value="Bachelor Female">Bachelor Female</option>
              <option value="Family">Family</option>
            </select>
          </div>
          <div className={styles.cc2}>
            <div className={styles.container_1}>
              <label htmlFor="bhk">Select BHK</label>
              <select
                id="bhk"
                name="bhk"
                value={selectedbhkType}
                onChange={handlebhkChange}
              >
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
              <select
                id="areaType"
                name="areaType"
                onChange={(e) => handleChangeInput(e)}
              >
                <option value="">Select Area Type</option>
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
                <option value="">Select Option</option>
                <option value="Sqft">Sqft</option>
                <option value="yard">yard</option>
                <option value="Acre">Acre</option>
              </select>
            </div>
            
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
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.previousbutton} onClick={handlePrevStep}>
            Previous
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