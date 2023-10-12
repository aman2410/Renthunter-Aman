// pages/api/users.js

import { createConnection } from 'mysql';

export default async (req, res) => {
  // MySQL Connection Configuration
  const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'renthunter'
  });

  // Connect to the MySQL database
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      res.status(500).json({ message: 'Database connection error' });
      return;
    }

    // Fetch user data from the "users" table
    db.query('SELECT * FROM users', (error, results) => {
      if (error) {
        console.error('Error querying the database:', error);
        res.status(500).json({ message: 'Error fetching user data' });
        return;
      }

      // Send the user data as JSON response
      res.status(200).json(results);
    });
  });
};
