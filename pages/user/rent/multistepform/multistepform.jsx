import React, { useState, useEffect } from 'react';
import PostHome from '../postprop';
import AmenitiesDetails from '../amenities';
import Pricing from '../pricing';
import Gallery from '../gallery';
import Rules from '../rules';
import KYC from '../kyc';
import Payment from '../payment';
import Rentdetails from '../rentdetails';
import styles from './multi.module.css';
import Router from 'next/router';

export const initialFormData = {
  nameOrNumber: '',
  street: '',
  country: '',
  selectState: '',
  selectCity: '',
  selectArea: '',
  landmark: '',
  ageOfProperty: '',
  tenantPreference: '',
  bhk: '',
  area: '',
  areaType: '',
  inValue: '',
  availableFrom: '',
  furnishing: '',
  floor: '',
  otherDetails: '',
  parkingOptions: '',
  uploadedImages: [], // Change to an array to store multiple image URLs
  rentAmount: '',
  deposit: '',
  isNegotiable: '',
  maintenanceCharges: '',
  agreementDuration: '',
  intimationBeforeLeaving: '',
  rules: '', // Add a field for rules
  yourName: '',
  selectGender: '',
  mobileNumber: '',
  emailId: '',
  permanentAddress: '',
  pinCode: '',
  areYou: '',
  availableToConnect: '',
};

const stepsArray = ['Home', 'Rent Details', 'Amenities', 'Pricing', 'Gallery', 'Rules', 'KYC', 'Payment'];

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState('Home');
  const [formData, setFormData] = useState(initialFormData);

  const handleNextStep = async () => {
   

    if (step === 'Gallery') {
      setStep('Rules');
    } else {
      if (step === 'Home') setStep('Rent Details');
      else if (step === 'Rent Details') setStep('Amenities');
      else if (step === 'Amenities') setStep('Pricing');
      else if (step === 'Pricing') setStep('Gallery');
      else if (step === 'Gallery') setStep('Rules');
      else if (step === 'Rules') setStep('KYC');
      else if (step === 'KYC') setStep('Payment');
    }
  };

  const handlePrevStep = () => {
    if (step === 'Rules') setStep('Payment');
    else if (step === 'KYC') setStep('Rules');
    else if (step === 'Rules') setStep('Gallery');
    else if (step === 'Gallery') setStep('Pricing');
    else if (step === 'Pricing') setStep('Amenities');
    else if (step === 'Amenities') setStep('Rent Details');
    else if (step === 'Rent Details') setStep('Home');
  };

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;

    if (name === 'agreeToTerms') {
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else if (name === 'uploadedImages') {
      const updatedImages = Array.isArray(value) ? value : [value];

      setFormData({
        ...formData,
        uploadedImages: updatedImages,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  async function handleSubmitFormData() {
    try {
      const formDataToSend = new FormData();

      
  
      // Append form fields to the FormData object
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      // Append uploaded images to the FormData object
      for (let i = 0; i < formData.uploadedImages.length; i++) {
        formDataToSend.append('uploadedImages', formData.uploadedImages[i]);
      }
  
      // Send the form data to your API
      const response = await fetch('http://localhost:5000/api/storeFormDataWithImage', {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (response.status === 200) {
        Router.push('/user/userhome');
      } else {
        console.error('Data storage failed:', await response.text());
        // Handle the error or display an error message to the user
      }
    } catch (error) {
      console.error('API request error:', error);
      // Handle the error or display an error message to the user
    }
  }
          useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    return (
      <section className={styles.top}>
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
              item === step ? 'bg-blue-500' : ''
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className={styles.maincontainer}>
      {renderTopStepNumbers()}

      <div className={styles.top}>
        <div>
          {step === 'Home' ? (
            <PostHome formData={formData} handleChangeInput={handleChangeInput} handleNextStep={handleNextStep} />
          ) : null}
        </div>

        <div>
          {step === 'Rent Details' ? (
            <Rentdetails
              formData={formData}
              handleChangeInput={handleChangeInput}
              handlePrevStep={handlePrevStep}
              handleNextStep={handleNextStep}
              tenantPreference={formData.tenantPreference}
            />
          ) : null}
        </div>
      </div>

      {step === 'Amenities' ? (
        <AmenitiesDetails
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}

      {step === 'Pricing' ? (
        <Pricing
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}

      {step === 'Gallery' ? (
        <Gallery
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
          setFormData={setFormData}
        />
      ) : null}

      {step === 'Rules' ? (
        <Rules
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}

      {step === 'KYC' ? (
        <KYC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'Payment' ? (
        <Payment
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
    </div>
  );
};

export default SimpleMultiStepForm;
