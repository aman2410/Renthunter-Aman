// pages/components/RazorpayForm.js

import styles from './RazorpayForm.module.css';

const RazorpayForm = ({ selectedPlan, handlePaymentSuccess }) => {
    const openPayModal = async () => {
        try {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.async = true;
          script.onload = () => {
            const rzp = new Razorpay({
              key: 'rzp_test_fOLi9gOIcgNeLQ', // Replace with your actual Razorpay API key
              amount: selectedPlan.cost * 100, // Amount in paise (multiply by 100)
              currency: 'INR',
              name: 'RENTHUNTER',
              description: 'Payment for ' + selectedPlan.pname,
              image: '/favicon.ico', // Replace with your company logo URL
              handler: function (response) {
                handlePaymentSuccess(response);
              },
            });
    
            rzp.open();
          };
          document.body.appendChild(script);
        } catch (error) {
          console.error('Error loading Razorpay:', error);
        }
      };
  return (
    <div className={styles.razorpayForm}>
      <h3>Selected Plan: {selectedPlan.pname}</h3>
      <h4>Amount: {selectedPlan.cost} INR</h4>
      <button onClick={openPayModal}>Pay Now</button>
    </div>
  );
};

export default RazorpayForm;
