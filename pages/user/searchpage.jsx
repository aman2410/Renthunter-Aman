import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import styles from './search.module.css';
import PostProperty from "../components/POSTPROPERTY";
import Link from "next/link";
const SearchPage = () => {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    // Fetch property data from your server when the component mounts

    fetch('http://localhost:5000/api/propertyData') // Update the URL to match your server endpoint
      .then(response => response.json())
      .then(data => setPropertyData(data))
      .catch(error => console.error('Error fetching property data:', error));

  }, []);
  return (
    <>
      <div>
        <Extranav />
        <Navbar />
      </div>
      <div className={styles.main}>
      <div className={styles.sidenavbar}>
        
        <div className={styles.container}> 

            <h1>Filter</h1>
        <div className={styles.ic2}>
                <input type="checkbox" />
                <label>Show Only With Photos</label>
                </div>
                <h2>Posted By</h2>
                <div className={styles.ic2}>
                <input type="checkbox"  />
                <label>Owner</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Broker</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
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
                <input type="checkbox"  />
                <label>Furnished</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
                <label>Semi-Furnished</label>
                </div>
                <div className={styles.ic2}>
                <input type="checkbox"   />
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
        {propertyData.map(property => (
          <div key={property.id} className={styles.propertyRow}>
            <h2>{property.id}</h2>
<h2>{property.name_num}</h2>
<h2>{property.street}</h2>
<h2>{property.country}</h2>
<h2>{property.state}</h2>
<h2>{property.city}</h2>
<h2>{property.aname}</h2>
<h2>{property.land_mark}</h2>
<h2>{property.age_pro}</h2>
<h2>{property.near_by}</h2>
<h2>{property.other_details_1}</h2>
<h2>{property.tenant_type}</h2>
<h2>{property.bhk}</h2>
<h2>{property.area_build}</h2>
<h2>{property.area_build_type}</h2>
<h2>{property.area_build_in}</h2>
<h2>{property.adate}</h2>
<h2>{property.fur}</h2>
<h2>{property.floor}</h2>
<h2>{property.facings}</h2>
<h2>{property.other_details_2}</h2>
<h2>{property.parking}</h2>
<h2>{property.other_details2}</h2>
<h2>{property.rent_amt}</h2>
<h2>{property.deposit_amt}</h2>
<h2>{property.nego}</h2>
<h2>{property.maintanece_amt}</h2>
<h2>{property.agreement_dur}</h2>
<h2>{property.info_leave}</h2>
<h2>{property.other_details_4}</h2>
<img src={`/${property.img1}`} alt="Property" />
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
<h2>{property.kyc_utype}</h2>
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
<h2>{property.exp_date}</h2>

            
          </div>
        ))}
      
      </div>
      </div>
      
    </>
  );
}

export default SearchPage;

