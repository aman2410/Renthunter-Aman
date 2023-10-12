<<<<<<< HEAD
import React, { useState } from 'react';
import styles from './styles/DefineScratchCards.module.css'; // You can create this CSS file for styling
=======
import React from 'react';
import styles from './DefineScratchCards.module.css'; // You can create this CSS file for styling
>>>>>>> origin/main
import Extranav from '@/pages/components/extranav';
import Adminnavbar from '@/pages/components/adminnav';

const DefineScratchCards = () => {
<<<<<<< HEAD
  // Define state variables for the form inputs
  const [propertyType1, setPropertyType1] = useState(''); // Added propertyType1 state
  const [propertyType2, setPropertyType2] = useState(''); // Added propertyType2 state
  const [category, setCategory] = useState('');
  const [pricingPlan, setPricingPlan] = useState('');
  const [totalScratchCards, setTotalScratchCards] = useState('');
  const [total100Cards, setTotal100Cards] = useState('');
  const [total50Cards, setTotal50Cards] = useState('');
  const [tryAgainCards, setTryAgainCards] = useState('');

  // Function to handle form submission
  const handleAddCards = () => {
    // Calculate the total of 100 Rs Cards, 50 Rs Cards, and Try Again Scratch Cards
    const total =
      parseInt(total100Cards) +
      parseInt(total50Cards) +
      parseInt(tryAgainCards);

    // Validate if the total matches Total Scratch Cards
    if (total === parseInt(totalScratchCards)) {
      // Perform your submission logic here
      console.log('Form submitted with the following data:');
      console.log('Select Property Type 1:', propertyType1);
      console.log('Select Property Type 2:', propertyType2);
      console.log('Category:', category);
      console.log('Pricing Plan:', pricingPlan);
      console.log('Total Scratch Cards:', totalScratchCards);
      console.log('Total Rs. 100 Cards:', total100Cards);
      console.log('Total Rs. 50 Cards:', total50Cards);
      console.log('Try Again Cards:', tryAgainCards);
    } else {
      alert('Total of Rs. 100 Cards, Rs. 50 Cards, and Try Again Cards must match Total Scratch Cards.');
    }
  };

  return (
    <>
      <Extranav />
      <Adminnavbar />
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <h1>Add Cards</h1>

          <div className={styles.inputContainer}>
            <div>
              <label htmlFor="selectPropertyType1">Select Property Type 1</label>
              <select
                id="selectPropertyType1"
                value={propertyType1}
                onChange={(e) => setPropertyType1(e.target.value)}
              >
                <option value="">Choose Property Type 1</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label htmlFor="selectPropertyType2">Select Property Type 2</label>
              <select
                id="selectPropertyType2"
                value={propertyType2}
                onChange={(e) => setPropertyType2(e.target.value)}
              >
                <option value="">Choose Property Type 2</option>
                <option value="Rent">Rent</option>
                <option value="Lease">Lease</option>
                <option value="Buy">Buy</option>
                <option value="Sale">Sale</option>
              </select>
            </div>

            <div>
              <label htmlFor="selectCategory">Select Category</label>
              <select
                id="selectCategory"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                <option value="Home">Home</option>
                <option value="PG">PG</option>
                <option value="Flat apartment">Flat apartment</option>
                <option value="Office space">Office space</option>
                <option value="Shops">Shops</option>
                <option value="Warehouse/Godown">Warehouse/Godown</option>
                <option value="Special Rentals">Special Rentals</option>
              </select>
            </div>

            <div>
              <label htmlFor="selectPlan">Select Plan</label>
              <select
                id="selectPlan"
                value={pricingPlan}
                onChange={(e) => setPricingPlan(e.target.value)}
              >
                <option value="">Select Plan</option>
                <option value="Guest User">Guest User</option>
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>
            </div>

            <div>
              <label htmlFor="totalScratchCard">Total Scratch Card</label>
              <input
                type="number"
                id="totalScratchCard"
                placeholder="Enter Total Number of Scratch Card"
                value={totalScratchCards}
                onChange={(e) => setTotalScratchCards(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="total100Cards">Total Rs. 100 Cards</label>
              <input
                type="number"
                id="total100Cards"
                placeholder="Enter 100 Rs Cards"
                value={total100Cards}
                onChange={(e) => setTotal100Cards(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="total50Cards">Total Rs. 50 Cards</label>
              <input
                type="number"
                id="total50Cards"
                placeholder="Enter 50 Rs Cards"
                value={total50Cards}
                onChange={(e) => setTotal50Cards(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="totalTryAgainCards">Try Again Cards</label>
              <input
                type="number"
                id="totalTryAgainCards"
                placeholder="Enter Try Again Cards"
                value={tryAgainCards}
                onChange={(e) => setTryAgainCards(e.target.value)}
              />
            </div>
          </div>

          <button onClick={handleAddCards}>Add Cards</button>
        </div>

        <div className={styles.carddetails}>
          <h1>Card Details</h1>
          <div className={styles.inputRow}>
            {/* Input for "Show" */}
            <div className={styles.inputContainer}>
              <label htmlFor="showInput">Show</label>
              <select id="showInput">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Input for "Search" */}
            <div className={styles.inputContainerRight}>
              <label htmlFor="searchInput">Search</label>
              <input type="text" id="searchInput" />
            </div>
          </div>

          {/* Table for displaying card details */}
          <table className={styles.table}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Plan</th>
                <th>Pricing Plan</th>
                <th>Number Cards Remaining</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </>
=======
  return (

    <><Extranav />
    <Adminnavbar/>    
    
    
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1>Add Cards</h1>

        
        <div className={styles.inputContainer}>
          <div>
          <label htmlFor="nameInput">Name</label>
          <input type="text" id="nameInput" />
          </div>

          <div>
          <label htmlFor="selectProperties" id = "selectProperties" >Select Properties</label>
          <select>
            {/* Add options for properties */}
          </select>
          </div>
          <div>
          <label htmlFor="selectPlan">Select Plan</label>
          <select id="selectPlan">
            {/* Add options for plans */}
          </select>
          </div>
        
          <div>
          <label htmlFor="totalScratchCard">Total Scratch Card</label>
          <input type="number" id="totalScratchCard" />
          </div>
          <div>
          <label htmlFor="total100Cards">Total 100's Cards</label>
          <select id="total100Cards">
            <option value="100">100</option>
            {/* Add more options as needed */}
          </select>
          </div>
        
          <div>
          <label htmlFor="totalTryAgainCards">Try Again Cards</label>
          <select id="totalTryAgainCards">
            {/* Add options for try again cards */}
          </select>
        </div>
          </div>
        
        <button>Add Cards</button>
        </div>

      

      <div className={styles.carddetails}>
        <h1>Card Details</h1>
        <div className={styles.inputRow}>
          <div className={styles.inputContainer}>
            <label htmlFor="showInput">Show</label>
            <select id="showInput">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={styles.inputContainerRight}>
            <label htmlFor="searchInput">Search</label>
            <input type="text" id="searchInput" />
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Property Plan</th>
              <th>Pricing Plan</th>
              <th>Number Cards Remaining</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
          </tbody>
        </table>
      </div>
    </div></>
>>>>>>> origin/main
  );
};

export default DefineScratchCards;
