import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import styles from './search.module.css';
import PostProperty from "../components/POSTPROPERTY";
import Link from "next/link";
const SearchPage = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [withPhotosOnly, setWithPhotosOnly] = useState(false); // State to track the checkbox
  const [filters, setFilters] = useState({
    withPhotos: false,
    owner: false,
    broker: false,
    builder: false,
      fulfur: false,
  sem: false,
  unfur: false,
    // Add more filters as needed
  });

  useEffect(() => {
    // Fetch property data from your server when the component mounts

    fetch('http://localhost:5000/api/propertyData') // Update the URL to match your server endpoint
      .then(response => response.json())
      .then(data => setPropertyData(data))
      .catch(error => console.error('Error fetching property data:', error));

  }, []);

// Filter the property data based on the selected filters
const filteredPropertyData = propertyData.filter(property => {
  console.log("Checking property:", property);
  if (withPhotosOnly && !property.img1) {
    return false;
  }
  if (filters.owner && property.kyc_utype !== "Owner") {
    return false;
  }
  if (filters.broker && property.kyc_utype !== "Broker") {
    return false;
  }
  if (filters.builder && property.kyc_utype !== "Builder") {
    return false;
  }

  if (filters.sem && property.ftype !== "Semi furnished") {
    return false;
  }
  if (filters.fulfur && property.ftype !== "Fully furnished") {
    return false;
  }
  if (filters.unfur && property.ftype !== "Unfurnished") {
    return false;
  }
  // Add more filter conditions as needed
  return true; // If none of the conditions match, include the property
});


const handleCheckboxChange = () => {
  setWithPhotosOnly(!withPhotosOnly);
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
        <input
                type="checkbox"
                checked={withPhotosOnly}
                onChange={handleCheckboxChange}
              />
                <label>Show Only With Photos</label>
                </div>
                <h2>Posted By</h2>
                <div className={styles.ic2}>
                <input
              type="checkbox"
              checked={filters.owner}
              onChange={() =>
                setFilters({ ...filters, owner: !filters.owner })
              }
            />
                <label>Owner</label>
                </div>
                <div className={styles.ic2}>
                <input
              type="checkbox"
              checked={filters.broker}
              onChange={() =>
                setFilters({ ...filters, broker: !filters.broker })
              }
            />
                <label>Broker</label>
                </div>
                <div className={styles.ic2}>
                <input
              type="checkbox"
              checked={filters.builder}
              onChange={() =>
                setFilters({ ...filters, builder: !filters.builder })
              }
            />
                <label>Builder</label>
                </div>

                <h2>Available From</h2>
                <div className={styles.ic2}>
                <input type="checkbox"  />
                <label>Immediately</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Within a Week</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Within Two Weeks</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Within a Month</label>
                </div>

                <h2>Furnished</h2>
                <div className={styles.ic2}>
                <input
              type="checkbox"
              checked={filters.fulfur}
              onChange={() =>
                setFilters({ ...filters, fulfur: !filters.fulfur })
              }
            />
                <label>Furnished</label>
                </div>
                <div className={styles.ic2}>
                <input
              type="checkbox"
              checked={filters.sem}
              onChange={() =>
                setFilters({ ...filters, sem: !filters.sem })
              }
            />
                <label>Semi-Furnished</label>
                </div>
                <div className={styles.ic2}>
                <input
              type="checkbox"
              checked={filters.unfur}
              onChange={() =>
                setFilters({ ...filters, unfur: !filters.unfur })
              }
            />
                <label>Unfurnished</label>
                </div>

                <h2>Sort by Relevance</h2>
                <div className={styles.ic2}>
                <input type="checkbox"  />
                <label>Price High To Low</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Price Low To High</label>
                </div>


                <h2>Parking</h2>
                <div className={styles.ic2}>
                <input type="checkbox"  />
                <label>With Parking</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Without Parking</label>
                </div>


                <h2>Show Near By</h2>
                <div className={styles.ic2}>
                <input type="checkbox"  />
                <label>With Parking</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Without Parking</label>
                </div>

        </div>
        </div>
        <div className={styles.propertyList}>
        {filteredPropertyData.map(property => (
          <div key={property.post_home_id} className={styles.propertyRow}>
          <div className={styles.List}> 




<div className={styles.image}>
<img src={`/${property.img1}`} alt="Property" /></div>

<div className={styles.details}>
<div className={styles.avilabledetails}>
         <h3>Available From: {property.adate}</h3></div>

<h3 id={styles.h3}>{property.bhk} BHK</h3>

<h3 id={styles.h3}>Area: {property.aname}, {property.city}, {property.state}</h3>
<label id={styles.h2}>Deposit Amount: </label>

<h3>Rs. {property.deposit_amt}</h3>

<label id={styles.h2}>Rent Amount: </label>
<h3>Rs. {property.rent_amt}</h3>
<label id={styles.h2}>Plot Area:</label>
<h3>{property.area_build} {property.area_build_in} {property.area_build_type}</h3>

<h3 id={styles.h2}>Nearby: 
{property.near_by}</h3>

<h3>Facing: 
  {property.facings}</h3>

  <h3>Parking Option: 
    {property.parking}</h3>


    <h3>Posted By: {property.kyc_utype}</h3>



{/* <h2>{property.post_home_id}</h2>
<h2>{property.name_num}</h2>
<h2>{property.street}</h2>
<h2>{property.country}</h2> 
<h2>{property.land_mark}</h2>
<h2>Age of Property: {property.age_pro}</h2>

<h2>{property.other_details_1}</h2>
<h2>Tenant Type: {property.tenant_type}</h2>



<h2>Unit: {property.ftype}</h2>
<h2>Number of Floor: {property.floor}</h2>

<h2>{property.other_details_2}</h2>

<h2>{property.other_details2}</h2>

<h2>Negotiable: {property.nego}</h2>
<h2>Maintenance Amount: {property.maintanece_amt}</h2>
<h2>Agreement Duration: {property.agreement_dur}</h2>
<h2>Inform Before Leaving: {property.info_leave} Months</h2>
<h2>{property.other_details_4}</h2>
<h2>{property.rule_non_veg}</h2>
<h2>{property.rule_pets}</h2>
<h2>{property.rule_drink}</h2>
<h2>{property.rule_water}</h2>
<h2>{property.rule_elec}</h2>
<h2>{property.other_details_5}</h2>
<h2>{property.kyc_name}</h2>
<h2>{property.kyc_gender}</h2>
<h2>{property.kyc_mob}</h2>
<h2>{property.kyc_email}</h2>
<h2>{property.kyc_add1}</h2>
<h2>{property.kyc_pin}</h2>

<h2>{property.kyc_utime}</h2>
<h2>{property.payment_type}</h2>
<h2>{property.cdate}</h2>
<h2>{property.ctime}</h2>
<h2>{property.cuser}</h2>
<h2>{property.cstatus}</h2>
<h2>{property.disabled}</h2>
<h2>{property.counter}</h2>
<h2>{property.yrr}</h2>
<h2>{property.doc_no}</h2>
<h2>{property.pstat}</h2>
<h2>{property.promo}</h2>
<h2>{property.off_code}</h2>
<h2>{property.paym}</h2>
<h2>{property.exp_date}</h2> */}
</div>
            
          </div></div>
        ))}
      
      </div></div>
      
      
    </>
  );
}

export default SearchPage;

