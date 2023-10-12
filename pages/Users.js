// pages/Users.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend API
    axios.get('/api/users')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more user data fields here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
