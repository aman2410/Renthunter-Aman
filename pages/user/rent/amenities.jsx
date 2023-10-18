import React, { useState,useEffect } from 'react';
import styles from './rentdetails.module.css';
import Amenities from '@/pages/components/postproperties/amenities';
import Services from '@/pages/components/postproperties/services';
import { useRouter } from 'next/router';
import axios from "axios";

const AmenitiesDetails = ({formData, handleChangeInput,amenities,services, handleNextStep,handlePrevStep, }) => {
  const router = useRouter();
  

  // Initialize additional fields for Page 3

  const [availableServices, setAvailableServices] = useState("");
   const [nearbyData, setNearbyData] = useState([]);
  const [servicedata, setservicedata] = useState([]);
  const [parkingOption, setParkingOption] = useState(
    localStorage.getItem('parkingOption') || ''
  );
  const [selectedAmenities, setSelectedAmenities] = useState(
    (formData.amenities && formData.amenities.split(',')) || []
  );
  const [selectedServices, setSelectedServices] = useState(
    (formData.services && formData.services.split(',')) || []
  );
  const [otherDetails2, setOtherDetails] = useState(
    localStorage.getItem('otherDetails2') || ''
  );


    // Function to handle checkbox changes
    const handleCheckboxChange = (e) => {
      const checkboxId = e.target.id;
      const isChecked = e.target.checked;

  
      // Get the current nearby value from formData or initialize it as an empty string
      const currentAmenities = formData?.amenities || '';
  
      let updatedAmenities = '';
  
      if (isChecked) {
        // If the checkbox is checked, add the checkboxId only if it's not already in the list
        const amenitiesArray = currentAmenities.split(',').filter(item => item.trim() !== '');
        if (!amenitiesArray.includes(checkboxId)) {
          amenitiesArray.push(checkboxId);
        }
        updatedAmenities = amenitiesArray.join(',');
      } else {
        // If the checkbox is unchecked, remove the checkboxId if it exists in the list
        const amenitiesArray = currentAmenities.split(',').filter(item => item.trim() !== '');
        const index = amenitiesArray.indexOf(checkboxId);
        if (index !== -1) {
          amenitiesArray.splice(index, 1);
        }
        updatedAmenities = amenitiesArray.join(',');
      }
  
      // Update the formData with the new nearby string
      handleChangeInput({
        target: {
          name: 'amenities',
          value: updatedAmenities,
        },
      });
    };
  
    useEffect(() => {
      // Fetch data from the server when the component mounts
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/amenities');
        setNearbyData(response.data);
      } catch (error) {
        console.error('Error fetching nearby data:', error);
      }
    };

     // Function to handle checkbox changes
     const handleCheckboxChange1 = (e) => {
      const checkboxId = e.target.id;
      const isChecked = e.target.checked;
  
      // Get the current nearby value from formData or initialize it as an empty string
      const currentServices = formData?.services || '';
  
      let updatedservices = '';
  
      if (isChecked) {
        // If the checkbox is checked, add the checkboxId only if it's not already in the list
        const servicesArray = currentServices.split(',').filter(item => item.trim() !== '');
        if (!servicesArray.includes(checkboxId)) {
          servicesArray.push(checkboxId);
        }
        updatedservices = servicesArray.join(',');
      } else {
        // If the checkbox is unchecked, remove the checkboxId if it exists in the list
        const servicesArray = currentServices.split(',').filter(item => item.trim() !== '');
        const index = servicesArray.indexOf(checkboxId);
        if (index !== -1) {
          nearbyArray.splice(index, 1);
        }
        updatedservices = servicesArray.join(',');
      }
  
      // Update the formData with the new nearby string
      handleChangeInput({
        target: {
          name: 'services',
          value: updatedservices,
        },
      });
    };
  
    useEffect(() => {
      // Fetch data from the server when the component mounts
      fetchData();
    }, []);
  
    const fetchData1 = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/servicetypes');
        setservicedata(response.data);
      } catch (error) {
        console.error('Error fetching service data:', error);
      }
    };
    useEffect(() => {
      // Fetch data from the server when the component mounts
      fetchData1();
    }, []);
  return (
    <>

      <div className={styles.container}>
         <div className={styles.maincontainer}>
          <h1>Parking</h1>
          
            <div className= {styles.radiobutton_1}>
              <label>
                <input
                  type="radio"
                  name="parkingOptions"
                  value="BikeParking"
                  checked={formData.parkingOption === "BikeParking"}
                  onChange={(e) => handleChangeInput(e)}
                />
                BikeParking
              </label>

              <label>
                <input
                  type="radio"
                  name="parkingOptions"
                  value="Carparking"
                  checked={formData.parkingOption === "Carparking"}
                  onChange={(e) => handleChangeInput(e)}
                />
                Car Parking
              </label>

              <label>
                <input
                  type="radio"
                  name="parkingOptions"
                  value="No"
                  checked={formData.parkingOption === "No"}
                  onChange={(e) => handleChangeInput(e)}
                />
                No Parking
              </label>

              
            </div>

            <div className={styles.cc1}>
            <div className={styles.ic1}>
            <h1>Amenities</h1>


            <div className= {styles.horizontal_view}>

            {nearbyData.map((item) => (
              
              <div key={item.id} className={styles.ic2}>
                
                <label>
                  <input
                    type="checkbox"
                    id={item.id}
                    name='amenities'
                    value={item.id}
                    checked={selectedAmenities.includes(item.id) || (amenities?.includes(item.id) ?? false)}
                    onChange={(e) => {
                      handleChangeInput(e);
                      handleCheckboxChange(e);
                    }}
                  />
                  {item.atype}
                </label>
              </div>
            ))}
            </div>
          </div>
          <div className={styles.ic1}>
            <h1>Services</h1>

            <div className= {styles.horizontal_view2  }>

            {servicedata.map((ser) => (
              
              <div key={ser.id} className={styles.ic2}>
                
                <label>
                  <input
                    type="checkbox"
                    id={ser.id}
                    name='services'
                    value={ser.id}
                    checked={services?.includes(ser.id) ?? false}
                    onChange={handleCheckboxChange1}
                  />
                  {ser.stype}
                </label>
              </div>
            ))}

</div>
          </div>
            </div>

            <div className={styles.cc4}>
              <input
                type="text"
                placeholder="Specify Other Details (If Any)"
                value={formData.otherDetails2}
                onChange={handleChangeInput}
                name='otherDetails2'
              />
              {/* <h1>150 Character Remaining</h1> */}
            </div>

            <div className={styles.button}>
              <button className={styles.previousbutton}>
                <a href="/user/home/rentdetails">Previous</a>
              </button>
              <button type="submit" className={styles.nextbutton}
              onClick={handleNextStep}
          >
            Next
          </button>
            </div>

        </div>
      </div>
    </>
  );
};

export default AmenitiesDetails;
