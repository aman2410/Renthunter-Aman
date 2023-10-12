// pages/api/facings.js

import { createConnection } from 'mysql';

const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'renthunter',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request to fetch facings
    try {
      // Query to fetch data from facing_types table
      const query = 'SELECT * FROM facing_types';

      // Execute the query
      db.query(query, (error, results) => {
        if (error) {
          console.error('Error fetching facings:', error);
          res.status(500).json({ error: 'Error occurred while fetching facings' });
        } else {
          res.status(200).json(results);
        }
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request to insert a facing type
    try {
      const { facingType } = req.body;

      if (!facingType) {
        res.status(400).json({ error: 'Facing Type is required' });
        return;
      }

      // Insert the facing type into the facing_types table
      const query = 'INSERT INTO facing_types (facings) VALUES (?)'; // Use the correct column name
      db.query(query, [facingType], (error, result) => {
        if (error) {
          console.error('Error inserting facing:', error);
          res.status(500).json({ error: 'Error occurred while inserting facing' });
        } else {
          res.status(201).json({ message: 'Facing Type added successfully' });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
