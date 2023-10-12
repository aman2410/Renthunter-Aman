// first.jsx
import React, { useRef, useEffect } from 'react';
import styles from '../user/first.module.css';

const LocationInput = () => {
    const locationInputRef = useRef(null);
  
    // Function to initialize Google Maps autocomplete
    const initAutocomplete = () => {
      const autocomplete = new window.google.maps.places.Autocomplete(
        locationInputRef.current,
        {
          types: ['(cities)'], // Restrict to cities
          componentRestrictions: { country: 'IN' } // Restrict to India (IN)
        }
      );
    };

  useEffect(() => {
    // Load Google Maps script and initialize autocomplete
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCZLiZff4EUU1YkSPIpxZdADSJCiarUAd4&libraries=places&callback=initAutocomplete"
    ;
    googleMapsScript.async = true;
    googleMapsScript.onload = initAutocomplete;
    document.head.appendChild(googleMapsScript);
  }, []);

  return (
    <div className={styles.input_container}>
      <label htmlFor={styles.location}></label>
      <input
        type="text"
        placeholder="Enter Location"
        id="location"
        ref={locationInputRef}
      />
      <button>SEARCH</button>
    </div>
  );
};

export default LocationInput;
