import multer, { memoryStorage } from 'multer';

const storage = memoryStorage(); // Store images in memory as buffers

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit (adjust as needed)
});

export default upload;
