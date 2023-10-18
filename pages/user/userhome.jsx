import React, { useState } from "react";
import Navbar from "../components/navbar";
import Extranav from "../components/extranav";
import styles from './first.module.css';
import PostProperty from "../components/POSTPROPERTY";
import LocationInput from '../components/LocationInput';

const UserHome = () => {
  const buttonOptions = ["Residential Property", "Commercial Property", "PG", "Open Plots/Lands"];
  const buttonsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentPage(Math.max(currentPage - 1, 0));
    } else if (direction === "right") {
      setCurrentPage(Math.min(currentPage + 1, buttonOptions.length - buttonsPerPage));
    }
  };

  const displayedButtons = buttonOptions.slice(
    currentPage,
    currentPage + buttonsPerPage
  );


  

  return (
    <>
      <div>
        <Extranav />
        <Navbar />
      </div>
      <div className={styles.mainfunc}>
      <div className={styles.extracontainer}>
        <div className={styles.buttondata}>
          <button className={` ${styles.circularBtn}`} onClick={() => handleClick("left")}>
            {"<"}
          </button>
          {displayedButtons.map((option, index) => (
            <button className={styles.btn} key={index}>
              {option}
            </button>
          ))}
          <button className={` ${styles.circularBtn}`} onClick={() => handleClick("right")}>
            {">"}
          </button>
        </div>
        <div className={styles.maincontainer}>
          <PostProperty />
          <div className={styles.searchbox_container}>
            <div className={styles.search_box}>
              <LocationInput />
          </div>
        </div>
        </div>
      </div>
      </div>
      <div id="contact_us" className={styles.section}>
      <div className={styles.firsthead}>
                <h1>Send You Message</h1>
            <div className={styles.input}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />

                    <label htmlFor="Email">Email</label>
                    <input type="text" id="Email" />

                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="text" id="mobile" />



                    <label htmlFor="message">Message</label>
                    <input type="text" id="message" />

                    <button>Submit</button>

            </div> </div>
      </div>

      {/* About Us Section */}
      <div id="about-us" className={styles.section}>
      <div className={styles.maincontainer}>
            <img src="/loginbg.jpg"></img>

        
        <div className={styles.container}>


            <h1>About Us</h1>

            <p>
                Renthunter is a platform were you can find Home, PG, Flat Appartment, Commercial Space easily at your desired place, we provide hassel free environment for both owner and the tenant.
                As our tagline says 'step in through browsing" you can make a move by just entering the location to get various types of properties on your screen, with renthunter promo offer now owner can use a trial period of 30 days to get tenant faster than ever, our team will help you to get register with Renthunter incase you struct in filling form. Acti Go to
                Just drop a mail to contactus@renthunter.in or call +9176100 65100 you will get assistance within a minute with 24/7 support.
            </p>

        </div>

    </div>
      </div>
    </>
  )};


export default UserHome;
