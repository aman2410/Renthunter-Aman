import React from "react";
import styles from "./rules.module.css";

const Rules = ({
  formData,
  handleChangeInput,
  handleNextStep,
  handlePrevStep,
  uploadedImages,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.maincontainer}>
          <div className={styles.cc2}>
            <div className={styles.radiobutton}>
              <label>
                <input type="checkbox" name="options" value="Option 1" />
                Only for Vegeterian
              </label>

              <label>
                <input type="checkbox" name="options" value="Option 2" />
                Pets Not Allowed
              </label>

              <label>
                <input type="checkbox" name="options" value="Option 2" />
                No Drinking/ Smoking
              </label>

              <label>
                <input type="checkbox" name="options" value="Option 2" />
                Water Charges Extra
              </label>

              <label>
                <input type="checkbox" name="options" value="Option 2" />
                Electricity Charges Extra
              </label>

              <div className={styles.cc4}>
                <input
                  type="text"
                  name="otherDetails4"
                  placeholder="Specify Other Details (If Any)"
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
        <button className={styles.previousbutton} onClick={handlePrevStep}>
            Previous
        </button>

          <button className={styles.nextbutton} onClick={handleNextStep}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Rules;
