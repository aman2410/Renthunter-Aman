'use client';
import React from 'react';
import SimpleMultiStepForm from './multistepform';
import Extranav from '@/pages/components/extranav';
import Navbar from '@/pages/components/navbar';
import styles from './../multistepform/multi.module.css'


const page = () => {
  return (
    <><div className={styles.maincontainer}>
      <Extranav />
      <Navbar />
    </div>
    
    <div className={styles.maincontainer}><SimpleMultiStepForm showStepNumber={true} /></div></>
  
  );
};

export default page;