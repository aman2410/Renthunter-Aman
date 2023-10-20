import express from 'express';
import { createConnection } from 'mysql';
import bcrypt from 'bcrypt';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import moment from 'moment';

import { fileURLToPath } from 'url';
const app = express();
const port = process.env.PORT || 5000;
// import upload from './multerConfig.js';
import multer from 'multer';

// Middleware
const __dirname = fileURLToPath(import.meta.url);
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(express.static('public'));


// MySQL Connection to connect with database
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '8269282344#AAA',
  database: 'renthunter'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});
// 1. for registering users
app.post('/user/signup', async (req, res) => {
  console.log('Received signup request:', req.body);
  const { name, mobile, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('Hashed Password:', hashedPassword);

  const newUser = {
    name,
    mobile,
    email,
    password: hashedPassword
  };

  db.query('INSERT INTO users SET ?', newUser, (err, result) => {
    if (err) {
      console.log('Error:', err);
      console.log('SQL Query:', db.format('INSERT INTO users SET ?', newUser)); // Log the query
      res.status(500).json({ message: 'Error occurred while signing up' });
    } 
    
    else {
      console.log('Result:', result);
      res.status(200).json({ message: 'User signed up successfully' });
    }
  });
});

// 2. role based login     
app.post('user/signin', async (req, res) => {
  const { mobile, password } = req.body;

  db.query('SELECT * FROM users WHERE mobile = ?', [mobile], async (err, results) => {
    if (err) {
      console.log('Error:', err);
      res.status(500).json({ message: 'Error occurred while logging in' });
    } else {
      if (results.length === 0) {
        res.status(401).json({ message: 'Invalid credentials' });
      } else {
        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          res.status(200).json({ message: 'Login successful', role: user.role });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      }
    }
  });
});
// 3.select state & populated from this

app.get('/api/states', (req, res) => {
  db.query('SELECT id, sname FROM state_types', (err, result) => {
    if (err) {
      console.error('Error fetching states:', err);
      res.status(500).json({ error: 'Error occurred while fetching states' });
    } else {
      res.json(result);
    }
  });
});

// 4. Add this route to fetch cities by state
app.get('/api/cities/:stateId', (req, res) => {
  const stateId = req.params.stateId;
  
  // Make a database query to fetch cities based on the stateId
  db.query('SELECT id, cname FROM city_types WHERE sname = ?', [stateId], (err, result) => {
    if (err) {
      console.error('Error fetching cities by state:', err);
      res.status(500).json({ error: 'Error occurred while fetching cities' });
    } else {
      res.json(result);
    }
  });
});

// 5. Add this route to fetch areas based on the selected city
app.get('/api/areas/:cityId', (req, res) => {
  const { cityId } = req.params;

  // Modify the SQL query based on your database schema
  const sql = 'SELECT id, aname,cname,sname FROM area_types WHERE cname = ?';

  // Execute the SQL query with the selected cityId
  db.query(sql, [cityId], (err, result) => {
    if (err) {
      console.error('Error fetching areas:', err);
      res.status(500).json({ error: 'Error occurred while fetching areas' });
    } else {
      res.json(result);
    }
  });
});
//  for Define areas page to handle input 
app.post('/api/areas', (req, res) => {
  const { sname, cname, aname, disabled, cdate, cuser, ctime } = req.body;

  const query = 'INSERT INTO area_types (sname, cname, aname, disabled, cdate, cuser, ctime) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [sname, cname, aname, disabled, cdate, cuser, ctime];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error creating area:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    
    console.log('Area added successfully');
    res.status(201).json({ message: 'Area added successfully' });
  });
});

// tenant type is populated from this
app.get('/api/tenant-types', (req, res) => {
  db.query('SELECT id, ttype, ptype FROM tenant_types', (err, result) => {
    if (err) {
      console.error('Error fetching states:', err);
      res.status(500).json({ error: 'Error occurred while fetching states' });
    } else {
      res.json(result);
    }
  });
});

// Add a tenant type
app.post('/api/tenant-types', (req, res) => {
  const { propertyType} = req.body;
  const query = 'INSERT INTO tenant_types (ptype) VALUES (?)';
  const values = [propertyType];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding tenant type:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json({ message: 'Tenant type added successfully' });
  });
});


// bhk type pupulate 
app.get('/api/bhk-types', (req, res) => {
  const query = 'SELECT * FROM bhk_types';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching BHK types:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(200).json(results);
  });
});

// Add a BHK type
app.post('/api/bhk-types', (req, res) => {
  const { bhk, disabled } = req.body;
  const query = 'INSERT INTO bhk_types (bhk, disabled) VALUES (?, ?)';
  const values = [bhk, disabled];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding BHK type:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json({ message: 'BHK type added successfully' });
  });
});

// 7. Define a route to fetch data from amenities_type table
app.get('/api/amenities', (req, res) => {
  const query = 'SELECT * FROM amenities_type';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
    } else {
      res.json(results);
    }
  });
});

//8. Route to handle POST requests for adding amenities
app.post('/api/amenities', (req, res) => {
  const { atype, fclass, disabled } = req.body;
  const cdate = new Date().toISOString().slice(0, 10);
  const ctime = new Date().toLocaleTimeString();

  const query = `
    INSERT INTO amenities_type (atype, fclass, disabled, cdate, ctime)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [atype, fclass, disabled, cdate, ctime], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to add amenity' });
    } else {
      res.status(201).json({ message: 'Amenity added successfully' });
    }
  });
});

// 9. For add a city to the database
app.post('/api/cities', (req, res) => {
  const { sname, cname } = req.body;
  const query = 'INSERT INTO city_types (sname, cname) VALUES (?, ?)';
  db.query(query, [sname, cname], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to add city' });
    } else {
      res.status(201).json({ message: 'City added successfully' });
    }
  });
});

// 10.For fetch city data
app.get('/api/cities', (req, res) => {
  const query = 'SELECT * FROM city_types';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch cities' });
    } else {
      res.json(results);
    }
  });
});

// 11. Create a new floor type
app.post('/api/floortypes', async (req, res) => {
  try {
    const { floorType } = req.body;
    const result =  db.query(
      'INSERT INTO floor_types (floor) VALUES (?)',
      [floorType]
    );
    res.status(201).json({ message: 'Floor type added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 12. Fetch all floor types
app.get('/api/floortype', async (req, res) => {
  const query = 'SELECT * FROM floor_types';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch cities' });
    } else {
      res.json(results);
    }
  });
});


// 13. Create a new sharing

app.post('/api/sharingtypes', (req, res) => {
  const { ttype, cuser, cdate, ctime } = req.body;

  // Insert the data into the sharing_types table
  const sql = 'INSERT INTO sharing_types (ttype, cuser, cdate, ctime) VALUES (?, ?, ?, ?)';
  db.query(sql, [ttype, cuser, cdate, ctime], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Failed to insert data' });
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).json({ message: 'Data inserted successfully' });
  });
});


// 14. Fetch all sharing
// Add this endpoint to fetch sharing types
app.get('/api/sharingtypes', (req, res) => {
  // Query the sharing_types table to retrieve data
  const sql = 'SELECT * FROM sharing_types';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
      return;
    }
    res.status(200).json(results);
  });
});


// 15. Create a new food services type
app.post('/api/foodservice', async (req, res) => {
  try {
    const { food } = req.body;
    const result =  db.query(
      'INSERT INTO food_service (ttype) VALUES (?)',
      [food]
    );
    res.status(201).json({ message: 'Floor type added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// 16. Fetch all food services types
app.get('/api/foodservice', async (req, res) => {
  const query = 'SELECT * FROM food_service';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch cities' });
    } else {
      res.json(results);
    }
  });
});

// 17. Create a new furnished type
app.post('/api/furnished', async (req, res) => {
  try {
    const { furnished } = req.body;
    const result =  db.query(
      'INSERT INTO furnished_types (ftype) VALUES (?)',
      [furnished]
    )
    res.status(201).json({ message: 'Floor type added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// 18. Fetch all furnished types
app.get('/api/furnished', async (req, res) => {
  const query = 'SELECT * FROM furnished_types';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch cities' });
    } else {
      res.json(results);
    }
  });
});

// 19. Create a new nearby
app.post('/api/nearby', async (req, res) => {
  try {
    const { nearby } = req.body;
    const result =  db.query(
      'INSERT INTO near_by (name) VALUES (?)',
      [nearby]
    )
    res.status(201).json({ message: 'Floor type added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// 20. Fetch all nearby
app.get('/api/nearby', async (req, res) => {
  const query = 'SELECT * FROM near_by';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch cities' });
    } else {
      res.json(results);
    }
  });
});

// 21. Add API endpoint to save payment plan data
app.post('/api/paymentplans', (req, res) => {
  const {
    pname,
    cost,
    mon,
    fea1,
    fea2,
    fea3,
    fea4,
    fea5,
    fea6,
    fea7,
    fea8,
    ptype,
    off_per,
    disabled,
    cuser,
  } = req.body;

  // Insert the data into the payment_plans table
  const sql = `
    INSERT INTO payment_plans (pname, cost, mon, fea1, fea2, fea3, fea4, fea5, fea6, fea7, fea8, ptype, off_per, disabled, cdate, ctime, cuser)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), ?)
  `;

  db.query(
    sql,
    [
      pname,
      cost,
      mon,
      fea1,
      fea2,
      fea3,
      fea4,
      fea5,
      fea6,
      fea7,
      fea8,
      ptype,
      off_per,
      disabled,
      cuser,
    ],
    (err, results) => {
      if (err) {
        console.error('Error saving payment plan:', err);
        res.status(500).json({ error: 'Failed to save payment plan' });
      } else {
        res.status(200).json({ message: 'Payment plan saved successfully' });
      }
    }
  );
});

//22.  Add API endpoint to fetch payment plan data
app.get('/api/paymentplans', (req, res) => {
  // Query the payment_plans table to retrieve data
  const sql = 'SELECT * FROM payment_plans';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching payment plans:', err);
      res.status(500).json({ error: 'Failed to fetch payment plans' });
    } else {
      res.status(200).json(results);
    }
  });
});

// 23. Define a route to fetch data from amenities_type table
app.get('/api/servicetypes', (req, res) => {
  const query = 'SELECT * FROM service_type';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
    } else {
      res.json(results);
    }
  });
});

//24. Route to handle POST requests for adding amenities
app.post('/api/servicetypes', (req, res) => {
  const { stype, fclass, disabled } = req.body;
  const cdate = new Date().toISOString().slice(0, 10);
  const ctime = new Date().toLocaleTimeString();

  const query = `
    INSERT INTO service_type (stype, fclass, disabled, cdate, ctime)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [stype, fclass, disabled, cdate, ctime], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to add amenity' });
    } else {
      res.status(201).json({ message: 'Amenity added successfully' });
    }
  });
});

// 25. Create a new nearby
app.post('/api/rentaltype', async (req, res) => {
  try {
    const { rental } = req.body;
    const result =  db.query(
      'INSERT INTO rental_types (rtype) VALUES (?)',
      [rental]
    )
    res.status(201).json({ message: 'Floor type added successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// 26. Fetch all rentaltype
app.get('/api/rentaltype', async (req, res) => {
  const query = 'SELECT * FROM rental_types';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch cities' });
    } else {
      res.json(results);
    }
  });
});

// 27. Create a new property
app.post("/api/store", (req, res) => {
  const propertyData = req.body;

  const sql = `
    INSERT INTO post_home
    SET
      name_num = ?,
      street = ?,
      country = ?,
      city = ?,
      land_mark = ?,
      age_pro = ?,
      near_by = ?,
      tenant_type = ?`;

  // Pass your data as an array in the same order as the placeholders in the query
  const values = [
    propertyData.nameOrNumber,
    propertyData.street,
    propertyData.country,
    propertyData.city,
    propertyData.landmark,
    propertyData.ageOfProperty,
    propertyData.nearby,
    propertyData.tenantPreference,

  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting property:", err);
      res.status(500).json({ error: "Error inserting property" });
    } else {
      console.log("Property inserted successfully");
      res.status(201).json({ message: "Property inserted successfully" });
    }
  });
});
//  Define a route to fetch data from amenities_type table
app.get('/api/facings', (req, res) => {
  const query = 'SELECT * FROM facing_types';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
    } else {
      res.json(results);
    }
  });
});

// API endpoint to store form data
app.post('/api/storeFormData', (req, res) => {
  const formData = req.body;

  try {
    const query = `
      INSERT INTO form_data (
        first_name,
        last_name, 
        business_name, 
        business_city, 
        business_website, 
        business_email, 
        income_per_month, 
        tax_percentage, 
        agree_to_terms)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      formData.firstName,
      formData.lastName,
      formData.businessName,
      formData.businessCity,
      formData.businessWebsite,
      formData.businessEmail,
      formData.incomePerMonth,
      formData.taxPercantage,
      formData.agreeToTerms,
    ];

    db.query(query, values, (error, results) => {
      if (error) {
        console.error('Error storing data:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      console.log('Form data stored successfully');
      return res.status(200).json({ message: 'Data stored successfully' });
    });
  } catch (error) {
    console.error('Error storing data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});




// Create a storage engine for Multer
const storage = multer.diskStorage({
  destination: './public/images', // Update to the correct path relative to your server file
  filename: (_req, file, cb) => {
    const uniqueFilename = Date.now() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});

// Create a Multer instance with the storage engine
const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "uploadedImages") { // Ensure the field name matches here
      cb(null, true);
    } else {
      cb(new MulterError("Field name missing"));
    }
  }
});


// API endpoint for handling image upload and storing form data
app.post('/api/storeFormDataWithImage', upload.single('uploadedImages'), (req, res) => {
  
  try {
    // Extract form data from the request
    const formData = req.body;

    // Get the uploaded image file
    const uploadedImages = req.file;
    
    // Check if an image was uploaded
    if (!uploadedImages) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imageUrl = `images/${uploadedImages.filename}`; // Adjust the path as needed


    // Insert the form data and image URL into the database
    const query = `INSERT INTO post_home (
      name_num,
      street,
      country,
      state,
      city,
      aname,
      land_mark,
      age_pro,
      near_by,
      other_details_1,
      tenant_type,
      bhk,
      area_build,
      area_build_type,
      area_build_in,
      adate,
      fur,
      floor,
      facings,
      other_details_2,
      parking,
      amenities,
      services,
      other_details_3,
      rent_amt,
      deposit_amt,
      nego,
      maintanece_amt,
      agreement_dur,
      info_leave,
      other_details_4,
      img1,
      rule,
      other_details_5,
      kyc_name,
      kyc_gender,
      kyc_mob,
      kyc_email,
      kyc_add1,
      kyc_pin,
      kyc_utype,
      kyc_utime,
      payment_type,
      cdate,
      ctime,
      cuser,
      cstatus,
      disabled,
      counter,
      yrr,
      doc_no,
      pstat,
      promo,
      off_code,
      paym,
      exp_date
      )
    VALUES (
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?,
?        
       )`;
       const currentDate = moment().format('YYYY-MM-DD'); // Example format: '2023-10-15'
const currentTime = moment().format('HH:mm:ss'); // Example format: '13:45:30'
const values = [
    formData.nameOrNumber,
    formData.street,
    formData.country,
    formData.selectState,
    formData.selectCity,
    formData.selectArea,
    formData.landmark,
    formData.ageOfProperty,
    formData.nearby,
    formData.otherdetails1,
    formData.tenantPreference,
    formData.bhk,
    formData.area,
    formData.areaType,
    formData.inValue,
    formData.availableFrom,
    formData.furnishing,
    formData.floor,
    formData.facings,
    formData.otherDetails2,
    formData.parkingOptions,
    formData.amenities,
    formData.services,
    formData.otherDetails3,
    formData.rentAmount,
    formData.deposit,
    formData.isNegotiable,
    formData.maintenanceCharges,
    formData.agreementDuration,
    formData.intimationBeforeLeaving,
    formData.otherDetails4,
    imageUrl,
    formData.rules,
    formData.otherDetails,
    formData.yourName,
    formData.selectGender,
    formData.mobileNumber,
    formData.emailId,
    formData.permanentAddress,
    formData.pinCode,
    formData.areYou,
    formData.availableToConnect,
    formData.payment_types,
    currentDate,
    currentTime,
    null,
    null,
    null,
    null,
    null,
    formData.doc_no,
    null,
    null,
    null,
    formData.paym,
    null      
];

db.query(query, values, (err, result) => {
  if (err) {
    console.error('Database insert error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }

  // Move the uploaded image to a folder on your server
  const sourcePath = uploadedImages.path;
  const targetPath = `D:/next/renthunter/Renthunter-Aman/public/images/${uploadedImages.filename}`;
  fs.rename(sourcePath, targetPath, (err) => {
    if (err) {
      console.error('Error moving the uploaded file:', err);
      // Handle the error
    }
  });

  console.log('Data and image uploaded successfully');
  console.log('Generated Image URL:', imageUrl);
  console.log(formData);
  res.status(200).json({ success: true });
});
} catch (error) {
console.error('Error uploading image:', error);
res.status(500).json({ error: 'Internal server error' });
}
});


//  Define a route to fetch data from PostHome table
app.get('/api/propertyData', (req, res) => {
  const query = `
SELECT 
    p.id AS post_home_id, -- Alias the id from post_home
    f.id AS furnished_id, -- Alias the id from furnished_types
    p.*, 
    f.*
FROM 
    post_home p
LEFT JOIN 
    furnished_types f ON p.fur = f.id
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch data' });
    } else {
      res.json(results);
    }
  });
});


app.get('/api/paymentPlans', (req, res) => {
  // Fetch the payment plan data from the database
  // and send it as a JSON response
  const query = 'SELECT * FROM payment_plan';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: 'Failed to fetch payment plans' });
    } else {
      res.json(results);
    }
  });
});


import Razorpay from 'razorpay';
// Initialize Razorpay with your API key and secret
const razorpay = new Razorpay({
  key_id: 'rzp_test_fOLi9gOIcgNeLQ',
  key_secret: '6zkj8vsUWHSB0J1QrtClTk6K',
});


app.post('/createRazorpayOrder', async (req, res) => {
  const { amount } = req.body; // Get the amount from the client

  const orderOptions = {
    amount: amount, // Amount in paise
    currency: 'INR',
  };

  razorpay.orders.create(orderOptions, (err, order) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    return res.status(200).json(order);
  });
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



