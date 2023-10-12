import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import express from 'express';

const app = express();

export const config = {
  api: {
    bodyParser: false, // Disable the default JSON body parser
  },
};

const uploadDir = path.join(process.cwd(), 'D:', 'next', 'renthunter', 'pages', 'images');

// Create a storage engine for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = uuidv4() + path.extname(file.originalname);
    cb(null, uniqueFilename);
  },
});

// Create a multer instance with the storage engine
const upload = multer({ storage });

// Define the route for handling file uploads
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    // Access the uploaded file details from req.file
    const uniqueFilename = req.file.filename;

    // Return a JSON response with the public URL of the uploaded file
    const publicUrl = `/uploads/${uniqueFilename}`;
    res.status(200).json({ success: true, publicUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default app;
