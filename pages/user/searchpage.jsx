import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import styles from './search.module.css';
import axios from "axios";

const SearchPage = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [withPhotosOnly, setWithPhotosOnly] = useState(false);
  const [nearbyData, setNearbyData] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortOrder, setSortOrder] = useState("highToLow");
  const [filters, setFilters] = useState({
    owner: false,
    broker: false,
    builder: false,
    fulfur: false,
    sem: false,
    unfur: false,
  });
  const [minRent, setMinRent] = useState(0);
  const [maxRent, setMaxRent] = useState(1000000);

  useEffect(() => {
    fetch('http://localhost:5000/api/propertyData')
      .then(response => response.json())
      .then(data => setPropertyData(data))
      .catch(error => console.error('Error fetching property data:', error));
  }, []);

  useEffect(() => {
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

  const handleCheckboxChange = () => {
    setWithPhotosOnly(!withPhotosOnly);
  };

  const toggleAmenity = (amenityId) => {
    if (selectedAmenities.includes(amenityId)) {
      setSelectedAmenities(selectedAmenities.filter(id => id !== amenityId));
    } else {
      setSelectedAmenities([...selectedAmenities, amenityId]);
    }
  };

  const comparePropertyRelevance = (a, b) => {
    let relevanceA = 0;
    let relevanceB = 0;

    if (withPhotosOnly) {
      relevanceA += a.img1 ? 1 : 0;
      relevanceB += b.img1 ? 1 : 0;
    }

    if (relevanceA === relevanceB) {
      return sortOrder === "highToLow" ? b.rent_amt - a.rent_amt : a.rent_amt - b.rent_amt;
    } else {
      return sortOrder === "highToLow" ? relevanceB - relevanceA : relevanceA - relevanceB;
    }
  };

const filteredPropertyData = propertyData && Array.isArray(propertyData)
  ? propertyData.filter(property => {
      const propertyRent = property.rent_amt;
      return (
        (!withPhotosOnly || property.img1) &&
        (!filters.owner || property.kyc_utype === "Owner") &&
        (!filters.broker || property.kyc_utype === "Broker") &&
        (!filters.builder || property.kyc_utype === "Builder") &&
        (!filters.sem || property.ftype === "Semi furnished") &&
        (!filters.fulfur || property.ftype === "Fully furnished") &&
        (!filters.unfur || property.ftype === "Unfurnished") &&
        propertyRent >= minRent &&
        propertyRent <= maxRent &&
        (selectedAmenities.length === 0 || selectedAmenities.includes(property.near_by))
      );
    }):[]
        .sort(comparePropertyRelevance);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleMinRentChange = (event) => {
    setMinRent(event.target.value);
  };

  const handleMaxRentChange = (event) => {
    setMaxRent(event.target.value);
  };

  const handleFilterChange = (filterName) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <>
      <div>
        <Extranav />
        <Navbar />
      </div>

      <div className={styles.maincontainer}>
        <div className={styles.main}>
          <div className={styles.sidenavbar}>
            <h1>Filter</h1>
            <div className={styles.ic2}>
              <label>Show Only With Photos</label>
              <input
                type="checkbox"
                checked={withPhotosOnly}
                onChange={handleCheckboxChange}
              />
            </div>
            <h2>Posted By</h2>
            <div className={styles.ic2}>
              <label>Owner</label>
              <input
                type="checkbox"
                checked={filters.owner}
                onChange={() => handleFilterChange("owner")}
              />
            </div>
            <div className={styles.ic2}>
              <label>Broker</label>
              <input
                type="checkbox"
                checked={filters.broker}
                onChange={() => handleFilterChange("broker")}
              />
            </div>
            <div className={styles.ic2}>
              <label>Builder</label>
              <input
                type="checkbox"
                checked={filters.builder}
                onChange={() => handleFilterChange("builder")}
              />
            </div>

            <h2>Sort by Relevance</h2>
            <div className={styles.ic2}>
              <label>Price High To Low</label>
              <input
                type="radio"
                name="sortOrder"
                value="highToLow"
                checked={sortOrder === "highToLow"}
                onChange={handleSortChange}
              />
            </div>
            <div className={styles.ic2}>
              <label>Price Low To High</label>
              <input
                type="radio"
                name="sortOrder"
                value="lowToHigh"
                checked={sortOrder === "lowToHigh"}
                onChange={handleSortChange}
              />
            </div>

            <h2>Rent Range:</h2>
            <div>
              <label>Min Rent:</label>
              <input
                type="number"
                value={minRent}
                onChange={handleMinRentChange}
              />
            </div>
            <div>
              <label>Max Rent:</label>
              <input
                type="number"
                value={maxRent}
                onChange={handleMaxRentChange}
              />
            </div>

            <h2>Nearby</h2>
            <div className={styles.filtercontainer}>
              {nearbyData.map((item) => (
                <div key={item.id} className={styles.ic2}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(item.id)}
                      onChange={() => toggleAmenity(item.id)}
                    />
                    {item.atype}
                  </label>
                </div>
              ))}
            </div>

            <h2>Amenities</h2>
            <div className={styles.filtercontainer}>
              {nearbyData.map((item) => (
                <div key={item.id} className={styles.ic2}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(item.id)}
                      onChange={() => toggleAmenity(item.id)}
                    />
                    {item.atype}
                  </label>
                </div>
              ))}
            </div>


            <h2>Services</h2>
            <div className={styles.filtercontainer}>
              {nearbyData.map((item) => (
                <div key={item.id} className={styles.ic2}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(item.id)}
                      onChange={() => toggleAmenity(item.id)}
                    />
                    {item.atype}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.propertyList}>
          {filteredPropertyData.map(property => (
            <div key={property.post_home_id} className={styles.propertyRow}>
              <div className={styles.List}>
                <div className={styles.image}>
                  <img src={`/${property.img1}`} alt="Property" />
                  RENTHUNTER2023HO0{property.post_home_id}
                </div>
                <div className={styles.details}>
                  <div className={styles.avilabledetails}>
                  <h3>paragrah</h3>
                    <h3>Available From: {property.adate}</h3>
                  </div>
                  <h3 id={styles.h3}>{property.bhk} BHK</h3>
                  {/* <h3 id={styles.h3}>Area: {property.aname}, {property.city}, {property.state}</h3> */}
                  
                  <label id={styles.h2}>Rent Amount: </label>
                  <h3>Rs. {property.rent_amt}</h3>

                  <label id={styles.h2}>Deposit Amount: </label>
                  <h3>Rs. {property.deposit_amt}</h3>

                  <h3>Posted By: {property.kyc_utype}</h3>
                  
                  <h3>Parking Option: {property.parking}</h3>
                  <h3 id={styles.h2}>Nearby: {property.name}</h3>
                  <h3>Amenities: {property.atype}</h3>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
