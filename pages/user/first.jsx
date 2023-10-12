import  React from 'react';
import Link from 'next/link';
import Navbar from '../components/navbar';
import styles from '@/pages/user/first.module.css';
import Extranavlogin from '../components/extranavlogin';
import Navbarlogin from '../components/navbarlogin';
import LocationInput from '../components/LocationInput';
let First = () => {
  return (    
 <>
 <Extranavlogin />
 <Navbarlogin />
 <div className= {styles.mainfunc}>
      <div className = {styles.buttondata}>
        <button className = {styles.btn} >Home</button>
        <button className = {styles.btn} >PG</button>
        <button className = {styles.btn}>Apartment</button>
        <button className = {styles.btn} >Search</button>

      </div>

      <div className= {styles.searchbox_container}>
        <div className = {styles.search_box}>
        <LocationInput />
      </div>
      </div>
    </div></>      



    
  );
}
export default First;

