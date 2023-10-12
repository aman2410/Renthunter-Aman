import React from 'react'
import styles from './kyc.module.css'
import { useRouter } from 'next/router';

const KYC = ({formData, handleChangeInput, handleNextStep,handlePrevStep, tenantPreference}) => {
  const router = useRouter();

  return (
    <>

      <div className={styles.container}>

        <div className={styles.maincontainer}>
          <div className={styles.cc2}>
            <div>
              <label htmlFor="yourName">Your Name</label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={formData.yourName}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div>
              <label htmlFor="selectGender">Select Gender</label>
              <select
                id="selectGender"
                name="selectGender"
                value={formData.selectGender}
                onChange={(e) => handleChangeInput(e)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                
              </select>
            </div>

            <div>
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div>
              <label htmlFor="emailId">Email Id</label>
              <input
                type="text"
                id="emailId"
                name="emailId"
                value={formData.emailId}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
          </div>

          <div className={styles.cc3}>
            <div>
              <label htmlFor="permanentAddress">Permanent Address</label>
              <input
                type="text"
                id="permanentAddress"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div>
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div>
              <label htmlFor="areYou">Are You</label>
              <select
                id="areYou"
                name="areYou"
                value={formData.areYou}
                onChange={(e) => handleChangeInput(e)}
              >
                <option value="owner">Owner</option>
                <option value="broker">Broker</option>
                <option value="builder">Builder</option>
              </select>
            </div>

            <div>
              <label htmlFor="availableToConnect">Available to Connect</label>
              <select
                id="availableToConnect"
                name="availableToConnect"
                value={formData.availableToConnect}
                onChange={(e) => handleChangeInput(e)}
              >
                <option value="Mondaytofriday">Monday to Friday</option>
                <option value="alldays">All days</option>
                <option value="weekends">Weekends</option>

              </select>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.previousbutton}>
            <a href="/user/home/payment">Previous</a>
          </button>
          <button className={styles.nextbutton} onClick={handleNextStep}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default KYC;
