import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './payment.module.css';
import RazorpayForm from '@/pages/components/razorpay';
const Payment = ({formData,setFormData, handleChangeInput, handleNextStep, handlePrevStep, uploadedImages, handleSubmitFormData}) => {
  const router = useRouter();
  const [paymentPlans, setPaymentPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    // Fetch payment plans when the component mounts
    fetch('http://localhost:5000/api/paymentPlans') // Update the URL as needed
      .then((response) => response.json())
      .then((data) => setPaymentPlans(data))
      .catch((error) => console.error('Error fetching payment plans:', error));
  }, []);

  const handlePaymentSubmission = () => {
    if (selectedPlan) {
      // Replace this with your Razorpay integration logic
      // You'll need to pass the selectedPlan to your Razorpay integration code
      const paymentAmount = selectedPlan.cost;

      // Redirect to your Razorpay integration route
      
    } else {
      alert('Please select a payment plan before submitting.');
    }
  };

  const handlePaymentSuccess = (response) => {
    // Handle successful payment, e.g., update your database
    console.log('Payment Successful', response);
// Update the formData with payment details
 // Replace with the actual property name from Razorpay response

// Now, set the selected plan ID as the payment_type
if (selectedPlan) {
  const selectedPlanId = selectedPlan.id; // Assuming that the plan has an 'id' field
  const paymentAmount = selectedPlan.cost;
  const paymentId = response.razorpay_payment_id;
  console.log('Selected Plan ID:', selectedPlanId);
  console.log('Payment Amount:', paymentAmount);
  console.log('Payment ID:', paymentId);
  setFormData({
    ...formData,
    doc_no: paymentId,
    paym: paymentAmount,
    payment_types: selectedPlanId, // Store the selected plan ID in the payment_type field
  });
} else {
  alert('Please select a payment plan before submitting.');
}

// After successful payment, you can submit the form data
handleSubmitFormData();
};


   return (
    <>
      <div>
        {/* Additional content can be added here */}
      </div>
      <div className={styles.container}>

        <div className={styles.maincontainer}>

          <div className={styles.paymentPlans}>
            {paymentPlans.map((plan) => (
              <div key={plan.id} className={styles.paymentPlan}>
                <h2>{plan.pname}</h2>
                <h3>Amount: {plan.cost}</h3>
                <h3>Months: {plan.mon}</h3>
                <h3>{plan.fea1}</h3>
                <h3>{plan.fea2}</h3>
                <h3>{plan.fea3}</h3>
                <h3>{plan.fea4}</h3>
                <h3>{plan.fea5}</h3>
                <h3>{plan.fea6}</h3>
                <h3>{plan.fea7}</h3>
                <h3>{plan.fea8}</h3>


                <button onClick={() => setSelectedPlan(plan)}>Select Plan</button>
              </div>
            ))}
          </div>
          {selectedPlan && (
            <RazorpayForm selectedPlan={selectedPlan} handlePaymentSuccess={handlePaymentSuccess} />
          )}
        </div>
        <button type="button" className={styles.nextbutton} onClick={handlePrevStep}>
          Previous
        </button>
        <button type="button" className={styles.nextbutton} onClick={handlePaymentSubmission}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Payment;