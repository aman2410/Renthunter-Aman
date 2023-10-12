import React from 'react'
import styles from './payment.module.css'

const Payment = ({ forformData, handleChangeInput, handleSubmitFormData,handlePrevStep }) => {
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