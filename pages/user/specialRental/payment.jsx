import React from 'react'
import styles from './payment.module.css'

const Payment = ({ forformData, handleChangeInput, handleSubmitFormData,handlePrevStep }) => {
<<<<<<< HEAD
  // const handleSubmitFormData = async () => {
  //   // Make an API request to store the data
  //   try {
  //     const response = await fetch('http://localhost:5000/api/storeFormsData', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.status === 200) {
  //       router.push('/user/userhome'); // Redirect to a success page or handle accordingly
  //     } else {
  //       console.error('Data storage failed');
  //       // Handle error or show a message to the user
  //     }
  //   } catch (error) {
  //     console.error('API request error:', error);
  //     // Handle API request error
  //   }
  // };
=======

>>>>>>> origin/main


  return (
    <>      
      <div className= {styles.container}>

        
              
        <div className= {styles.maincontainer}>

            <div className={styles.cc1}>
                <div className={styles.cc2}>
                <h1>Guest User</h1>
                </div>	

                <div className={styles.cc2}>
                <h1>Normal Plan</h1>
                </div>

                <div className={styles.cc2}>
                <h1>Special Plan</h1>
                </div>	

                <div className={styles.cc2}>
                <h1>Renthunter Super User</h1>
                </div>	
                </div>
                
                
                

</div>
<div className={styles.button}>
            <button className={styles.previousbutton}>Previous</button>
            <button className={styles.nextbutton}
            onClick={handleSubmitFormData}
          >            Submit
          </button>
            </div></div></>
  )
}

export default Payment;