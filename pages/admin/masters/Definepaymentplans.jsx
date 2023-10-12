import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './../masters/style/define.module.css'; // Import your CSS file for styling

import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefinePaymentPlans = () => {
  const [paymentPlan, setPaymentPlan] = useState({
    pname: '',
    cost: '',
    mon: '',
    fea1: '',
    fea2: '',
    fea3: '',
    fea4: '',
    fea5: '',
    fea6: '',
    fea7: '',
    fea8: '',
    ptype: '',
    off_per: '',
    disabled: false,
    cuser: 1, // Replace with the actual user ID
  });

  const [paymentPlans, setPaymentPlans] = useState([]);

  useEffect(() => {
    // Fetch payment plans data when the component mounts
    fetchPaymentPlans();
  }, []);

  const fetchPaymentPlans = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/paymentplans');
      if (response.status === 200) {
        setPaymentPlans(response.data);
      }
    } catch (error) {
      console.error('Error fetching payment plans:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/paymentplans', paymentPlan);
      if (response.status === 200) {
        // Payment plan added successfully, optionally refresh payment plans data
        fetchPaymentPlans();
        // Reset the form fields
        setPaymentPlan({
          pname: '',
          cost: '',
          mon: '',
          fea1: '',
          fea2: '',
          fea3: '',
          fea4: '',
          fea5: '',
          fea6: '',
          fea7: '',
          fea8: '',
          ptype: '',
          off_per: '',
          disabled: false,
          cuser: 1, // Replace with the actual user ID
        });
      }
    } catch (error) {
      console.error('Error submitting payment plan:', error);
    }
  };

  return (
    <>
      <Extranav />
      <Adminnavbar />

      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h1>Define Payment Plans</h1>
          <div className={styles.inputContainer}>
            <div className={styles.inputtype}>
              <label htmlFor="pname">Plan Name</label>
              <input
                type="text"
                id="pname"
                value={paymentPlan.pname}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, pname: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="cost">Cost</label>
              <input
                type="text"
                id="cost"
                value={paymentPlan.cost}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, cost: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="mon">Duration (In Months)</label>
              <input
                type="text"
                id="mon"
                value={paymentPlan.mon}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, mon: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea1">Feature1</label>
              <input
                type="text"
                id="fea1"
                value={paymentPlan.fea1}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea1: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea2">Feature2</label>
              <input
                type="text"
                id="fea2"
                value={paymentPlan.fea2}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea2: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea3">Feature3</label>
              <input
                type="text"
                id="fea3"
                value={paymentPlan.fea3}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea3: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea4">Feature4</label>
              <input
                type="text"
                id="fea4"
                value={paymentPlan.fea4}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea4: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea5">Feature5</label>
              <input
                type="text"
                id="fea5"
                value={paymentPlan.fea5}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea5: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea6">Feature6</label>
              <input
                type="text"
                id="fea6"
                value={paymentPlan.fea6}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea6: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea7">Feature7</label>
              <input
                type="text"
                id="fea7"
                value={paymentPlan.fea7}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea7: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="fea8">Feature8</label>
              <input
                type="text"
                id="fea8"
                value={paymentPlan.fea8}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, fea8: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="ptype">Property Type</label>
              <input
                type="text"
                id="ptype"
                value={paymentPlan.ptype}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, ptype: e.target.value })
                }
              />
            </div>
            <div className={styles.inputtype}>
              <label htmlFor="off_per">Offer %</label>
              <input
                type="text"
                id="off_per"
                value={paymentPlan.off_per}
                onChange={(e) =>
                  setPaymentPlan({ ...paymentPlan, off_per: e.target.value })
                }
              />
            </div>
            <div className={styles.checkboxcontainer}>
              <input
                type="checkbox"
                id="disabled"
                checked={paymentPlan.disabled}
                onChange={(e) =>
                  setPaymentPlan({
                    ...paymentPlan,
                    disabled: e.target.checked,
                  })
                }
              />
              <label htmlFor="disabled">Click to Enable</label>
            </div>
          </div>
          <button className={styles.button} onClick={handleSubmit}>
            Update Payment Plan
          </button>
        </div>

        <div className={styles.carddetails}>
          <h1>Payment Plan Details</h1>

          <div className={styles.showsearch}>
            <div>
              <label htmlFor="showInput">Show</label>
              <select>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                {/* Add more options as needed */}
              </select>
            </div>

            <div>
              <label htmlFor="searchInput">Search</label>
              <div>
                <input type="text" id="searchInput" />
              </div>
            </div>
          </div>

          <div className={styles.table_container}>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>Plan Name</th>
                  <th>Cost</th>
                  <th>Duration (In Months)</th>
                  <th>Feature1</th>
                  <th>Feature2</th>
                  <th>Feature3</th>
                  <th>Feature4</th>
                  <th>Feature5</th>
                  <th>Feature6</th>
                  <th>Feature7</th>
                  <th>Feature8</th>
                  <th>Property Type</th>
                  <th>Offer %</th>
                </tr>


                {paymentPlans.map((plan, index) => (
                  <tr key={plan.id}>
                    <th>{index + 1}</th>
                    {/* Add Edit and Delete buttons */}
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>{plan.pname}</th>
                    <th>{plan.cost}</th>
                    <th>{plan.mon}</th>
                    <th>{plan.fea1}</th>
                    <th>{plan.fea2}</th>
                    <th>{plan.fea3}</th>
                    <th>{plan.fea4}</th>
                    <th>{plan.fea5}</th>
                    <th>{plan.fea6}</th>
                    <th>{plan.fea7}</th>
                    <th>{plan.fea8}</th>
                    <th>{plan.ptype}</th>
                    <th>{plan.off_per}</th>
                  </tr>
                ))}

              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefinePaymentPlans;
