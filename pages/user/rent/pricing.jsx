import React, { useState, useEffect } from "react";
import styles from './pricing.module.css'
import { useRouter } from 'next/router';



const Pricing = ({formData, handleChangeInput, handleNextStep,handlePrevStep, tenantPreference}) => {

  return (
    <>

      <div className={styles.container}>

        <div className={styles.maincontainer}>
          <div className={styles.cc1}>
            <div>
              <label htmlFor="rentAmount">Rent Amount</label>
              <input
                type="text"
                placeholder="Rent Amount"
                id="rentAmount"
                name="rentAmount"
                value={formData.rentAmount}
                onChange={(e) => handleChangeInput(e)}
                
              />
            </div>

            <div>
              <label htmlFor="deposit">Deposit</label>
              <input
                type="text"
                placeholder="Deposit"
                id="deposit"
                name="deposit"
                value={formData.deposit}
                onChange={(e) => handleChangeInput(e)}
                
              />
            </div>

            <div className={styles.cc2}>
              <h1>Negotiable</h1>
              <div className={styles.radiobutton}>
                <label>
                  <input
                    type="radio"
                    name="isNegotiable"
                    value="Yes"
                    checked={formData.isNegotiable === "Yes"}
                    onChange={(e) => handleChangeInput(e)}
                  />
                  Yes
                </label>

                <label>
                  <input
                    type="radio"
                    name="isNegotiable"
                    value="No"
                    checked={formData.isNegotiable === "No"}
                    onChange={(e) => handleChangeInput(e)}
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className={styles.cc3}>
            <div>
              <label htmlFor="maintenanceCharges">Maintenance charges</label>
              <input
                type="text"
                placeholder="Maintenance charges"
                id="maintenanceCharges"
                name="maintenanceCharges"
                value={formData.maintenanceCharges}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div>
              <label htmlFor="agreementDuration">Agreement Duration</label>
              <input
                type="text"
                placeholder="Agreement Duration"
                id="agreementDuration"
                name="agreementDuration"
                value={formData.agreementDuration}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>

            <div>
              <label htmlFor="intimationBeforeLeaving">Intimation Before Leaving</label>
              <input
                type="text"
                placeholder="Intimation Before Leaving"
                id="intimationBeforeLeaving"
                name="intimationBeforeLeaving"
                value={formData.intimationBeforeLeaving}
                onChange={(e) => handleChangeInput(e)}
              />
            </div>
          </div>

          <div className={styles.cc4}>
            <input
              type="text"
              placeholder="Specify Other Details (If Any)"
              name="otherDetails3"
              value={formData.otherDetails3}
              onChange={(e) => handleChangeInput(e)}
            />
            <h1>150 Character Remaining</h1>
          </div>

          <div className={styles.button}>
            <button className={styles.previousbutton}>
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
      </div>
    </>
  );
};

export default Pricing;
